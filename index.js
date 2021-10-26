const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('wow.. im exited to learn node and express with nodemon. autometic restart')
});

const users = [
    { id: 0, name: "shabana", email: "shabana@gmail.com" },
    { id: 1, name: "shabnoor", email: "shabnoor@gmail.com" },
    { id: 2, name: "srabonti", email: "srabonti@gmail.com" },
    { id: 3, name: "suchorita", email: "suchorita@gmail.com" },
    { id: 4, name: "soniya", email: "soniya@gmail.com" },
    { id: 5, name: "susmita", email: "susmita@gmail.com" },
    { id: 6, name: "shakila", email: "shakila@gmail.com" },
    { id: 7, name: "bobita", email: "bobita@gmail.com" },
    { id: 8, name: "mahiya", email: "mahiya@gmail.com" },
    { id: 9, name: "Purnima", email: "Purnima@gmail.com" },
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.send('inside post')
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'orange', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammy Yammy tok marka fazli')
});

app.listen(port, () => {
    console.log('lestening to port', port);
});
