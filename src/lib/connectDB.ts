import { Collection, DataAPIClient } from "@datastax/astra-db-ts";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export let collection : any;

const dbAstraConnect = async () => {
  const client = new DataAPIClient(process.env.ASTRA_TOKEN);

  const db = client.db('https://95973b06-bb15-494a-ae60-550719b1c7c1-us-east-2.apps.astra.datastax.com', {
    keyspace: "default_keyspace",
    token: process.env.TOKEN,
  });

  collection = db.collection("engagement_data");

  console.log("Astra db is connected");
};





type ConnectionObject = {
    isConnected? : number
  }

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected) {
        return;
    }
    
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://WTSM:DUELoTSVTjP5E3lH@scims.moy1bzg.mongodb.net/",{})
       
        
        connection.isConnected = db.connections[0].readyState
        console.log("MongoDB Connected Successfully")

    } catch (error) {

        console.log("Database connection failed",error);
        
        process.exit(1);
    }

}

export default dbConnect;

