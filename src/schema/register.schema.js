import joi from "joi"


const schemaRegister = joi.object({
    name : joi.string().required(),
    email: joi.string().email().required(),
    phone:joi.number().required(),
    cpf: joi.string().required(),
    password: joi.string().required(),
})

export default schemaRegister