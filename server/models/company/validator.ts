import { z } from 'zod';

// TODO: Come up with better naming scheme
export const CompanySchemeZod = z.object({
  _id: z.string().optional(),
  _v: z.number().optional(),
  name: z.string().max(100),
  address: z.string().max(300).optional(),
  // Money is captured in integers as cents to avoid common financial errors
  revenue: z.number().int().optional(),
  phone: z.string().optional(),
});
