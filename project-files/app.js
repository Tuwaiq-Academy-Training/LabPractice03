const router = require("./Routes");
const app = require("express")();
app.use(express.json());

const users= require('./model/user');
const comments= require('./model/comments');
const cours= require('./model/course');

const routes= require('./Routes/index');
app.use('/',router);

const mongoose = require("mongoose").connect('http://localhost:27017/quizlet');


app.listen(3000, () => console.log('Quizlet is started on port 3000'));
