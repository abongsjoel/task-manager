const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey) 

sgMail.send({
    to: 'abongsjoel@gmail.com',
    from: 'abongsjoel@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})