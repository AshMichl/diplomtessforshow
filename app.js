const express = require("express")
const config = require("config")
const path = require('path')
const mongoose = require("mongoose")
const { async } = require("rxjs")

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))





app.use(express.json({ extended: true }))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))




if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

// для не работаюбщего монго дб
async function start() {
    try{
//        await mongoose.connect(config.get("mongoUri"), {
  //          useNewUrlParser: true,
    //        useUnifiedTopology: true,
      //      useCreateIndex: true
        //})
        app.listen(PORT, () => console.log('Сервер старт на порте ${PORT}'))
    }catch (e){
        console.log('Server error ', e.message)
        process.exit(1)

    }

}

start()




