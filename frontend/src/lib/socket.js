
import { io } from "socket.io-client";

// Backend URL
const URL = "http://localhost:5001";

// Sets up a socket connection
export function connectSocket(socketRef) {
    if (socketRef.current)
        return;

    socketRef.current = io(URL, { autoconnect: false });
    socketRef.current.connect();
};

// Disconnects the socket
export function disconnectSocket(socketRef) {
    if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
    }
};
