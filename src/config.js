export const appConfig = {
  port: process.env.PORT || 3000
};

// Database
export const databaseInfo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
