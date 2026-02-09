import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function MessageForm() {
    const [content, setContent] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) {
            toast.error("Can't send an empty message");
            return;
        }

        try {
            setSubmitting(true);

            await axios.post("http://localhost:5001/api/wall", { content });

            setContent("");
        } catch (error) {
            if (error?.response?.status === 429)
                toast.error("Rate limited. Try again later.");
            else
                toast.error("Failed to post message");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                bg-neutral/95
                border
                border-base-300
                rounded-xl
                p-4
                mx-4
                mt-4
                flex
                gap-3
                items-end
            "
        >
            <textarea
                className="
                    textarea
                    textarea-bordered
                    w-full
                    resize-none
                "
                rows={3}
                placeholder="Write a message..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={submitting}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                    }
                }}
            />

            <button
                type="submit"
                className="btn btn-accent"
            >
                {submitting ? "Posting" : "Send"}
            </button>
        </form>
    );
}

export default MessageForm;
