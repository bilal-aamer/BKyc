const UsersSchema = require("../models/Users");
const MessageSchema = require("../models/Messages");
const { errHandler } = require("../utils/errHandler");

const storeUser = async(req,res,next) => {

    try{

        const userData = await UsersSchema.findOne({ authId:req.body.user.sub }).exec();
        console.log("user :: ", req.body);
        console.log("userData :: ", userData);

        if(userData == null){
            const user = new UsersSchema({
                username: req.body.user.name,
                status:"noKYC",
                authId: req.body.user.sub,
            });

            await user.save();

            res.status(201).json(user);

            return ;
             
        }
        res.status(201).json(userData);

    }catch(err){
        errHandler(err,next);
    }
}

const getUser = async(req,res,next) => {

    try{

        const userData = await UsersSchema.findOne({ authId:"61d41be6cde5bf5cc4e7c44d" }).exec();

        res.status(200).json(userData);

    }catch(err){
        errHandler(err,next);
    }
}

const getMessage = async(req, res, next) => {
    try{
        console.log("reqBody here : ", req.body);
        const message = await MessageSchema.findOne({email: req.body.email }).exec();

        if(message == null) {
            const msg = new MessageSchema({
                email: req.body.email,
                message: req.body.message,
            })

            await msg.save();
            res.status(201).json(msg);
            return ;
        }

        res.status(201).json(meesage);

    }catch(err){
        errHandler(err, next)
    }
}



module.exports = { storeUser,getUser, getMessage };