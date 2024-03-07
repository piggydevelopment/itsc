import Email from '../components/layouts/email';
import nodemailer from 'nodemailer';

export async function sendMail(props) {

    const [emailContent, emailDestination, emailSubject] = props;
    
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

    const sender = await transporter.sendMail({
        from: '"Synz" <' + process.env.FROM_EMAIL + '>', // sender address
        to: emailDestination, // list of receivers
        subject: emailSubject, // Subject line
        text: emailContent, // plain text body
        html: <Email msg={emailContent} />, // html body
      });

    console.log("Message sent: %s", sender.messageId);
}