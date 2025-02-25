import sql from "mssql";

const dbConfig: sql.config = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PASS as string,
  server: process.env.DB_HOST as string, // Example: myserver.database.windows.net
  database: process.env.DB_NAME as string,
  options: {
    encrypt: true, // Required for Azure SQL
    trustServerCertificate: true, // Set to false in production
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(dbConfig);
  }
  return pool;
}
