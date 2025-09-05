const express = require("express");
const { ObjectId } = require("mongodb");

function buildApp(db) {
  const app = express();

  app.get("/check", (_req, res) => res.json({ ok: true }));

  app.get("/users/:id", async (req, res, next) => {
    try {
      const { id } = req.params;

      // Implementation for Bonus: invalid ObjectId gives 400 error
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({
          error: "Invalid ID. Expected MongoDB ObjectId format"
        });
      }

      // Implementation for age > 21
      const user = await db.collection("users").findOne({
        _id: new ObjectId(id),
        age: { $gt: 21 }
      });

      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        age: user.age
      });
    } catch (err) {
      next(err);
    }
  });

  // Implementation for Bonus: error handling 
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  });

  return app;
}

module.exports = { buildApp };
