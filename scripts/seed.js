import { Candidate, User, Image, Person, Phase, Member } from "./../server/model.js";
import connectToDB from "./../server/db.js";
import bcrypt from 'bcryptjs'

const db = await connectToDB("postgresql:///boh");
const salt = bcrypt.genSaltSync(10)

const imageData = [
  {
    original:
      "https://buildersofhope.s3.us-west-2.amazonaws.com/roberta-martina.jpg",
    candidateId: 1,
    primary: true,
  },
  {
    original:
    "https://buildersofhope.s3.us-west-2.amazonaws.com/roberta-martina-close.jpg",
    candidateId: 1,
    tag: "carousel",
  },
  {
    original:
    "https://buildersofhope.s3.us-west-2.amazonaws.com/enrique-family.jpg",
    candidateId: 2,
    primary: true,
  },
  {
    original:
    "https://buildersofhope.s3.us-west-2.amazonaws.com/enrique-family-nameplate.jpg",
    candidateId: 2,
    tag: "carousel",
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/reynalda.jpg",
    candidateId: 3,
    primary: true,
  },
  {
    original:
      "https://buildersofhope.s3.us-west-2.amazonaws.com/Honorina.jpg",
    candidateId: 4,
    primary: true,
  },
  {
    original:
      "https://buildersofhope.s3.us-west-2.amazonaws.com/olade.jpg",
    candidateId: 5,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/goodrick.jpeg",
    memberId: 5,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/perry.jpeg",
    memberId: 7,
    primary: true,
  },
  {
    original: "/noImage.jpeg",
    memberId: 6,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/lambertsen.jpeg",
    memberId: 4,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/weber.jpeg",
    memberId: 3,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/collings.jpeg",
    memberId: 2,
    primary: true,
  },
  {
    original: "https://buildersofhope.s3.us-west-2.amazonaws.com/krueger.jpeg",
    memberId: 1,
    primary: true,
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/construction-site.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/walls.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/larry.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/anna1.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/chad-wiring.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/painting.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/larry1.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/phil.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/martinez-home-plaque.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/finished-roberta.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/zack.jpg",
    tag: 'carousel',
  },
  {
    original:"https://buildersofhope.s3.us-west-2.amazonaws.com/voh-family.jpg",
    tag: 'carousel',
  },
];

