import mongoose from 'mongoose';
export interface Person {
  name: string;
  companyId: string;
  email: number;
}

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
