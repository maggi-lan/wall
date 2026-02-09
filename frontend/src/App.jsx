import axios from "axios";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Header from "./components/Header.jsx";
import MessageBlock from "./components/MessageBlock.jsx";
import MessageForm from "./components/MessageForm.jsx";
import RateLimitedUI from "./components/RateLimitedUI.jsx";

function App() {
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleAddBox = () => setIsFormDisplayed((val) => !val);

    // Fetch messages on initial load
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/wall");
                setMessages(res.data);
                setIsRateLimited(false);
            } catch (error) {
                if (error?.response?.status === 429)
                    setIsRateLimited(true);
                else
                    toast.error("Failed to load messages");
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div data-theme="retro" className="min-h-screen bg-base-100">
            <Header isFormDisplayed={isFormDisplayed} toggleAddBox={toggleAddBox} />

            {isRateLimited && <RateLimitedUI />}

            {isFormDisplayed && <MessageForm />}

            <div className="max-w-5xl mx-auto p-4">
                {loading && (
                    <div className="h-[80vh] bg-base-200 rounded-xl flex items-center justify-center">
                        <LoaderIcon className="animate-spin size-10" />
                    </div>
                )}

                {!loading && messages.length > 0 && !isRateLimited && (
                    <div
                        className="
                            h-[80vh]
                            bg-base-200
                            rounded-xl
                            p-4
                            overflow-y-auto
                            flex
                            flex-col
                            gap-3
                        "
                    >
                        {messages.map((message) => (
                            <MessageBlock
                                key={message._id}
                                message={message}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
