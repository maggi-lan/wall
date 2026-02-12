import MessageForm from "./MessageForm";

function NoMessagesAvailable({ isFormDisplayed, addMessage }) {
    return (
        <div
            className="h-[80vh] bg-base-200 rounded-xl flex flex-col"
            role="status"
            aria-live="polite"
        >
            {isFormDisplayed && (
                <div className="m-4">
                    <MessageForm addMessage={addMessage} />
                </div>
            )}

            <div className="flex flex-1 flex-col items-center justify-center text-center gap-3">
                <h1 className="text-2xl font-semibold tracking-wide">
                    No messages available
                </h1>
                <p className="text-sm text-base-content/70 max-w-md">
                    No messages here yet. Be the first to post one.
                </p>
            </div>
        </div>
    );
}

export default NoMessagesAvailable;
