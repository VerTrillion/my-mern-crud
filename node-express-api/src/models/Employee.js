const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schema = new Schema({
    employeeId: {
        type: String,
        index: true,
        required: true,
        unique: true,
        uniqueCaseInsensitive: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
        enum: ['Staff', 'Manager', 'President']
    },
    salary: {
        type: Number,
        min: 1,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: ['Human Resource', 'Marketing', 'Finance', 'IT']
    }
}, { timestamps: true })

module.exports = mongoose.model('employees', schema)