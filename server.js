const express=require('express');
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    console.log('server is running!');
});

app.post('/login',(req,res)=>{
    const {email, password} =req.body;
    if(!email || email.trim()===''){
        return res.status(400).json({error:"Email can not be empty"});
    };
    if(!password){
        return res.status(400).json({error:"Password cannot be empty"});
    };
    res.status(201).json({
        message:"User signed up successfully",
        user:{email}
    });
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});