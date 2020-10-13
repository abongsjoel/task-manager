const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')

// const myFunc = async () => {
//     const password = 'Red12344'
//     const hashedpassword = await bcrypt.hash(password, 32)

//     console.log(password)
//     console.log(hashedpassword)

//     const isMatch = await bcrypt.compare('red12344', hashedpassword)
//     console.log(isMatch)
// }

// myFunc()