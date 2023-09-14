import { Connection, createConnection, getConnectionManager } from 'typeorm';
import 'dotenv/config';

export const connectToDatabase = async () => {
  const manager = getConnectionManager();
  let connection: Connection;

  if (manager.has('default')) {
    connection = manager.get('default');
  } else {
    connection = await createConnection({
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
    });
  }

  return connection;
};
