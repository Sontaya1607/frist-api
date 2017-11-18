const request = require('supertest')
const app = require('../server')

describe('GET /students', () => {
    it('should return list of student', (done) => {
        request(app).get('/students')
            .expect(200)
            .then((res) => {
                let students = res.body
                expect(students instanceof Array).toBeTruthy()

                let student = students[0]
                expect(student.id).toBeTruthy()
                expect(student.name).toBeTruthy()
                expect(student.faculty).toBeTruthy()
                done()
            })
    })
})

describe('POST /students', () => {
    it('should Create student', (done) => {
        request(app).post('/students')
            .send({ name: 'Adison', email: 'adisom@gmail.com', faculty: 'Math' })
            .expect(201)
            .then((res) => {
                let student = res.body
                expect(student).toBeTruthy()
                expect(student.id).toBeTruthy()
                expect(student.name).toEqual('Adison')
                done()
            })
    })
})