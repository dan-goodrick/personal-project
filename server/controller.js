import { Candidate, User, Image, Phase, Person } from "./model.js";

const serverFunctions = {
  login: async (req, res) => {
    console.log("login with session", req.session);
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("user: ", user, "matches? ", req.body);
    if (!user || user.password != req.body.password) {
      res.json({ success: false });
      return;
    }
    req.session.userId = user.userId;
    res.json({ success: true });
  },
  logout: async (req, res) => {
    console.log("logout with session", req.session);
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
    const candidates = await Candidate.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
        { model: Phase, where: { phaseId: req.params.id } },
        { model: Person },
      ],
      order: [[Person, "headOfHousehold", 'DESC'], [Person, "dob", 'ASC']] 
    });
    res.json(candidates);
  },
  getAllCandidates: async (req, res) => {
    console.log(req.params);
    const candidates = await Candidate.findAll({
        include: [
          { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
          { model: Phase },
          { model: Person },
        ],
        order: [[Person, "headOfHousehold", 'DESC'], [Person, "dob", 'ASC']] 
      });
      res.json(candidates);
  },
  getByPk: async (req, res) => {
    console.log(req.params);
    const candidate = await Candidate.findByPk(req.params.id, {
      include: [
        { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
        { model: Phase },
        { model: Person},
      ],
      order: [[Person, "headOfHousehold", 'DESC'], [Person, "dob", 'ASC']] 
    });
    res.json(candidate);
  },
  delete: async (req, res) => {
    await Candidate.destroy({ where: { candidateId: +req.params.id } })
      .then(res.send(`Removed ${req.params.id}`))
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },
  putPerson: async (req, res) => {
    console.log("put Person", req.body);
    const person = await Person.findByPk(req.params.id)
    await person.set(req.body)
    await person.save()
    res.send(`Updated record ${req.body.personId} for ${req.body.lastName}`)
  },
  putCandidate: async (req, res) => {
    console.log("put candidate", req.body);
    const candidate = await Candidate.findByPk(req.params.id)
    await candidate.set(req.body)
    await candidate.save()
    res.send(`Updated record ${req.body.candidateId} for ${req.body.lastName}`)
  },
  putPhase: async (req, res) => {
    console.log("put phase", req.body);
    const phase = await Phase.findByPk(req.params.id)
    await phase.set(req.body)
    await phase.save()
    res.send(`Updated phase of ID: ${req.body.phaseId} for ${req.body.phaseName}`)
  },
  addPerson: async (req, res) => {
    console.log("add person", req.body);
    const person = await Person.create(req.body)
    await person.save()
    res.send(`Added record  ${person.lastName}`)
  },
  addCandidate: async (req, res) => {
    console.log("add person", req.body);
    const candidate = await Candidate.create(req.body)
    await candidate.save()
    res.send(`Added record  ${candidate.lastName}`)
  },
  // INSERT to add a record

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

// order: [["headOfHousehold", 'ASC'], ["dob", 'ASC']]
