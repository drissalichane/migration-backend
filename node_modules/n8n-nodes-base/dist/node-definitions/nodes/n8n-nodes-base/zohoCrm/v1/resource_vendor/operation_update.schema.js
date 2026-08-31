/**
 * Zoho CRM Node - Version 1 - Zod Schema
 * Discriminator: resource=vendor, operation=update
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('vendor'),
      operation: z.literal('update'),
      vendorId: stringOrExpression.optional(),
      updateFields: z.object({ Address: z.unknown().optional(), Category: stringOrExpression.optional(), Currency: stringOrExpression.optional(), customFields: z.unknown().optional(), Description: stringOrExpression.optional(), Email: stringOrExpression.optional(), Phone: stringOrExpression.optional(), Vendor_Name: stringOrExpression.optional(), Website: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};