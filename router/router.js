const router = require("express").Router()
const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient()

router.get("/",(req,res)=>{
    res.send("khgfdsdfgh")
})

router.get("/create",async (req,res)=>{
    const {name,email,password} = req.body
    let data1 = await prisma.users.findUnique({
        where:{email}
    })
    if(data1 == null){
        let data = await prisma.users.create({
            data:{name,email,password}
        })
        return res.send(data)
    }
    res.send("already exist")
})


router.get("/read",async(req,res)=>{
    const {email} = req.body
    try {
        const data = await prisma.users.findMany({
            where:{
                email,password
            }
        })
        console.log(data);
        res.send(data)
    } catch (error) {
        res.send("not find")
    }
})

router.get("/readall",async(req,res)=>{
    const data = await prisma.users.findMany()
    res.send(data)
})

router.get("/update",async(req,res)=>{
    const {email1,name,email,password} = req.body
    let data = await prisma.users.update({
        where:{email:email1},
        data:{name,email,password}
    })
    res.send(data)
})

router.get("/delete",async(req,res)=>{
    const {email} = req.body
    let data = await prisma.users.delete({
        where:{email}
    })
    res.send("datated")
})

module.exports = router;



// steps using this project
// s1 == npm init
// s2 == npm init prisma
// s3 === npm i prisma @prisma/client
// s4 == table creat in schema.prisma
// s5 == DATABASE_URL="mysql://root:Praveen@123@localhost:3306/prisma-secand?schema=public" set in evn file 
// s6 == npx prisma migrate dev --name pehla_migration

// 
// 