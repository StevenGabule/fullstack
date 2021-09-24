import { connectDatabase } from './database/index';
import dotenv from "dotenv";
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

dotenv.config();

const mount = async (app: Application) => {
  const db = await connectDatabase();
  app.use(express.json());
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });

  await server.start()
  await server.applyMiddleware({ app, path: "/api" });

  const PORT = process.env.PORT || 9000;
  app.listen(PORT, async () => {
    console.log(`App is running on port: ${PORT}`);
  });
  //const listings = await db.listings.find({}).toArray();
  //console.log(listings);

}

mount(express());