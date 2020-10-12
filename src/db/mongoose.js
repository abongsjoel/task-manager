const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    //useUnifiedTopology: true
    // useFindAndModify: false
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot include the word "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        }
    }
})

// const me = new User({
//     name: '            Peter                     ',
//     email: 'mike@GMAIL.COM     ',
//     password: 'my pASSword    '
//  })
 
//  me.save().then(() => {
//      console.log(me)
//  }).catch((error) => {
//      console.log('Error!', error)
//  })






const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Complete React course        ',
    
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})
