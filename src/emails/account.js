const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abongsjoel@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abongsjoel@gmail.com',
        subject: 'We are sorry to see you leave',
        text: `Goodbye ${name}. Is there something we have done to make you stay?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
