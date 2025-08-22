// IMPORT
import express from 'express'
import db from './db/db.js'
import userRoute from './routes/user.route.js'
// IMPORT

// Express
const app = express()

// Gestion du json
app.use(express.json())

// Port d'écoute
const port = process.env.PORT || 3000

// Appel de la configuration de la BDD
db()
// Appel de l'API
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`)
})


// Urls principales
app.use('/users', userRoute)