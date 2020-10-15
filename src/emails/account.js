const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey) 

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abongsjoel@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail
}
