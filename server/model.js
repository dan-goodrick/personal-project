import { DataTypes, Model } from "sequelize";
import util from "util";
import url from "url";

import connectToDB from "./db.js";

export const db = await connectToDB("postgresql:///boh");

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
    // timestamps: true,
    // updatedAt: false,
  }
);

export class Phase extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Phase.init(
  {
    phaseId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    phaseName: DataTypes.STRING,
  },
  {
    modelName: "phase",
    sequelize: db,
  }
);

export class Candidate extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Candidate.init(
  {
    candidateId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currPhaseDate: DataTypes.DATE,
    municipality: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    googleMaps: DataTypes.STRING,
    landTitle: DataTypes.STRING,
    paymentCnt: DataTypes.INTEGER,
    currOnLoan: DataTypes.STRING,
    fundsRaised: {
      type: DataTypes.FLOAT,
      default: 0,
    },
    fundRequirement: {
      type: DataTypes.FLOAT,
      default: 10000,
    },
    loanDuration: {
      type: DataTypes.INTEGER,
      default: 30,
    },
  },
  {
    modelName: "candidate",
    sequelize: db,
  }
);

export class Person extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Person.init(
  {
    personId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    dob: DataTypes.DATE,
    headOfHousehold: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    modelName: "person",
    sequelize: db,
    // timestamps: true,
    // updatedAt: false,
  }
);

export class Image extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Image.init(
  {
    imageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: DataTypes.STRING(500),
    primary: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    modelName: "image",
    sequelize: db,
  }
);

Candidate.hasMany(Person, { foreignKey: "candidateId" });
Person.belongsTo(Candidate, { foreignKey: "candidateId" });

Candidate.hasMany(Image, { foreignKey: "candidateId" });
Image.belongsTo(Candidate, { foreignKey: "candidateId" });

Candidate.belongsTo(Phase, { foreignKey: "phaseId" });

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing database...");
  await db.sync();
  console.log("Finished syncing database!");
}
