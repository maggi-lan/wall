import { formatTime } from "../lib/utils";

function MessageBlock({ message }) {
    return (
        <div
            className="
                grid
                gap-2
                items-start
                pb-1

                sm:grid-cols-[minmax(0,1fr)_auto]
                grid-cols-1
            "
        >
            <div
                className="
                    w-fit
                    max-w-[80%]
                    bg-secondary
                    text-secondary-content
                    rounded-2xl
                    px-4
                    py-2
                    shadow
                    break-words
                    whitespace-pre-wrap
                "
            >
                {message.content}
            </div>

            <div
                className="
                    text-xs
                    opacity-60
                    whitespace-nowrap

                    sm:pt-2
                    sm:text-right
                "
            >
                {formatTime(message.createdAt)}
            </div>
        </div>
    );
}

export default MessageBlock;
