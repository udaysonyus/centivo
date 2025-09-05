require("dotenv").config();
const {connectToDb} = require("./db");
const {buildApp} = require("./app");

(async () => {
  const uri = process.env.MONGODB_URI;
  const port = parseInt(process.env.PORT || "3000", 10);

  try {
    const {db} = await connectToDb(uri);
    const app = buildApp(db);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Server failed to start", err);
    process.exit(1);
  }
})();