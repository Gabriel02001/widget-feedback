import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fdbaa7e8dfa02e",
      pass: "f7f50094dae773"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail ({subject, body}: SendMailData)  {
 //  const feedback = 
       transport.sendMail({
          from: 'Equipe Feedget <oi@feedget.com>',
          to: 'Diego Fernandes <diego.schell.f@gmail.com>',
          subject: subject,
          html: body
  
       })

    };
}