const Service = require('../services/employee.service')

module.exports.onGetAll = async (req, res) => {
  try {
    let result = await Service.find(req)
    res.success(result)
  } catch (error) {
    res.error(error)
  }
}

module.exports.onGetById = async (req, res) => {
  try {
    let result = await Service.findById(req.params.id)
    res.success(result)
  } catch (error) {
    res.error(error)
  }
}

module.exports.onInsert = async (req, res) => {
  try {
    let result = await Service.insert(req.body)
    res.success(result, 201)
  } catch (error) {
    res.error(error)
  }
}

module.exports.onUpdate = async (req, res) => {
  try {
    const result = await Service.update(req.params.id, req.body)
    res.success(result)
  } catch (error) {
    res.error(error)
  }
}

module.exports.onDelete = async (req, res) => {
  try {
    await Service.delete(req.params.id)
    res.success('success', 204)
  } catch (error) {
    res.error(error)
  }
}