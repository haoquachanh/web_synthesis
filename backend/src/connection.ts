import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import 'dotenv/config'
let connection: Connection;

export const connectToDatabase = async () => {
  if (!connection) {
    const connectionOptions: ConnectionOptions = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      logging: true,
      entities: ['src/entities/*.ts'],
      migrations: ['src/migrations/*.ts'],
      extra: {
        connectionLimit: 10,
        queueLimit: 0,
      },
    };
    connection = await createConnection(connectionOptions);
  }
  return connection;
};
