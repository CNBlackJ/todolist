const joi = require('joi')
const validator = require('../middleware/validator')

joi.objectId = () => joi.string().hex().length(24)

module.exports = (router) => {

}
