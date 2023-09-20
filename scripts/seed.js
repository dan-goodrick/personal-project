import { Candidate, User, Image, Person, Phase } from "./../server/model.js";
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
    imageUrl: "https://www.brattonlawgroup.com/wp-content/uploads/2020/02/big-family.jpg",
    candidateId: 3,
    primary: false,
  },
  {
    imageUrl:
      "https://cf.ltkcdn.net/family/images/std/280568-800x533-happy-family.webp",
    candidateId: 4,
    primary: true,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1066913572/photo/hispanic-family-in-the-park.jpg?s=612x612&w=0&k=20&c=SLiJ4tled4Ig-uTHk2q3x7t_P93jXSoByHHhtUCsrQQ=",
    candidateId: 5,
    primary: true,
  },
];

const candidateData = [
  {
    lastName: "Lopez",
    phaseId: 1,
    currPhaseDate: new Date(Date.parse("2023-09-11")),
    imgUrl: 1,
    address: "22790 Maneadero, Baja California",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.71053632757354,
    lon: -116.55977961304036,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "mortgage",
    paymentCnt: 12,
    loanDuration: 30,
    currOnLoan:true,
    videoUrl: '/Users/dan/Movies/2019-11-04_15-02-00.mp4'
  },
  {
    lastName: "Gonzalez",
    phaseId: 1,
    currPhaseDate: new Date(Date.parse("2022-09-11")),
    imgUrl: 1,
    address: "",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.75053632757354,
    lon: -116.55977961304036,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "mortgage",
    paymentCnt: 2,
    loanDuration: 30,
    currOnLoan:true,
    videoUrl: ''
  },
  {
    lastName: "Gomez Arenal",
    phaseId: 2,
    currPhaseDate: new Date(Date.parse("2023-08-11")),
    videoUrl: '/Users/dan/Movies/2019-11-04_15-11-00.mp4',
    imgUrl: 2,
    address: "",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.710012845462124,
    lon: -116.55829705751256,
    googleMaps: "https://goo.gl/maps/XGYdka1XRZHsocqS6",
    landTitle: "mortgage",
    paymentCnt: 8,
    currOnLoan:true
  },
  {
    lastName: "De La Cruz",
    phaseId: 3,
    currPhaseDate: new Date(Date.parse("2023-07-11")),
    imgUrl: 3,
    videoUrl: '/Users/dan/Documents/"Builders of Hope"/4802099845351984.jpg',
    address: "22790 Maneadero, Baja California",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.722634,
    lon: -116.568327,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "in Hand",

  },
  {
    lastName: "Quintana Juarez",
    phaseId: 4,
    videoUrl: '/Users/dan/Documents/Builders of Hope/WhatsApp Video 2023-09-03 at 6.48.10 PM.mp4',
    currPhaseDate: new Date(Date.parse("2023-06-11")),
    imgUrl: 4,
    address:
      "Calle Misión de Sta. Rosalía 178, San Borja Residencial",
    municipality: "Chapultepec",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.785574695357738,
    lon: -116.58705202539169,
    googleMaps: "https://goo.gl/maps/L1o3dDyPKbn4Sikw7",
    landTitle: "mortgage",
    paymentCnt: 4,
    loanDuration: 300,
    currOnLoan:true
  },
  {
    lastName: "Martina",
    phaseId: 5,
    currPhaseDate: new Date(Date.parse("2023-05-11")),
    imgUrl: 5,
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.734556,
    lon: -116.557437,
    fundsRaised:0,
    googleMaps: "https://goo.gl/maps/hAMZX3RjMdZRbyYg6",
    landTitle: "mortgage",
    paymentCnt: 3,
    loanDuration: 30,
    currOnLoan:false
  },
  {
    lastName: "Mcbride",
    phaseId: 5,
    currPhaseDate: new Date(Date.parse("2023-05-11")),
    imgUrl: 5,
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.714556,
    lon: -116.557437,
    fundsRaised:10000,
    googleMaps: "https://goo.gl/maps/hAMZX3RjMdZRbyYg6",
    landTitle: "mortgage",
    paymentCnt: 23,
    loanDuration: 30,
    currOnLoan:true
  },
];

