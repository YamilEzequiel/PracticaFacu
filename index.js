const express = require('express');
const routes = require('./src/routes/indexRoute');

const app = express();

app.use('',routes());

app.use( express.json() );
app.use( express.urlencoded({extends:true}))


app.listen(3000, () => {
    console.log('APP CORRIENTO EN EL PUERTO 3000 ⭐⭐⭐⭐⭐')
})