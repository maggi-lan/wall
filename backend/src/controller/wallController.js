
// GET: fetch all messages
export function getAllMessages(req, res) {
    res.status(200).json({
        message: "Messages fetched successfully"
    });
}

// POST: add a new message
export function createMessage(req, res) {
    res.status(201).json({
        message: "Message created successfully"
    });
}
