import { Pool } from "pg";

const connectionString = 'postgres://kimzjikh:aC8DXWccSBWMhyvmootBv3MwFHMhlHuX@tuffi.db.elephantsql.com/kimzjikh';

const db = new Pool({connectionString});

export default db;

