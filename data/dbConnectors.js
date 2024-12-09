import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from "lodash";
import casual from "casual";

async function connectMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://brandonleetruter:vmPJovZt7VcObhcJ@graphqlcluster.ntvgs.mongodb.net/?retryWrites=true&w=majority&appName=graphQLCluster"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  sold: String,
  inventory: String,
  stores: Array,
});

const Widgets = mongoose.model("widgets", widgetSchema);

const sequelize = new Sequelize("sqlite::memory:");

const Categories = sequelize.define("categories", {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});

async function syncAndSeedCategories() {
  try {
    await sequelize.sync({ force: true });
    console.log("SQlite connection established and categories model synced");

    await Promise.all(_.times(5, () => {
      return Categories.create({
        category: casual.word,
        description: casual.description,
      });
    }));

    console.log('Categories seeded!');
  } catch (error) {
    console.log('SQLite Error: ', error);
  }
};

syncAndSeedCategories();

export { Widgets, Categories };
