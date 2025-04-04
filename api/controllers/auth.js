import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // Check if user exists
    const q = "SELECT * FROM users WHERE username = ?"; // Fixed SELECT syntax

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User Already Exists");

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const insertQuery =
            "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.name,
        ];

        db.query(insertQuery, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        });
    });
};

export const login = (req, res) => {
    // Implement login functionality here
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q,[req.body.username], (err,data)=>{
    if (err) return res.status(500).json(err);
    if(data.length === 0 )return res.status(404).json("User not found")
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
    if(!checkPassword) return res.status(400).json("Wrong Password or Username!")
        const token = jwt.sign({id:data[0].id},"secretkey");
    const {password, ...others} = data[0]
    res.cookie("accessToken",token,{
        httpOnly:true,
    }).status(200).json(others);
    });

};

export const logout = (req, res) => {
    // Implement logout functionality here
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out.")
};
