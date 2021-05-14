import dayjs from "./lib/day.js";
import { getDates, getTimeslots } from "./api/dfa.js";
import { scrapeTimeslots } from "./util/scraper.js";
import { mailAvailableTimeslots } from "./util/mailer.js";

const findAvailableTimeslots = async (siteId, fromDate, toDate) => {
    console.log("Current Time: ", dayjs().format("L LTS"));

    const rawDates = await getDates({
        fromDate,
        toDate,
        siteId,
        requestedSlots: 1,
    });

    const availableDates = filterDates(rawDates.data);

    if (availableDates.length) {
        const promisedRequests = availableDates.map((date) => getTimeslots({
            preferredDate: dayjs(date.AppointmentDate).format("YYYY-MM-DD"),
            siteId,
            requiredSlots: 1,
        }));

        const resolvedPromise = await Promise.all(promisedRequests);

        const availableTimeslots = resolvedPromise.map((response) => ({
            date: response.date,
            timeslots: scrapeTimeslots(response.data), // scrape
        }));
        console.log(availableTimeslots);

        mailAvailableTimeslots(availableTimeslots);
    }
};

const filterDates = (schedules) => {
    const allAvailable = schedules
        .filter((schedule) => schedule.IsAvailable);

    console.log("Total Available Dates: ", `${allAvailable.length} out of ${schedules.length}`);

    return allAvailable;
};

export {
    findAvailableTimeslots,
};
