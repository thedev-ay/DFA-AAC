import "dotenv/config.js";
import { findAvailableTimeslots } from "./src/checker.js";
import dayjs from "./src/lib/day.js";

const POLL_INTERVAL_MINUTES = Number(process.env.POLL_INTERVAL_MINUTES) || 1;
const POLL_INTERVAL_MS = dayjs.duration({ minutes: POLL_INTERVAL_MINUTES }).asMilliseconds();
const SITE_ID = Number(process.env.DFA_BRANCH_ID);

const poll = () => {
    findAvailableTimeslots(SITE_ID);

    setInterval(() => {
        findAvailableTimeslots(SITE_ID)
    }, POLL_INTERVAL_MS);
};

poll();