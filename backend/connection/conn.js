const mongoose = require("mongoose");

 const DB=" mongodb+srv://new-user:patil@cluster0.hjbjm.mongodb.net/ProductCategory?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log("Connection Error", err);
});