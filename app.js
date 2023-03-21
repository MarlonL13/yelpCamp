const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const   Campground = require('./models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("Error, MONGO CONNECTION!!!!")
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/makecampground', async (req,res)=>{
    const camp = new Campground({title: 'My backyard', description: 'cheap camp'})
    await camp.save()
    res.send(camp)
})

app.listen(3000, ()=>{
    console.log('Serving port 3000')
})