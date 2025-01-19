import { Collection, DataAPIClient } from "@datastax/astra-db-ts";
import dotenv from "dotenv";

dotenv.config();

export let collection : any;

const dbConnect = async () => {
  const client = new DataAPIClient(process.env.ASTRA_TOKEN);

  const db = client.db('https://95973b06-bb15-494a-ae60-550719b1c7c1-us-east-2.apps.astra.datastax.com', {
    keyspace: "default_keyspace",
    token: process.env.TOKEN,
  });

  collection = db.collection("engagement_data");

  console.log("Astra db is connected");
};

export default dbConnect;

