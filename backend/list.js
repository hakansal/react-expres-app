const router=require("express").Router();
const Usermodel=require("./usermodel");
const List=require("./model");

router.post("/olustur",async(req,res)=>{
   try {
     const{title,body,email}=req.body;
     const exuser=await Usermodel.findOne({email});
     if(exuser){
         const list=new List({title,body,user:exuser});
         await list.save().then(()=>res.status(200).json({message:"kaydedildi",list}));
         exuser.list.push(list);
         exuser.save();
     }
   } catch (error) {
    console.log(error);
   }
})
router.post("/guncelle/id",async(req,res)=>{
  try {
    const{title,body,email}=req.body;
    const exuser=await Usermodel.findOne({email});
    if(exuser){
        await List.findByIdAndUpdate(req.params.id,{title,body});
        List.save();
    }
  } catch (error) {
   console.log(error);
  }
})
module.exports = router;