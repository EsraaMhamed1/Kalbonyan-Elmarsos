const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abdelrahmanelhagrasy661@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome ${name} , Happy to see you`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abdelrahmanelhagrasy661@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. We hope to see you again`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
