import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import ctrl from './controller.js'
import auth from './authController.js'
const app = express();
const port = 8000;
const mSecPerDay = 1000 * 60 * 60 * 24
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: 'secret',
  cookie: {
      maxAge: mSecPerDay * 4 // days before expiration
  }
}))

// app.get('/api/candidates', loginRequired, ctrl.showAll)
// app.get(`/api/candidates/:id`, ctrl.getOne)
// app.get('/api/ratings', loginRequired, ctrl.ratings)
app.put('/api/person/:id', ctrl.putPerson)
app.put('/api/candidate/:id', ctrl.putCandidate)
app.put('/api/phase/:id', ctrl.putPhase)
app.post('/api/image/', ctrl.addImage)
app.post('/api/person/', ctrl.addPerson)
app.post('/api/candidate/', ctrl.addCandidate)
app.delete('/api/candidate/:id', ctrl.deleteCandidate)
app.delete('/api/person/:id', ctrl.deletePerson)
app.get('/api/person/:id', ctrl.getPerson)
app.get('/api/projectImages', ctrl.getProjectImages)
app.get('/api/candidate/:id', ctrl.getCandidate)
app.get('/api/candidate/:id', ctrl.getCandidate)
app.get('/api/candidates/',  ctrl.getAllCandidates) // ,
app.get('/api/phase/:id', ctrl.getByPhase)
app.get('/api/phase/:id', ctrl.getByPhase)

//authentication routes
app.delete('/api/logout', auth.logout)
app.post('/api/register', auth.register)
app.post('/api/login', auth.login)
app.get('/api/user', auth.checkUser)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
