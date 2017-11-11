const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let students = [
    { id: 1, name: 'Sontaya Rungsaard', u: 'BUU', year: 2014, email: 'sontaya@gmail.com' },
    { id: 2, name: 'Justin Bieber', u: 'NY', year: 2000, email: 'justin@gmail.com' }
]

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }

    let l = req.query.lang

    if (!l) {
        res.json({
            message: 'Hello'
        })
    } else {
        res.json({
            message: lang[l]
        })
    }

    res.json({ message: 'Hello' })
})

app.post('/students', (req, res) => {
    let s = req.body
    students.push(s)
    res.json(s)
})

app.get('/students', (req, res) => {
    let i = req.query.id
    if (!students[i-1]) {
       res.json(students) 
    } else {
    res.json(students[i-1])
    }
})

app.get('/students/:id', (req, res) => {
    res.json(students[req.params.id - 1])
})
module.exports = app