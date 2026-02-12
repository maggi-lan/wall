import axios from "axios";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function MessageForm({ addMessage }) {
    const [content, setContent] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => inputRef.current?.focus(), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) {
            toast.error("Can't send an empty message");
            return;
        }

        try {
            setSubmitting(true);

            const res = await axios.post("http://localhost:5001/api/wall", { content });

            addMessage(res.data)
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
                px-4
                py-2
                flex
                items-center
                gap-3
                items-end
            "
        >
            <input
                className="
                    textarea
                    textarea-bordered
                    w-full
                    resize-none
                    text-secondary-content
                "
                ref={inputRef}
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
                className="btn btn-sm btn-circle"
                disabled={submitting || !content.trim()}
            >
                <Send size={25} />
            </button>
        </form>
    );
}

export default MessageForm;
