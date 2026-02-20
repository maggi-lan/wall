
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();  // load environment variables

const redis = Redis.fromEnv();

// Per-user limit (100 requests/minute)
const userRateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(100, "60 s"),
});

// Global limit (600 requests/minute)
const globalRateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(600, "60 s"),
});

export { userRateLimit, globalRateLimit };
