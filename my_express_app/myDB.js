const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});


db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`, (err) => {
    if (err) {
        // La table existe déjà
    } else {
        // Table fraîchement créer, ajouter la data
        const insert = 'INSERT OR IGNORE INTO contacts (name, email) VALUES (?,?)';
        db.run(insert, ["contact1","contact1@example.com"]);
        db.run(insert, ["contact2","contact2@example.com"]);
    }
});
