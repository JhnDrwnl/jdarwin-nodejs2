const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/router');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", router);

app.listen(3001, () => {
    console.log('server running: http://localhost:3001');
});
