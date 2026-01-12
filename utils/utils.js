const bcrypt = require('bcrypt');

exports.hashPassword = async function(password) {
  try {
    const saltRounds = 10; // Recommended value
    const hash = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, hash);
    return {"hashedPassword":hashedPassword, "hash":hash};
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
}