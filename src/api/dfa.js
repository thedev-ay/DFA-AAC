import axios from "axios";

const DFA_APPOINTMENT_URI = process.env.DFA_APPOINTMENT_URI;

const getTimeslots = async (data) => {
    return await axios({
        url: DFA_APPOINTMENT_URI, 
        method: "POST",
        data
    });
}

export {
    getTimeslots
}