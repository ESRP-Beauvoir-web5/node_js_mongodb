import joi from 'joi'

function articleValidation(body) {
    const articleLawCreate = joi.object({
        title : joi.string().min(5).max(30).trim().required(),
        content : joi.string().min(10).max(1000).trim().required()
    })
    
    const articleLawUpdate = joi.object({
        title : joi.string().min(5).max(30).trim(),
        content : joi.string().min(10).max(1000).trim()
    })
    
    return {
        articleLawCreate : articleLawCreate.validate(body),
        articleLawUpdate : articleLawUpdate.validate(body)
    }
}

export default articleValidation