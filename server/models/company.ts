var mongoose = require('mongoose');

export interface CompanySchema {
  name: string;
  address: string;
  revenue: string;
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
const companySchema: CompanySchema = new Schema({
  name: String,
  address: String,
  revenue: Number,
  phone: String,
});

mongoose.model('Company', companySchema);
