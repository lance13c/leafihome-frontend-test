var mongoose = require('mongoose');

export interface PersonSchema {
  name: string;
  companyId: string;
  email: string;
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
const personSchema: PersonSchema = new Schema({
  name: String,
  companyId: String,
  email: String,
});

mongoose.model('Person', personSchema);
