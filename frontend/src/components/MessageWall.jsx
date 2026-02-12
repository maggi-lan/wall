import MessageBubble from "./MessageBubble.jsx";
import MessageForm from "./MessageForm.jsx";

function MessageWall({ messages, isFormDisplayed, addMessage }) {
    return (
        <div className="h-[80vh] bg-base-200 rounded-xl p-4 overflow-y-auto flex flex-col gap-3">
            {isFormDisplayed && <MessageForm addMessage={addMessage} />}

            {messages.map((message) => (
                <MessageBubble key={message._id} message={message} />
            ))}
        </div>
    );
}

export default MessageWall;
