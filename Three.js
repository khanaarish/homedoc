const mongoose = require("mongoose");

const ThreeSchema = new mongoose.Schema({
    pname: String,
    phname: String,
    email: { type: String, unique: true },
    date: String,
}, {
    collection: "SixtyThreeTest",
});

mongoose.model("SixtyThreeTest", ThreeSchema);