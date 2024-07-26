import { database } from "./database.js";

export const getAllNotes = () => {
  return new Promise((resolve, reject) => {
    database.get(
      `SELECT * FROM notes;`,
      (err, row) => {
        if(err) reject(err)
        else resolve(row)
      }
    )
  })
}

export const createNote = (note) => {
  return new Promise((resolve, reject) => {

    if(!note || !note.name || !note.content) throw new Error('Invalid params')

    database.run(
      `INSERT INTO notes (name, content) VALUES (?, ?);`,
      [note.name, note.content],
      (err, row) => {
        if(err) reject(err)
        else resolve(row)
      }
    )
  })
}

export const updateNote = (note) => {
  return new Promise((resolve, reject) => {

    if(!note || !note.name || !note.content) throw new Error('Invalid params')

    database.run(
      `INSERT INTO notes (name, content) VALUES (?, ?);`,
      [note.name, note.content],
      (err, row) => {
        if(err) reject(err)
        else resolve(row)
      }
    )
  })
}