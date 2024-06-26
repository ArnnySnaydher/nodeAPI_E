import { createPool } from 'mysql2/promise'
import { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from './config.js'

export const Pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

try {
    const connection = await Pool.getConnection();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }