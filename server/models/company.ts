import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Company:
 *     properties:
 *       name:
 *         type: string
 *       address:
 *         type: string
 *       revenue:
 *         type: integer
 *       phone:
 *         type: string
 */
export const CompanySchema = new Schema({
  name: String,
  address: String,
  revenue: Number,
  phone: String,
});

mongoose.model('Company', CompanySchema);
