function NoMessagesAvailable() {
    return (
        <div
            className="h-[80vh] bg-base-200 rounded-xl flex flex-col items-center justify-center text-center gap-3 px-6"
            role="status"
            aria-live="polite"
        >
            <h1 className="text-2xl font-semibold tracking-wide">
                No messages available
            </h1>
            <p className="text-sm text-base-content/70 max-w-md">
                No messages here yet. Be the first to post one.
            </p>
        </div>
    );
}

export default NoMessagesAvailable;
