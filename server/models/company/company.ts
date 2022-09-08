import mongoose from 'mongoose';
import { Company } from 'types';

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
const CompanySchema = new Schema<Company>({
  name: String,
  address: String,
  revenue: Number,
  phone: String,
});

mongoose.model('Company', CompanySchema);
