import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../mailAdapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '88289fd2959a7f',
    pass: '90691358670029',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Renato Santos <404renato@gmail.com>',
      subject,
      html: body,
    })
  }
}
