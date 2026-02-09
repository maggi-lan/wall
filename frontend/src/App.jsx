import axios from "axios";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Header from "./components/Header.jsx";
import MessageBlock from "./components/MessageBlock.jsx";
import RateLimitedUI from "./components/RateLimitedUI.jsx";

function App() {
    const [adding, setAdding] = useState(true);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleAddBox = () => setAdding((val) => !val);

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
            <Header adding={adding} toggleAddBox={toggleAddBox} />

            {isRateLimited && <RateLimitedUI />}

            <div className="max-w-5xl mx-auto px-4 py-6">
                {loading && (
                    <div className="h-[70vh] bg-base-200 rounded-xl flex items-center justify-center">
                        <LoaderIcon className="animate-spin size-10" />
                    </div>
                )}

                {!loading && messages.length > 0 && !isRateLimited && (
                    <div
                        className="
                            h-[70vh]
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
