const express = require('express')
const app = express();

const port = 3000;

//motor de plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render('index', {titulo: 'mi titulo dinámico'})
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {titulo : 'estás en la página de servicios'})
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'titulo del sitio 404'
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})