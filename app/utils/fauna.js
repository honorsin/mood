// utils/fauna.js
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

export { q, client };
