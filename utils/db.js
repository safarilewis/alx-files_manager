import mongodb from 'mongodb';
// eslint-disable-next-line
import Collection from 'mongodb/lib/collection';
import loadENV from './load_env';

class DBClient {
  constructor() {
    loadENV();
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const URL = `mongodb://${host}:${port}/${database}`;
    this.client = new mongodb.MongoClient(URL, { useUnifiedTopology: true });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }

  async filesCollection() {
    return this.client.db().collection('files');
  }
}
export const dbClient = new DBClient();
export default dbClient;
