import { mail } from "../lib/mail.js";

const subject = "Passport Appointment Available Timeslots";

const generateEmailBody = (data) => `
    <html>
        <body>
            <p>Hey! Here are the available schedules for passport appointment.</p>

            <p>Branch: DFA Cebu</p>

            <p>Schedule:</p>
            <ul>
                ${htmlListOfSchedules(data)}
            </ul>

            <p>Proceed to <a href="https://www.passport.gov.ph/appointment/individual/site">DFA website.</a></p>
        </body>
    </html>
    `;

const htmlListOfSchedules = (data) => {
    const reducer = (acc, value) => acc.concat(
        `<p>${value.date}</p>
    <ul>
        ${htmlListOfTimeslots(value)}
    </ul>`,
    );

    const schedules = data.reduce(reducer, "");

    return schedules;
};

const htmlListOfTimeslots = (data) => {
    const reducer = (acc, value) => acc.concat(
        `<li>${value}</li>`,
    );

    const timeslots = data.timeslots.reduce(reducer, "");

    return timeslots;
};

const mailAvailableTimeslots = (data) => {
    const body = generateEmailBody(data);
    mail(process.env.MAIL_RECIPIENTS, subject, body);
};

export { mailAvailableTimeslots };
