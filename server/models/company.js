"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
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
const companySchema = new Schema({
    name: String,
    address: String,
    revenue: Number,
    phone: String,
});
mongoose.model('Company', companySchema);