const memberData = [
  {
    lastName: "Krueger",
    city: "Exeter",
    state: "California",
    country: "USA",
    about: "Going to Mexico to serve and love on the people there has been life changing for our family. We have realized that by giving up a little bit of our time and money, we have gained so much more than we gave. We have been taught how to love better, we have witnessed  miracles,  we have watched hope blossom, we have made deep friendships, we have learned what it means to love unconditionally and especially how amazing it feels to get outside of ourselves and our comfort zones and simply spend several days getting to focus on others. These opportunities have bolstered our faith in humanity and strengthened our faith in Jesus Christ."
  },
  {
    lastName: "Collings",
    city: "Torrevieja",
    state: "Valencia",
    country: "Spain",
    about: "Our first trip to build in Mexico was life-changing!  As a family, we decided to dedicate our 2021 Christmas time and budget to doing what Jesus did, to give hope to those who need it most.  We fell in love with the humble people of Baja, and felt joy in helping to put a roof over the heads of many who have never had a home of their own.  We, and our children especially, have recognized just how blessed we are and we intend to use what we have been given so that we can bless others.  We want to share the love of God with many, many more of His children through our efforts to give them hope in the form of a home."
  },
  {
    lastName: "Weber",
    city: "Orem",
    state: "Utah",
    country: "USA",
    about: "Our family dedicated our 2021 Christmas vacation to Travel to Baja Mexico to build a home for a family in need. While we were there, we were able to serve and bless many other families in the Ensenada area. The experience touched our lives and gave our children experiences and feelings they will cherish their entire lives. We hope to give other families opportunities to experience the joy we’ve felt by serving our brothers and sisters in Mexico."
  },
  {
    lastName: "Lambertsen",
    city: "Champaign",
    state: "Illinois",
    country: "USA",
    about: "As our family has grown, we have filled our life with “stuff” that doesn’t last. Toys break. Clothes get worn out. Electronics become outdated. But the one thing that we keep forever is our experiences. Our first planned Mexico trip was life-changing! We donated our entire  Christmas budget to go help build houses and serve in Mexico. We packed our car full of gifts to donate at the orphanage and drove 10 hours straight to the California/Mexico border. Unfortunately, the night we arrived we tested positive for Covid and were not able to go. We donated everything and turned around and came home with an empty car. It was the most Christlike gift we could give; we literally gave away everything and got nothing in return. It was one of the most rewarding things our family has ever done."
  },
  {
    lastName: "Goodrick",
    city: "Saratoga Springs",
    state: "Utah",
    country: "USA",
    about: "We were introduced to The Village of Hope in 2021 and from the moment we stepped out onto the job site, we knew our family, our aspirations, hopes and dreams would never be the same.  Building homes for families that work hard but will never be able to afford a home on their own is such a rewarding experience.  While the places these families immigrate from are in even worse economic conditions, the economic situation in Baja is still very difficult.  These families are bound by the challenges they face and a permanent home doesn't relieve them of these challenges, but it does help."
  },
  {
    lastName: "Williams",
    city: "Idaho Falls",
    state: "Idaho",
    country: "USA"
  },
  {
    lastName: "Perry",
    city: "Orem",
    state: "Utah",
    country: "USA"
  },
]
const candidateData = [
  {
    lastName: "Roberta & Martina",
    phaseId: 5,
    currPhaseDate: new Date(Date.parse("2022-10-11")),
    imgUrl: 1,
    address: "PCMV+Q4",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.71053632757354,
    lon: -116.55977961304036,
    googleMaps: "https://goo.gl/maps/smwhf2mt7ZQXXAZK7",
    landTitle: "mortgage",
    currOnLoan:true,
  },
  {
    lastName: "Martinez de Los Angeles",
    phaseId: 5,
    currPhaseDate: new Date(Date.parse("2022-09-11")),
    about: "Enrique is a handyman and does general construction. He has worked on previous Builders of Hope sites, pouring concrete, and mudding, taping and painting the drywall.  He is honest and hard working.  He and his wife Maria have one child ??? that has down syndrome.",
    imgUrl: 3,
    landTitle: "mortgage",
    videoUrl: 'https://buildersofhope.s3.us-west-2.amazonaws.com/enrique-movie.mp4'
  },
  {
    lastName: "De la Cruz Villegas",
    phaseId: 4,
    currPhaseDate: new Date(Date.parse("2023-08-11")),
    videoUrl: '/Users/dan/Movies/2019-11-04_15-11-00.mp4',
    imgUrl: 5,
    about: "Salvador and Reynalda are from Nayarit, Mexico. They moved to Baja California in search of more job opportunities. Salvador works in the fields and Reyna also works full time.  They work opposite shifts so they can take care of their 3 children. They are currently living in tents and under plastic sheets.",
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.72562791840455, 
    lon: -116.55213213602666,
    googleMaps: "https://maps.app.goo.gl/wb8iP34PR7Z9w4kU8",
    landTitle: "mortgage",
    paymentCnt: 8,
    currOnLoan:true
  },
  {
    lastName: "Honorina",
    phaseId: 4,
    currPhaseDate: new Date(Date.parse("2023-08-11")),
    imgUrl: 6,
    videoUrl: '',
    about: "Honorina is a widow.  Her husband died in an accident 9 years ago.  She picks tomatoes, cucumbers and squash for work. She has 2 daughters who share a single room with her. Her son, Isaias, is battling leukemia and lives with his Grandmother due to unsanitary conditions at home.",
    lat: 31.713815597700606, 
    lon: -116.55689224138997,
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    googleMaps: "https://maps.app.goo.gl/wb8iP34PR7Z9w4kU8",
    landTitle: "in Hand",

  },
  {
    lastName: "Olade Leon",
    phaseId: 3,
    videoUrl: '/Users/dan/Documents/Builders of Hope/WhatsApp Video 2023-09-03 at 6.48.10 PM.mp4',
    currPhaseDate: new Date(Date.parse("2023-06-11")),
    imgUrl: 7,
    municipality: "Maneadero",
    city: "Ensenada",
    state: "Baja California",
    country: "Mexico",
    zip: 22790,
    lat: 31.685733302402163, 
    lon:-116.60775270723262,
    googleMaps: "https://maps.app.goo.gl/DrfZrWLbfjSVqExi8",
    landTitle: "mortgage",
    paymentCnt: 6,
    loanDuration: 300,
    currOnLoan:true
  },
];

