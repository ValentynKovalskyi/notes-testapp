import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose()
export const database = new sqlite.Database('notes.db')

export const databaseSetup = () => {
  database.serialize(() => {
    database.run(
      `CREATE TABLE notes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, content TEXT NOT NULL);`
    )
  })
}

