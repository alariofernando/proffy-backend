import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {"name":"Eu", "gender":"M"},
        {"name":"Voce","gender":"F"},
        {"name":"Zoboomafoo","gender":"F"}
    ]
    return response.json(users)
});

app.post('/users', (request, response) => {
    const users = [
        {"name":"Eu", "gender":"M"},
        {"name":"Voce","gender":"F"},
        {"name":"Zoboomafoo","gender":"F"}
    ]
    return response.json(users)
});

// localhost:3333
app.listen(3333);