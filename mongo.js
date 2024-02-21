const express = require('express');
const mongoose = require('mongoose');
const Sequelize = require('sequelize')
const app = express();

app.use(express.json());
//const dbUrl = 'postgres://webadmin:TVAbdv34123@node57007-tanakorntawee-noderest.proen.app.ruk-com.cloud/Books'


// const sequelize = new Sequelize(dbUrl)
// //{
// //     host: 'localhost',
// //     dialect: 'sqlite',
// //     storage: './Database/SQBooks.sqlite'
// // });
mongoose.connect(
    "mongodb:admin:HSMabo07193@node57006-tanakorntawee-noderest.proen.app.ruk-com.cloud:11844",
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
    }
);

//definde the Book model
const Book = mongoose.model("Book", {
    id: {
        type: Number,
        unique: true,
        require: true 
    },
    title: String,
    author: String,
});


app.use(bodyParse.json());

//create
app.post("/books", async (req ,res) =>{
    try{
        //get the last book record to determind the next ID
        const lastBook = await Book.findOne().sort({id: -1 });
        const nextId = lastBook ? lastBook.id + 1 :1 ;

        //create a new book with the next ID
        const book = new Book({
            id: nextId,
            ...req.body,
        });

        await book.save();
        res.send(book);

    }catch(err){
        res.status(500).send(error);
    }
});

//read all 
app.get("/books",async (req,res) => {
    try{
        const books = await Book.find();
        res.send(books);
    }catch (error){
        res.status(500).send(error);
    }
});

//Read One 
app.get("/books/:id", async (req ,res) => {
    try {
        const book = await Book.findOne({id:req.params.id});
        res.send(book);
    }catch (error) {
        res.status(500).send(error);
    }
});

//Updat 
app.put("/books/:id", async (req ,res) => {
    try{
        const book = await Book.findOneAndUpdate({id:req.params.id}, req.body, {
            new: true,
        });
    }catch (error) {
        res.status(500).send(error);
    }
});

//Delete
app.delete("/books/:id", async (req , res) => {
    try {
        const book = await Book.findOneAndDelete({id:req.params.id});
        res.send(book);
    }catch (error){
        res.status(500).send(error)
    }
});


//Start the server
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});