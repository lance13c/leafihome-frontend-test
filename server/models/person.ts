var mongoose = require('mongoose');

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
export const PersonSchema = new Schema({
  name: String,
  companyId: String,
  email: String,
});

mongoose.model('Person', PersonSchema);