const personData = [
  {
    firstName: "Martina",
    dob: new Date(Date.parse("1978-11-12")),
    headOfHousehold: true,
    email: "gen@email.com",
    whatsApp: "+1123456789",
    gender: "female",
    candidateId: 5,
  },
  {
    firstName: "Roberta",
    dob: new Date(Date.parse("1979-11-12")),
    headOfHousehold: false,
    email: "gen@email.com",
    whatsApp: "+1123456789",
    gender: "female",
    candidateId: 5,
  },
  {
    lastName: "Quintana",
    firstName: "Pedro",
    gender: "male",
    dob: new Date(Date.parse("2010-06-08")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    lastName: "Juarez",
    firstName: "Sylvia",
    dob: new Date(Date.parse("1978-06-08")),
    headOfHousehold: false,
    email: "gen@email.com",
    whatsApp: "+1123456789",
    gender: "female",
    candidateId: 4,
  },
  {
    lastName: "Quintana",
    firstName: "Jorge",
    dob: new Date(Date.parse("1978-06-08")),
    headOfHousehold: true,
    email: "gen@email.com",
    whatsApp: "+1123456789",
    gender: "male",
    candidateId: 4,
  },
  {
    lastName: "Quintana",
    firstName: "Isa",
    gender: "female",
    dob: new Date(Date.parse("2015-06-08")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    lastName: "Lopez",
    firstName: "Jose",
    dob: new Date(Date.parse("1982-06-08")),
    headOfHousehold: true,
    gender: "male",
    email: "gen@email.com",
    whatsApp: "+1123456789",
    candidateId: 1,
  },
  {
    lastName: "Gomez Arenal",
    firstName: "Sambo",
    dob: new Date(Date.parse("1980-06-08")),
    gender: "male",
    email: "gen@email.com",
    whatsApp: "+1123456789",
    headOfHousehold: true,
    candidateId: 2,
  },
  {
    lastName: "Gomez Arenal",
    firstName: "Lizette",
    dob: new Date(Date.parse("1985-06-08")),
    gender: "female",
    headOfHousehold: false,
    email: "gen@email.com",
    whatsApp: "+1123456789",
    candidateId: 2,
  },
  {
    lastName: "Quintana",
    firstName: "Pedro",
    gender: "male",
    dob: new Date(Date.parse("2018-06-08")),
    email: "gen@email.com",
    whatsApp: "+1123456789",
    candidateId: 4,
  },
  {
    lastName: "Gonzalez",
    firstName: "Lizette",
    dob: new Date(Date.parse("1988-06-08")),
    gender: "female",
    email: "gen@email.com",
    whatsApp: "+1123456789",
    candidateId: 3,
  },
  {
    lastName: "De La Cruz",
    firstName: "Salvador",
    gender: "male",
    dob: new Date(Date.parse("1988-01-08")),
    email: "gen@email.com",
    whatsApp: "+1123456789",
    headOfHousehold: true,
    candidateId: 3,
  },
  {
    lastName: "De La Cruz",
    firstName: "Jorge",
    gender: "male",
    email: "gen@email.com",
    whatsApp: "+1123456789",
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

const phaseData = [
  {phaseName: "Application Pending"},
  {phaseName: "Application Complete"},
  {phaseName: "Fundraising"},
  {phaseName: "Planning"},
  {phaseName: "Completed"},
]
await db.sync({ force: true }).then(async () => {
  await User.bulkCreate(userData);
  await Phase.bulkCreate(phaseData);
  await Candidate.bulkCreate(candidateData);
  await Image.bulkCreate(imageData);
  await Person.bulkCreate(personData);
  console.log("db reset and seeded");
});

await db.close();
