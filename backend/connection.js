// dbConnection.js
const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://hakansal:24321008350Hk@cluster0.bx7kshl.mongodb.net/", {
           
        });
        console.log("Veritabanına başarıyla bağlanıldı.");
    } catch (error) {
        console.error("Veritabanına bağlanılamadı:", error);
    }
};

module.exports = connectToDatabase;
