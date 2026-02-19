
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();  // load environment variables

// Add a rate limiter to allow only 500 requests per minute
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(500, "60 s"),
});

export default rateLimit;
