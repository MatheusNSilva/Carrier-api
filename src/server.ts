import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json( { message: 'Hello World '});
})

app.get("/home", (request, response) => {
    return response.json( { message: 'agora vai '});
})

app.listen(80);