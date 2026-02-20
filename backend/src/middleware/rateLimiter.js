
import { userRateLimit, globalRateLimit } from "../lib/upstash.js";

// Rate limiter middleware function
export default async function rateLimiter(req, res, next) {
    try {
        // Global rate limit
        const global = await globalRateLimit.limit("global");

        // Per user limit
        const user = await userRateLimit.limit(req.userId);

        // Return 429 error response if rate limit is exceeded
        if (!global.success || !user.success) {
            return res.status(429).json({
                message: "Too many requests",
            });
        }

        next();
    }

    catch (error) {
        console.log(`Rate limit error: ${error}`);
        next(error);
    }
}
