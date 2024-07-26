import express from 'express'
import notesRouter from "./routers/notes.js";
import cors from 'cors'
import { databaseSetup } from "./services/database.js";

const app = express()
const port = 3000

app.use(cors())
// databaseSetup()

/*const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
};*/

app.use('/notes', notesRouter)



app.listen(port, () => console.log(`http://localhost:${port}`))