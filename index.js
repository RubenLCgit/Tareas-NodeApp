import express from 'express'
import mongoose from 'mongoose'

const Tarea = mongoose.model('Tarea', new mongoose.Schema({
  nombre: String,
  completada: Boolean,
}))

const app = express()
app.use(express.json());

mongoose.connect('mongodb://<nombreUsuario>:<contraseñaUsuario>@localhost:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... tareas...')
  const tareas = await Tarea.find();
  return res.send(tareas)
})

app.post('/crear', async (req, res) => {
  const { nombre, completada } = req.body;
  console.log('creando...');
  await Tarea.create({ nombre, completada });
  return res.send('Tarea creada');
});

app.listen(3000, () => console.log('ejecutándose...'))
