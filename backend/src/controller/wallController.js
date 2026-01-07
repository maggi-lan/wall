
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

// PUT: update an existing message
export function updateMessage(req, res) {
    res.status(200).json({
        message: "Message updated successfully"
    });
}

// DELETE: delete an existing message
export function deleteMessage(req, res) {
    res.status(200).json({
        message: "Message deleted successfully"
    });
}
