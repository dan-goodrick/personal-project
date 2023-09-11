import { Candidate, User, Image, Person } from "./../server/model.js";
import connectToDB from "./../server/db.js";

const db = await connectToDB("postgresql:///boh");

const imageData = [
  {
    imageUrl:
      "https://images.theconversation.com/files/227904/original/file-20180716-44094-neg6b1.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
    candidateId: 1,
    primary: true,
  },
  {
    imageUrl:
      "https://med.stanford.edu/content/dam/sm-news/images/2014/06/mexican-family.jpg",
    candidateId: 2,
    primary: true,
  },
  {
    imageUrl: "https://i.ytimg.com/vi/wS6J8Fz_m-I/maxresdefault.jpg",
    candidateId: 3,
    primary: true,
  },
  {
    imageUrl:
      "https://cf.ltkcdn.net/family/images/std/280568-800x533-happy-family.webp",
    candidateId: 4,
    primary: true,
  },
  {
    imageUrl:
      "https://www.familyequality.org/wp-content/uploads/2020/09/My-Post-1.png",
    candidateId: 5,
    primary: true,
  },
];

const candidateData = [
  {
    lastName: "Lopez",
    phase: "Application Pending",
    phaseIndex: 1,
    currPhaseDate: new Date(Date.parse("2023-09-11")),
    imgUrl: 1,
    address: "22790 Maneadero, Baja California",
    municipality: "Maneadero",
    state: "Baja California",
    country: "Mexico",
    lat: 31.71053632757354,
    lon: -116.55977961304036,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "mortgage",
    paymentCnt: 12,
    loanDuration: 30,
  },
  {
    lastName: "Gomez Arenal",
    phase: "Application Complete",
    phaseIndex: 2,
    currPhaseDate: new Date(Date.parse("2023-08-11")),
    imgUrl: 2,
    address: "",
    municipality: "Maneadero",
    state: "Baja California",
    country: "Mexico",
    lat: 31.710012845462124,
    lon: -116.55829705751256,
    googleMaps: "https://goo.gl/maps/XGYdka1XRZHsocqS6",
    landTitle: "mortgage",
    paymentCnt: 8,
  },
  {
    lastName: "De La Cruz",
    phase: "Fundraising",
    phaseIndex: 3,
    currPhaseDate: new Date(Date.parse("2023-07-11")),
    imgUrl: 3,
    address: "22790 Maneadero, Baja California",
    municipality: "Maneadero",
    state: "Baja California",
    country: "Mexico",
    lat: 31.722634,
    lon: -116.568327,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "owns",
  },
  {
    lastName: "Quintana Juarez",
    phase: "Planning",
    phaseIndex: 4,
    currPhaseDate: new Date(Date.parse("2023-06-11")),
    imgUrl: 4,
    address:
      "Calle Misión de Sta. Rosalía 178, San Borja Residencial, Chapultepec, 22785 Ensenada, B.C., Mexico",
    municipality: "Chapultepec",
    state: "Baja California",
    country: "Mexico",
    lat: 31.785574695357738,
    lon: -116.58705202539169,
    googleMaps: "https://goo.gl/maps/L1o3dDyPKbn4Sikw7",
    landTitle: "mortgage",
    paymentCnt: 4,
    loanDuration: 300,
  },
  {
    lastName: "Martina",
    phase: "Complete",
    phaseIndex: 5,
    currPhaseDate: new Date(Date.parse("2023-05-11")),
    imgUrl: 5,
    municipality: "Maneadero",
    state: "Baja California",
    country: "Mexico",
    lat: 31.734556,
    lon: -116.557437,
    googleMaps: "https://goo.gl/maps/hAMZX3RjMdZRbyYg6",
    landTitle: "mortgage",
    paymentCnt: 3,
    loanDuration: 30,
  },
];

const personData = [
  {
    firstName: "Martina",
    dob: new Date(Date.parse("1978-11-12")),
    headOfHousehold: true,
    candidateId: 5,
  },
  {
    firstName: "Roberta",
    dob: new Date(Date.parse("1979-11-12")),
    headOfHousehold: false,
    candidateId: 5,
  },
  {
    lastName: "Juarez",
    firstName: "Sylvia",
    dob: new Date(Date.parse("1978-06-08")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    lastName: "Quintana",
    firstName: "Jorge",
    dob: new Date(Date.parse("1978-06-08")),
    headOfHousehold: true,
    candidateId: 4,
  },
  {
    lastName: "Lopez",
    firstName: "Jose",
    dob: new Date(Date.parse("1982-06-08")),
    headOfHousehold: true,
    candidateId: 1,
  },
  {
    lastName: "Gomez Arenal",
    firstName: "Sambo",
    dob: new Date(Date.parse("1980-06-08")),
    headOfHousehold: true,
    candidateId: 2,
  },
  {
    lastName: "Quintana",
    firstName: "Pedro",
    dob: new Date(Date.parse("2018-06-08")),
    candidateId: 4,
  },
  {
    lastName: "Gonzalez",
    firstName: "Lizette",
    dob: new Date(Date.parse("1988-06-08")),
    candidateId: 3,
  },
  {
    lastName: "De La Cruz",
    firstName: "Salvador",
    dob: new Date(Date.parse("1988-01-08")),
    headOfHousehold: true,
    candidateId: 3,
  },
  {
    lastName: "De La Cruz",
    firstName: "Jorge",
    dob: new Date(Date.parse("2015-01-08")),
    headOfHousehold: false,
    candidateId: 3,
  },
];

const userData = [
  {
    email: "admin@buildersofhope.net",
    password: "pwd",
    firstName: "dan",
    lastName: "goodrick",
  }
]
await db.sync({ force: true }).then(async () => {
  await User.bulkCreate(userData);
  await Candidate.bulkCreate(candidateData);
  await Image.bulkCreate(imageData);
  await Person.bulkCreate(personData);
  console.log("db reset and seeded");
});

await db.close();
