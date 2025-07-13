import sendEmail from "./mailSender.js";
import moment from "moment";

// Give the mail addresses as strings seperated by commas
let emailList = "usalone370122@kkwagh.edu.in";
// Task 01

try {
  await sendEmail({
    recipients: emailList,
    scheduledDate: "2025-07-04T19:55:00+05:30",
    sender: "Administrator",
    subject: "Sending emails using nodemailer...",
    content: "This is a test",
  });
} catch (err) {
  console.log(err);
}
