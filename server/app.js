import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import ctrl from './controller.js'
const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'secret', saveUninitialized: true, resave: false }));
const loginRequired = (req, res, next) => {
  if (!req.session.userId) {
    res.status(401).render('/').json({ error: "Unauthorized" }); // TODO why doesn't .render work
  } else {
    console.log("LoginSuccessful:", res.data);
    next();
  }
}

// app.get('/api/candidates', loginRequired, ctrl.showAll)
// app.get(`/api/candidates/:id`, ctrl.getOne)
// app.get('/api/ratings', loginRequired, ctrl.ratings)
app.put('/api/person/auth/:id', loginRequired, ctrl.putPerson)
app.put('/api/candidate/auth/:id', loginRequired, ctrl.putCandidate)
app.put('/api/phase/auth/:id', loginRequired, ctrl.putPhase)
app.post('/api/person/auth/', loginRequired, ctrl.addPerson)
app.post('/api/candidate/auth/', loginRequired, ctrl.addCandidate)
app.delete('/api/candidate/auth/:id', loginRequired, ctrl.deleteCandidate)
app.delete('/api/person/auth/:id', loginRequired, ctrl.deletePerson)
app.get('/api/person/auth/:id', loginRequired, ctrl.getPerson)
app.get('/api/candidate/:id', ctrl.getCandidate)
app.get('/api/candidate/auth/:id', loginRequired, ctrl.getCandidate)
app.get('/api/candidates/auth/',  loginRequired, ctrl.getAllCandidates) // ,
app.get('/api/phase/:id', ctrl.getByPhase)
app.get('/api/phase/auth/:id', loginRequired, ctrl.getByPhase)
app.post(`/api/auth`, ctrl.login)
app.post(`/api/logout`, ctrl.logout)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
