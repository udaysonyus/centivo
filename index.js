require("dotenv").config();
const { connectToDb } = require("./db");
const { buildApp } = require("./app");

(async () => {
  try {
    const port = parseInt(process.env.PORT || "3000", 10);
    const { db } = await connectToDb();
    const app = buildApp(db);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
