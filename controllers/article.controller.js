import Article from '../models/article.model.js'
import articleValidation from '../validation/article.validation.js'

const create = async (req, res) => {
    try {
        const { title, content } = req.body

        const { error } = articleValidation(req.body).articleLawCreate
        
        if ( error ) {
            return res.status(401).json(error.details[0].message)
        }

        const article = new Article({
            title,
            content,
            author : req.user.id
        })

        const newArticle = await article.save()

        return res.status(201).json({ msg : "Article créé", newArticle })
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

export { create }