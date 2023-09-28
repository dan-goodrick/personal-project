import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import get from './getController.js'
import del from './deleteController.js'
import add from './postController.js'
import put from './putController.js'
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


app.put('/api/person/:id', put.person)
app.put('/api/candidate/:id', put.candidate)
app.put('/api/phase/:id', put.phase)
app.put('/api/member/:id', put.member)

app.post('/api/image/', add.image)
app.post('/api/person/', add.person)
app.post('/api/projectImages', add.projectImages)
app.post('/api/candidate/', add.candidate)
app.post('/api/member/', add.member)

app.delete('/api/candidate/:id', del.candidate)
app.delete('/api/person/:id', del.person)
app.delete('/api/member/:id', del.member)

app.get('/api/person/:id', get.person)
app.get('/api/projectImages', get.carousel)
app.get('/api/candidate/:id', get.candidate)
app.get('/api/candidates/',  get.candidates) 
app.get('/api/members/',  get.members) 
app.get('/api/phase/:id', get.byPhase)
app.get('/api/member/:id', get.member)

//authentication routes
app.delete('/api/logout', auth.logout)
app.post('/api/register', auth.register)
app.post('/api/login', auth.login)
app.get('/api/user', auth.checkUser)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
