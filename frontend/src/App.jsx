import axios from "axios";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

import Header from "./components/Header.jsx";
import RateLimitedUI from "./components/RateLimitedUI.jsx";
import NoMessagesAvailable from "./components/NoMessagesAvailable.jsx";
import MessageWall from "./components/MessageWall.jsx";

import { connectSocket, disconnectSocket } from "./lib/socket.js";

function App() {
    // Define some states
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);  // 'true' if message box is displayed
    const [isRateLimited, setIsRateLimited] = useState(false);      // 'true' if rate limit is exceeded
    const [loading, setLoading] = useState(true);                   // 'true' if still waiting for initial message fetch
    const [messages, setMessages] = useState([]);                   // array containing messages (NOTE: message = { _id, content, createdAt })

    // Store the socket
    const socketRef = useRef(null);

    // Helps for toggling the message box
    const toggleAddBox = () => setIsFormDisplayed((val) => !val);

    // Helps to update the wall after user posts a message
    const addMessage = (newMessage) => setMessages((prev) => [newMessage, ...prev]);

    // Fetch messages on initial load
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Send a GET request to fetch the messages
                const res = await axios.get("http://localhost:5001/api/wall");

                // Update the states
                setMessages(res.data);
                setIsRateLimited(false);
            }
            catch (error) {
                // If rate limit is exceeded
                if (error?.response?.status === 429)
                    setIsRateLimited(true);

                // For any other error
                else
                    toast.error("Failed to load messages");
            }
            finally {
                // Once loading is complete
                setLoading(false);
            }
        };

        fetchMessages();
        connectSocket(socketRef);

        return () => disconnectSocket(socketRef);
    }, []);

    return (
        <div data-theme="dim" className="min-h-screen bg-base-100">
            <Header isFormDisplayed={isFormDisplayed} toggleAddBox={toggleAddBox} />

            {isRateLimited && <RateLimitedUI />}

            {!isRateLimited && (
                <div className="max-w-5xl mx-auto p-4">
                    {loading && (
                        <div className="h-[80vh] bg-base-200 rounded-xl flex items-center justify-center">
                        <LoaderIcon className="animate-spin size-10" />
                        </div>
                    )}

                    {!loading && messages.length === 0 && (
                        <NoMessagesAvailable isFormDisplayed={isFormDisplayed} addMessage={addMessage}/>
                    )}

                    {!loading && messages.length > 0 && !isRateLimited && (
                        <MessageWall messages={messages} isFormDisplayed={isFormDisplayed} addMessage={addMessage}/>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
