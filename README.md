# Centivo assignment : Node.js + MongoDB Users API

A Express API that fetches a user by ID from a MongoDB users collection only if the user's age if greater than 21.  
It returns 404 when user is not found, and also handles invalid ObjectId by with 400 error.

**Approach:**  
I separated the app into modules (`db.js`, `app.js`, `index.js`) for clarity. The DB connection is established once and can be reused. Routes validate ObjectId before querying, and the Mongo query checks `age > 21`.

## Setup
Use your Mongo URI in .env

```bash
git clone https://github.com/udaysonyus/centivo.git
cd centivo
# open .env and Use your Mongo URI (The app throws error if you do not use a valid URI)
npm install
npm start
