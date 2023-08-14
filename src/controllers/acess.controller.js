//import { db } from "../database/database.js";
//import bcrypt from "bcrypt"
//import { v4 as uuid } from "uuid"

export  async function register (req, res){
   console.log(req.body)
    try{
        res.sendStatus(200)
       
    }catch(error){
        res.status(500).send(error.message)
    }
} 

export async function login (req, res){
 

    try{
    
        
        
       
    }catch(error){
        res.status(500).send(error.message)
    }
}