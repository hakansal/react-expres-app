const router=require("express").Router();
const Usermodel=require("./usermodel");
const List=require("./model");
//olusturma
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
//güncelleme
router.post("/guncelle/:id",async(req,res)=>{
  try {
    const{title,body,email}=req.body;
    const exuser=await Usermodel.findOne({email});
    if(exuser){
        const list =await List.findByIdAndUpdate(req.params.id,{title,body});
        list.save().then(()=>{res.status(500).json({message:"güncellendi"})});
    }
  } catch (error) {
   console.log(error);
  }
})
//silme
router.delete("/sil/:id", async (req, res) => {
  try {
    const { email } = req.body;  
    const _id = req.params.id;  

    const exuser = await Usermodel.findOneAndUpdate(
      { email },
      { $pull: { list: _id } },
      { new: true }  
    );

    if (exuser) {
     
      await List.findByIdAndDelete(_id);
      res.status(200).json({ message: "Silindi" });
    } else {
 
      res.status(404).json({ message: "Kullanıcı bulunamadı veya listeden silinemedi" });
    }
  } catch (error) {
    console.log(error);
    // Hata durumunda hata mesajı döndür
    res.status(500).json({ message: "Sunucu hatası" });
  }
});
router.get("/listele/:id",async(req,res)=>{
const list =await List.find({user:req.params.id});
res.status(200).json({list:list});
});

module.exports = router;