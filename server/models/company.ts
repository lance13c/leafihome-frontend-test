import mongoose from 'mongoose';

export interface Company {
  name: string;
  address: string;
  revenue: number;
  phone: string;
}

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
