import axios from "axios";
import https from "https";

const DFA_APPOINTMENT_DATES_URI = `${process.env.DFA_APPOINTMENT_URI}/timeslot/available`;
const DFA_APPOINTMENT_TIMESLOT_URI = `${process.env.DFA_APPOINTMENT_URI}/timeslot`;

const getDates = (data) => axios({
    url: DFA_APPOINTMENT_DATES_URI,
    method: "POST",
    data,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

const getTimeslots = (data) => axios({
    url: DFA_APPOINTMENT_TIMESLOT_URI,
    method: "POST",
    data,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
}).then((response) => ({
    data: response.data,
    date: data.preferredDate,
}));

export {
    getDates,
    getTimeslots,
};
