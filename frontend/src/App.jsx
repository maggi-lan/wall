import "./App.css";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { formatTime } from "./lib/utils.js";

function Message(props) {
    return (
        <div className="message">
            <span className="the-text">{props.message}</span>
            <span className="timestamp">{props.timestamp}</span>
        </div>
    );
}

function App() {
    const [items, setItems] = useState([
        { msg: "Hi this is bigfoot", timestamp: formatTime() },
    ]);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [adding, setAdding] = useState(false);

    const toggleAddBox = () => setAdding((val) => !val);

    function addNewMessage() {
        if (!msg.trim()) return;

        setItems((prevItems) => [
            ...prevItems,
            ...Array.from([{ msg: msg, timestamp: formatTime() }]),
        ]);
    }

    const fetchMoreData = () => {
        setLoading(true);
        // placeholder for a real fetch
        setLoading(false);
    };

    return (
        <div className="everything">
            <div className="header">
                <span>Welcome to the anonymous bulletin</span>
                <button onClick={toggleAddBox}>
                    {adding ? "Hide message box" : "Add new message"}
                </button>
            </div>

            <div className="scroll-container">
                {adding && (
                    <div className="input-box">
                        <input
                            type="text"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                        <button type="button" onClick={addNewMessage}>
                            Add message
                        </button>
                    </div>
                )}

                {loading && items.length === 0 ? (
                    <h4>Loading initial data...</h4>
                ) : (
                    <InfiniteScroll
                        dataLength={items.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<h4>You've reached the end</h4>}
                    >
                        {items.map((item, index) => (
                            <Message
                                key={index}
                                message={item.msg}
                                timestamp={item.timestamp}
                            />
                        ))}
                    </InfiniteScroll>
                )}
            </div>
        </div>
    );
}

export default App;
