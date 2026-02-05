import { formatTime } from "../lib/utils";

function MessageBlock({ message }) {
    return (
        <div className="flex items-center justify-between">
            <div
                className="
                    max-w-[80%]
                    self-start
                    bg-secondary
                    text-secondary-content
                    rounded-2xl
                    px-4
                    py-2
                    shadow
                    break-words
                "
            >
                {message.content}
            </div>
            <div>
                {formatTime(message.createdAt)}
            </div>
        </div>
    );
}

export default MessageBlock;
