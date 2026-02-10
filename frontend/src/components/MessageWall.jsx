import MessageBlock from "./MessageBlock.jsx";

function MessageWall({ messages }) {
    return (
        <div className="h-[80vh] bg-base-200 rounded-xl p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message) => (
                <MessageBlock key={message._id} message={message} />
            ))}
        </div>
    );
}

export default MessageWall;
