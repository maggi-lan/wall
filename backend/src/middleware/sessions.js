
import { v4 as uuid } from "uuid";

export default function sessionId(req, res, next) {
    let sid = req.cookies?.sid;  // fetch session id

    // Create session id if it doesn't exist already
    if (!sid) {
        sid = uuid();

        res.cookie("sid", sid, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        });
    }

    req.userId = sid;  // add the session id to the request object

    next();
}
