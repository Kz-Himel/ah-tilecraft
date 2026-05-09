// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGO_URI);
// const db = client.db("ah-tilecraft");

// export const auth = betterAuth({
//   database: mongodbAdapter(db),
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//   },
// });



import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

async function createAuth() {
  await client.connect();
  const db = client.db("ah-tilecraft");

  return betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
  });
}

export const auth = await createAuth();