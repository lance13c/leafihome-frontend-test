import mongoose from 'mongoose';
import { Person } from 'types';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Person:
 *     properties:
 *       name:
 *         type: string
 *       companyId:
 *         type: string
 *       email:
 *         type: string
 */
const PersonSchema = new Schema<Person>({
  name: String,
  companyId: String,
  email: String,
});

mongoose.model('Person', PersonSchema);
