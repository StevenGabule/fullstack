import { ObjectId } from 'mongodb';
import { connectDatabase } from './../src/database/index';
import dotenv from "dotenv"
import { Listing } from '../src/lib/types';

dotenv.config();

const seed = async () => {
  try {
    console.log("[seed]: running...");
    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title:
          "Ex-VP Binay urges full study of granular lockdowns first before going nationwide",
        image:
          "https://lh3.googleusercontent.com/proxy/2ey2iUf5HVOgeCgFNnlkndXoKcQemdoC_al01i_5CyIfB6V0z1EiUsoqooCDLFNlgW-6w-wFN_mR63KxjVzuZJlkuIBP9BHZ8jWiP2_L7cFBzqwBA8mZYHd6GMdx=s0-w100-h100-rw-dcJVGUriAH",
        address: "3210 Scotchmere Dr. W, toronto, on, ca",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title:
          "Senator and Red Cross chairman? Duterte says Gordon 'cannot be both'",
        image:
          "https://lh3.googleusercontent.com/proxy/vb--tdC7zr13Q3C1xwU6goKzYxnfFSxE_p0faI-1jQWb4vhalN5Xg68OcJt_9R27IlUXpfWkbyOLRRZzz1CxLTJ21E4jTUuVZCHgdxun8y1FxxSW_En0gENPHog7ToqxuOUtk5YD4dgsKG4U=s0-w100-h100-rw-dcKSaI7Z0I",
        address: "3210 Scotchmere Dr. W, toronto, on, ca",
        price: 5231,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title:
          "Comelec official offers one-week extension of voter registration in mid-October",
        image:
          "https://lh3.googleusercontent.com/proxy/tXt8UDwSSdopZjRZ3xSSo9zlsTKbkdV1II1WvDWuLZHwkyJCuqP77ORsJWZszHy6b1nEIJSDr8sjgPLwLHiedKGEkKVZenFpcX3GPdnoVdI-NpQwgdUZbsGAoBSPrkPDAlR5yOmWEwScmUEzBP7jAe0WqjHagzXO9qLBi6pKGhK-M6e4xp_RF6_kn_1OUur67YNKJ8R8lby7H3KZnln6tdm482aRhVI7Ospf_en0y3tAvE3olbNgF-ww5B4tV5rxyxZULGQcc_o=s0-w100-h100-p-rw-df",
        address: "3210 Scotchmere Dr. W, toronto, on, ca",
        price: 14411,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: "Wedding coordinator Naser Fuentes nabbed",
        image:
          "https://lh3.googleusercontent.com/proxy/4upWHlAqqRPYhhEzB3JWVMt4Y5FWyS-5f4KNbevyM-9Z7WcUkMFaJNFJcx5kjeaPleXcIkMnyd8Yb2LmR4ohBBNpclsOEXP57W8lI4C2EGueY1WD8Gr3RVZT=s0-w100-h100-rw-dcpQSCzpmpexMB",
        address: "3210 Scotchmere Dr. W, toronto, on, ca",
        price: 15522,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title:
          "Philippines seeks to achieve 90% vaccination target before Eleksyon 2022",
        image:
          "https://lh3.googleusercontent.com/proxy/dlVIEec46tMIMRdJFK8T1-XZahoQzwtr6dMNrK75yIzybf3c5IvlrkCjsO93KC8HvJ-pqytQc2Keclx1radUDocLebWAqAWpX6MoweAP5eGTT9SfviI2nJCb3Bu35jdTmxXh=s0-w100-h100-rw-dcAXGQcSkn6A0C",
        address: "3210 Scotchmere Dr. W, toronto, on, ca",
        price: 5000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
    ];
    db.listings.insertMany(listings)
    console.log('[seed] - Seeding data completed!');

  } catch {
    throw new Error("Failed to seed database");
  }
}

seed();