const Employee = require('../models/Employee')
const { ErrorBadRequest, ErrorNotFound } = require('../middleware/errorResponses')

const scopeSearch = (req) => {
  let condition = []
  if (req.query.employeeId) condition.push({ employeeId: { $regex: req.query.employeeId } })
  if (req.query.firstName) condition.push({ firstName: { $regex: req.query.firstName } })
  if (req.query.lastName) condition.push({ lastName: { $regex: req.query.lastName } })
  if (req.query.position) condition.push({ position: { $regex: req.query.position } })
  if (req.query.salary) condition.push({ salary: { $regex: req.query.salary } })
  if (req.query.department) condition.push({ department: { $regex: req.query.department } })
  const query = condition.length > 0 ? { $or: condition } : {}
  const sort = { createdAt: -1 }

  if (req.query.orderByField && req.query.orderBy)
    sort[req.query.orderByField] = req.query.orderBy.toLowerCase() == 'desc' ? -1 : 1

  return { query: query, sort: sort }
}

module.exports.find = (req) => {
  const limit = req.query.size || 0
  const offset = limit * ((req.query.page || 1) - 1)
  const _q = scopeSearch(req)

  return new Promise(async (resolve, reject) => {
    try {
      Promise.all([Employee.find(_q.query).sort(_q.sort).limit(limit).skip(offset), Employee.countDocuments(_q.query)])
        .then(result => {
          const rows = result[0]
          const count = result[1]

          resolve({
            total: count,
            lastPage: (limit > 0) ? Math.ceil(count / limit) : 1,
            currPage: req.query.page || 1,
            rows: rows,
          })
        })
        .catch((error) => {
          reject(error)
        })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports.findById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = await Employee.findById(id)
      if (!obj) reject(ErrorNotFound('id: not found'))
      resolve(obj.toJSON())
    } catch (error) {
      reject(ErrorNotFound('id: not found'))
    }
  })
}

module.exports.insert = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = new Employee(data)
      const inserted = await obj.save()
      resolve(inserted)
    } catch (error) {
      reject(ErrorBadRequest(error.message))
    }
  })
}

module.exports.update = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = await Employee.findById(id)
      if (!obj) reject(ErrorNotFound('id: not found'))
      await Employee.updateOne({ _id: id }, data)
      resolve(Object.assign(obj, data))
    } catch (error) {
      reject(error)
    }
  })
}

module.exports.delete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = await Employee.findById(id)
      if (!obj) reject(ErrorNotFound('id: not found'))
      await Employee.deleteOne({ _id: id })
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}