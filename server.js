const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://praktikumTWL:Nebak123@cluster0.e59a1vq.mongodb.net/?retryWrites=true&w=majority";
const port = 3001;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const guruController = require('./controller/gurucontroller');
const isAuthenticated = require('./middleware/authmiddleware');
const userController = require('./controller/usercontroller');

app.use(express.json())
app.use(cors())
app.use(cookieParser())



const connect = async () => {
    try {
        mongoose.connect(uri);
        console.log('Connected to mongoDB!')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected!')
});

app.post('/guru', isAuthenticated,guruController.createGuru);
app.get('/guru', isAuthenticated, guruController.getAllGurus);
app.get('/guru/:id', guruController.getGuruById);
app.put('/guru/:id', guruController.updateGuru);
app.delete('/guru/:id',isAuthenticated, guruController.deleteGuru);
app.post('/register', userController.registerUser);
app.post('/login', userController.login);




app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
});