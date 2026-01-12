
const jwt = require("jsonwebtoken");
const usersSchema = require("../models/users.model");
const { hashPassword } = require("../utils/utils");
const nodemailer = require('nodemailer');

module.exports = {
  
    decodeToken(token, secret) {
    return jwt.verify(token, secret);
  },

  
  async registerUser(data, ip, creatorId) {
    const newUser = new usersSchema(data);
    newUser.ipAddress = ip;
    newUser.createdBy = creatorId || null;

    const hashedPassword = await hashPassword(data.password);
    newUser.hash = hashedPassword.hash;
    newUser.password = hashedPassword.hashedPassword;

    const user = await newUser.save();
    user.hash = undefined;
    return user;
  },

  
  async login({ email, password }, secret, expiry) {
    const user = await usersSchema.findOne({ email});

    if (!user || !user.comparePassword(password)) {
      return null;
    }

    const token = jwt.sign(
      { email: user.email, fullName: user.fullName, _id: user._id },
      secret,
      { expiresIn: expiry }
    );

    return {token: token, userdetails: user};
  },

  async changePassword(userId, oldPass, newPass) {
    const user = await usersSchema.findOne({ _id: userId });
    if (!user || !user.comparePassword(oldPass)) return null;

    const hashed = await hashPassword(newPass);
    await usersSchema.updateOne({ _id: userId }, { passwordHash: hashed });
    return true;
  },

  async forgotPasswordRequest(resetPasswordUrl, userEmail){
      
      try {
        const user = await usersSchema.findOne({ email: userEmail });
        if (!user) return null;

        const secret = process.env.JWT_SECRET_ACCESS_TOKEN;
        const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });

        const resetURL = `${resetPasswordUrl}?token=${token}`;
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.APP_PASSWORD,
           }
        });

        const mailOptions = {
          to: userEmail,
          from: process.env.EMAIL,
          subject: 'Reset Password for InfoAIOS',
          text: `Hi ${user.username},\n
           You have requested the reset of the password for your account.\n\n
          Please click on the following link, or paste this into your browser to complete the process: \n
          ${resetURL}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };
        
        await transporter.sendMail(mailOptions);
        return true;
      } catch (error) {
        return error;
      }
  },

  async forgotPasswordReset(token, new_password){
    try{
      const decodedDetails = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN);
      const user = await usersSchema.findById(decodedDetails.id);

      if(!user) return null;

      user.passwordHash = await hashPassword(new_password);

      await user.save();

      return true;

    }catch(error){
      return error;
    }
  }
};