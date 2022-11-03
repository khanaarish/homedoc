const mongoose = require("mongoose");

const SeventySchema = new mongoose.Schema({
    pname: String,
    phname: String,
    email: { type: String, unique: true },
    date: String,
}, {
    collection: "SeventyThreeTest",
});

mongoose.model("SeventyThreeTest", SeventySchema);