const personData = [
  {
    firstName: "Martina",
    gender: "female",
    candidateId: 1,
  },
  {
    firstName: "Jose Alfredo",
    gender: "male",
    candidateId: 1,
  },
  {
    firstName: "Roberta",
    headOfHousehold: true,
    gender: "female",
    candidateId: 1,
  },
  {
    lastName: "Martinez",
    firstName: "Enrique",
    whatsApp: "+52 646 294 5936",
    gender: "male",
    headOfHousehold: true,
    candidateId: 2,
  },
  {
    lastName: "De los Angeles",
    firstName: "Maria",  // is this right?
    headOfHousehold: false,
    gender: "female",
    candidateId: 2,
  },
  {
    firstName: "TBD",  // is this right?
    headOfHousehold: false,
    gender: "male",
    candidateId: 2,
  },
  {
    lastName: "De la Cruz",
    firstName: "Salvador",
    gender: "male",
    headOfHousehold: true,
    candidateId: 3,
  },
  {
    lastName: "Villegas",
    firstName: "Reynalda",
    gender: "female",
    headOfHousehold: false,
    candidateId: 3,
  },
  {
    firstName: "Miranda",
    gender: "female",
    dob: new Date(Date.parse("2015-01-01")),
    headOfHousehold: false,
    candidateId: 3,
  },
  {
    firstName: "Celia",
    gender: "female",
    dob: new Date(Date.parse("2017-01-01")),
    headOfHousehold: false,
    candidateId: 3,
  },
  {
    firstName: "Ivan",
    gender: "female",
    dob: new Date(Date.parse("2023-04-01")),
    headOfHousehold: false,
    candidateId: 3,
  },
  {
    firstName: "Honorina",
    gender: "female",
    headOfHousehold: true,
    candidateId: 4,
  },
  {
    firstName: "Isaias",
    gender: "male",
    dob: new Date(Date.parse("2004-01-01")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    firstName: "Teresa",
    gender: "female",
    dob: new Date(Date.parse("2002-01-01")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    firstName: "Isabel",
    gender: "female",
    dob: new Date(Date.parse("2006-01-01")),
    headOfHousehold: false,
    candidateId: 4,
  },
  {
    lastName: "Olade",
    firstName: "Benjamin",
    gender: "make",
    headOfHousehold: true,
    candidateId: 5,
  },
  {
    lastName: "Leon",
    firstName: "Lizett",
    gender: "female",
    headOfHousehold: false,
    candidateId: 5,
  },
  {
    firstName: "Mosiah",
    dob: new Date(Date.parse("2013-01-01")),
    gender: "male",
    headOfHousehold: false,
    candidateId: 5,
  },
  {
    firstName: "Yeihzuan",
    dob: new Date(Date.parse("2015-01-01")),
    gender: "male",
    headOfHousehold: false,
    candidateId: 5,
  },
];

const userData = [
  {
    email: "admin@buildersofhope.net",
    password: bcrypt.hashSync('pwd', salt),
    firstName: "dan",
    lastName: "goodrick",
  }
]


const phaseData = [
  {phaseName: "Application Pending"},
  {phaseName: "Application Accepted"},
  {phaseName: "Fundraising"},
  {phaseName: "Planning"},
  {phaseName: "Completed"},
]
await db.sync({ force: true }).then(async () => {
  await User.bulkCreate(userData);
  await Phase.bulkCreate(phaseData);
  await Candidate.bulkCreate(candidateData);
  await Member.bulkCreate(memberData);
  await Image.bulkCreate(imageData);
  await Person.bulkCreate(personData);
  console.log('db reset and seeded')
})


await db.close();
