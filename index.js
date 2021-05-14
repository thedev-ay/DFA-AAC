import "dotenv/config.js";
import { findAvailableTimeslots } from "./src/checker.js";
import dayjs from "./src/lib/day.js";

const POLL_INTERVAL_MINUTES = Number(process.env.POLL_INTERVAL_MINUTES) || 1;
const POLL_INTERVAL_MS = dayjs.duration({ minutes: POLL_INTERVAL_MINUTES }).asMilliseconds();
const SITE_ID = Number(process.env.DFA_BRANCH_ID);

const currentDate = dayjs().format("YYYY-MM-DD");
const dateAfterOneYear = dayjs().add(12, "month").format("YYYY-MM-DD");

const poll = () => {
    console.log(`Polling from ${currentDate} to ${dateAfterOneYear}`);

    findAvailableTimeslots(SITE_ID, currentDate, dateAfterOneYear);

    setInterval(() => {
        findAvailableTimeslots(SITE_ID, currentDate, dateAfterOneYear);
    }, POLL_INTERVAL_MS);
};

poll();