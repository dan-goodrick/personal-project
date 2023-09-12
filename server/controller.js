import { Candidate, User, Image, Phase } from "./model.js";

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
    res.json({ success: true });
  },
  getByPhase: async (req, res) => {
    console.log(req.params);
    res.json(await Candidate.findAll({include: [{model: Image, 
                                                    where: { primary: true },
                                                    attributes: ["imageUrl"]},
                                                {model: Phase,
                                                    where: { phaseId: req.params.id } },
                                                ]}));
  },
  getAllCandidates: async (req, res) => {
    res.json(await Candidate.findAll({include: [{model: Image, 
                                                    where: { primary: true },
                                                    attributes: ["imageUrl"]},
                                                {model: Phase}],}));
  },
  getByPk: async (req, res) => {
    console.log(req.params);
    res.json(await Candidate.findByPk(req.params.id));
  },
  delete: async (req, res) => {
    await Candidate.destroy({ where: { id: +req.params.id } })
      .then(res.send(`Removed ${req.params.id}`))
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },
  //   addCandidate: async (req, res) => {
  //     await Candidate.create({
  //         id: req.body.id,
  //         name: req.body.name,
  //         role: req.body.role,
  //         email: req.body.email
  //     })
  //     res.status(200).send('Added record');
  // },
};

export default serverFunctions;
