const {express} = require('express')
const app = express();
const cors = require('cors')

//inyeccion dependencias

server.use(cors());
server.use(server.json());

//configuracion de puertos

app.set('port',3000);

//rutas /hola linse

app.get('/',(req,resp)=>{
    resp.send("")
})

module.exports = server;