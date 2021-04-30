import { createTransport } from "nodemailer";

const sender = process.env.MAIL_USER;

const transporter = createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: sender,
        pass: process.env.MAIL_PASS,
    },
});

const mail = (recipients, subject, body) => {
    const mailOptions = {
        from: sender,
        to: recipients,
        subject,
        html: body,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};

export { mail };
