//logic for /register
const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async (req,res) => {
    try {
        const { username, email, password} = req.body;

        const existingUser = await User.findOne({ email}); //check if user exists
        if(existingUser) return res.status(400).json({ message: "User already exists"});

        //hash password
        const hashedPassword = await bcrypt.hash(password,10);

        //create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
         
        await newUser.save(); //this saves it to the db 
        res.status(201).json({message: "User registered successfully" });
    }catch (err){
            console.error(err);
            res.status(500).json({ message: "Server error" });
        }
    
    };

module.exports = {register};
