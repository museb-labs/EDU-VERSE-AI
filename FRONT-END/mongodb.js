const mongoose = require("mongoose");

async function main() {

    try {

        await mongoose.connect(
            "mongodb://127.0.0.1:27017/eduverse"
        );

        console.log("MongoDB connected successfully!");

    } catch (error) {

        console.log(
            "MongoDB connection failed:",
            error.message
        );
    }
}

main();