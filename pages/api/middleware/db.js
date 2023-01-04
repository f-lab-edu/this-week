import mongoose from 'mongoose';

import HabitModel from 'pages/api/models/habit';

const { MONGODB_URI } = process.env;

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Heeyeol',
    },
  );

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Connected to mongodb');
  });
  db.on('error', (err) => {
    console.log(err);
  });

  // return mongoose.connect(process.env.MONGODB_URI);
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default async function dbMiddleware(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose == dbConnect();
    }
  } catch (e) {
    console.error(e);
  }
  return next();
}
