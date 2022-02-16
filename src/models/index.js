// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { M1 } = initSchema(schema);

export {
  M1
};