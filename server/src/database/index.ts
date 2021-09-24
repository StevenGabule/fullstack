import dotenv from 'dotenv'
import { Database } from './../lib/types';
import { MongoClient } from 'mongodb'

dotenv.config();

const url: string = process.env.DB || ""

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {})
  const db = client.db('booking_app_db');
  return {
    listings: db.collection('test_listings')
  }
}