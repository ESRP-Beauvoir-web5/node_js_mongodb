import joi from 'joi'

function userValidation(body) {
    const userLawRegister = joi.object({
        name : joi.string().min(5).max(20).trim().required(),
        firstName : joi.string().min(5).max(20).trim().required(),
        email : joi.string().email().trim().required(),
        // Regex : Minimum 8 caractères, une majuscule, une minuscule,, un chiffre et un caractère spécial
        password : joi.string().required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
        role : joi.string()
    })

    const userLawLogin = joi.object({
        email : joi.string().email().trim().required(),
        password : joi.string().required()
    })

    return {
        userLawRegister : userLawRegister.validate(body),
        userLawLogin : userLawLogin.validate(body)
    }
}

export default userValidation