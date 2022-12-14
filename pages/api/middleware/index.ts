import type { NextApiRequest, NextApiResponse } from 'next';
import dbMiddleware from './db';
import nc, { Middleware } from 'next-connect';

export default function createHandler(
  ...middlewares: Middleware<NextApiRequest, NextApiResponse>[]
) {
  return nc<NextApiRequest, NextApiResponse>().use(
    dbMiddleware,
    ...middlewares,
  );
}
