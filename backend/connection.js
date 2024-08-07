// dbConnection.js
const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(" urlll", {
           
        });
        console.log("Veritabanına başarıyla bağlanıldı.");
    } catch (error) {
        console.error("Veritabanına bağlanılamadı:", error);
    }
};

module.exports = connectToDatabase;
