import { Account, Client, Databases } from 'appwrite';

export const PROJECT_ID="67514f3d00352d1afb48"
export const DATABASE_ID="6751582e003101275ca9"
export const COLLECTION_ID_MESSAGES="67515837000c82479942"

const client = new Client();
client.setProject('67514f3d00352d1afb48');
client.setEndpoint('https://cloud.appwrite.io/v1')

export const account=new Account(client)
export const databases=new Databases(client)

export default client;
// export default account;