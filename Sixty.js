const mongoose = require("mongoose");

const SixtySchema = new mongoose.Schema({
    pname: String,
    phname: String,
    email: { type: String, unique: true },
    date: String,
}, {
    collection: "SixtyTest",
});

mongoose.model("SixtyTest", SixtySchema);