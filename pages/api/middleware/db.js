import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI);
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
