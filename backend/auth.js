const router = require("express").Router();
const User = require("./usermodel");
const bcrypt = require("bcryptjs");

router.post("/kayit", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashpassword });
        
        await user.save().then(() => {
            return res.status(200).json({ user: user });
        });
    } catch (error) {
        return res.status(400).json({ message: "kullanıcı kayıtlı zaten" });
    }
});

router.post("/giris", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "önce kayıt oluşturun" });
        }

        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: " şifreniz yanlış" });
        }

        const { password, ...others } = user._doc;
        return res.status(200).json({ others });
    } catch (error) {
        return res.status(400).json({ message: "kullanıcı kayıtlı zaten" });
    }
});

module.exports = router;
