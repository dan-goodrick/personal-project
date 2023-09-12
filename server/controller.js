import { Candidate, Image, User, Person } from "./model.js";

const serverFunctions = {

  login: async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("user: ", user, "matches? ", req.body.password);
    if (!user || user.password != req.body.password) {
      res.json({ success: false });
      return;
    }
    req.session.userId = user.userId;
    res.json({ success: true });
  },
  logout: async (req, res) => {
    if (!req.session.userId) {
      res.status(401).json({ error: `no user is logged in` });
      return;
    }
    await User.findByPk(req.session.userId);
    req.session.destroy();
    res.json({success:true});
  },
  getByPhase: async (req, res) => {
    console.log(req.params);
    res.json(await Candidate.findAll({ where: { phaseId: req.params.id } }))
  },
  getByPk: async (req, res) => {
    console.log(req.params);
    res.json(await Candidate.findByPk(req.params.id))
  },
  delete: async (req, res) => {
     await Candidate.destroy({ where: {id: +req.params.id}})
      .then(res.send(`Removed ${req.params.id}`))
      .catch (error => {
        console.error(`Unable to remove Record ${req.params.id}`, error)})
  },
  // update: async (req, res) => {
  //   const record = await Candidate.findByPk(req.params.id);
  //   record.update({key: req.body.record});
  //   res.send(200, {message: 'Candidate updated successfully'});
  //   },
  // show: async (req, res) => {
  //   res.send(await Movie.findAll());
  // },
  // getOne: async (req, res) => {
  //   res.json(await Movie.findByPk(req.params.id));
  // },
  // ratings: async (req, res) => {
  //   const { userId } = req.session;
  //   const ratings = await User.findByPk(userId).then((user) =>
  //     // user.getRatings({ include: Movie })
  //     user.getRatings({ include: { model: Movie, attributes: ["title"] } })
  //   );// eager loaded with include
  //   res.json(ratings);
  // },
  // addRating: async (req, res) => {
  //   const { userId } = req.session;
  //   const { movieId, score } = req.body;
  //   const rating = await User.findByPk(userId).then((user)=>user.createRating({ movieId: movieId, score: score }));
  //   res.json(rating);
  // },
};

export default serverFunctions;
