const PasswordResetToken = require('../models/passwordResetToken');
const { sendError } = require('../utils/helper');
const isValidObjectId = require('../utils/helper')


exports.isValidPasswordResetToken = async (req, res, next) => {
    const {token, userId} = req.body;
    if(!token.trim() || !isValidObjectId(userId)) return sendError(res,'Invalid request'); 

    const resetToken =  await PasswordResetToken.findOne({owner: userId}) 
    if(!resetToken) return sendError(res,'Unauthorzed access, invalid request! ');


    const matched = await resetToken.compareToken(token);
    if(!matched) return sendError(res,'Unauthorzed access, invalid request! ');

    req.resetToken = resetToken
    next()

}