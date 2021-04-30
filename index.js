import "dotenv/config.js";
import { findAvailableTimeslots } from "./src/timeslot_checker.js";
import dayjs from "./src/util/day.js";

const POLL_INTERVAL = dayjs.duration({ minutes: 2 }).asMilliseconds();
const SITE_ID = Number(process.env.DFA_BRANCH_ID);

const poll = () => {
    findAvailableTimeslots(SITE_ID);

    setInterval(() => {
        findAvailableTimeslots(SITE_ID)
    }, POLL_INTERVAL);
};

poll();