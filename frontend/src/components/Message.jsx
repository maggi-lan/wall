import { formatTime } from "../lib/utils.js";


function Message(props) {
    return (
        <div className="message">
            <span className="the-text">{props.message}</span>
            <span className="timestamp">{formatTime(props.timestamp)}</span>
        </div>
    );
}

export default Message;
