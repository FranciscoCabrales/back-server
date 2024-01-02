const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());


// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

const USER_CREDENTIALS = {
 email: 'user@example.com',
 password: 'password123'
};

//rutas
app.post('/login', (req, res) => {
 const { email, password } = req.body;

 if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
    res.json({ result: 'success' });
 } else {
    // res.json({ result: 'err' });
    // console.log(res.json().result,"----------"); 
    res.status(401).json({ result: 'err', msg: 'Correo electrónico o contraseña incorrectos' });
    console.log(res.json().result,"----------"); 
 }
});

// app.get('/api/usuario', (req, res) =>{
//     res
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});