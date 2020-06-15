const path = require("path");
const { Seeder } = require("mongo-seeding");

const config = {
  database:
    "mongodb+srv://VelvetVulture:decode00@cluster0-y23sb.mongodb.net/media-board?retryWrites=true&w=majority",
  dropDatabase: false, //It has to be false otherwise it throws an error
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./mydb/data"),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  }
);

seeder
  .import(collections)
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log("Error", err);
  });
