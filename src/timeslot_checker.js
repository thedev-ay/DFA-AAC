import { getTimeslots } from "./api/dfa.js";
import dayjs from "./util/day.js";

const getCurrentDate = dayjs().format("YYYY-MM-DD");
const getDateAfterOneYear = dayjs().add(12, "month").format("YYYY-MM-DD");

const findAvailableTimeslots = async (siteId) => {
    console.log("Current Time: ", dayjs().format("L LTS"));

    const data = { 
        fromDate: getCurrentDate, 
        toDate: getDateAfterOneYear, 
        siteId, 
        requestedSlots: 1
    };

    const response = await getTimeslots(data);

    const availableTimeslots = filterTimeslots(response.data);

    availableTimeslots.length && console.table(availableTimeslots);
}

const filterTimeslots = (schedules) => {
    const allAvailable = schedules
        .filter(schedule => schedule.IsAvailable)
        .map(schedule => ({
            DateAvailable: dayjs(schedule.AppointmentDate).format("LL")
        }));

    console.log("Total Available Timeslots: ", `${allAvailable.length} out of ${schedules.length}`);

    return allAvailable;
}

export {
    findAvailableTimeslots
}