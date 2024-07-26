import express from "express";
import {createNote, getAllNotes} from "../services/notes.js";

const notesRouter = express.Router()

notesRouter.get('/', async (req, res, next) => {
   try {
    const notes = await getAllNotes()
    res.status(200).send({ notes })
     console.log('123')
  } catch (e) {
     res.status(500).send(e)
   }
})

notesRouter.post('/', async (req, res, next) => {
  if (!req.body.noteData) res.status(400).send('Bad Request')

  try {
    const createdNote = await createNote(req.body.noteData)
    res.status(200).send({ createdNote })
  } catch (e) {
    res.status(500).send(e)
  }
})

notesRouter.put('/:id', (req, res, next) => {

})

notesRouter.delete('/:id', (req, res, next) => {

})

export default notesRouter