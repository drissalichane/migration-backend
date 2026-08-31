/**
 * Mautic Node - Version 1 - Zod Schema
 * Discriminator: resource=contact, operation=update
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
      resource: z.literal('contact').default('contact'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('credentials'), z.literal('oAuth2'), expressionSchema]).optional(),
      contactId: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      updateFields: z.object({ bodyJson: z.union([iDataObjectSchema, z.string()]).optional(), addressUi: z.unknown().optional(), b2bOrb2c: z.union([z.literal('B2B'), z.literal('B2C'), expressionSchema]).optional(), crmId: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), email: stringOrExpression.optional(), fax: stringOrExpression.optional(), firstName: stringOrExpression.optional(), hasPurchased: booleanOrExpression.optional(), ipAddress: stringOrExpression.optional(), lastActive: stringOrExpression.optional(), lastName: stringOrExpression.optional(), mobile: stringOrExpression.optional(), ownerId: stringOrExpression.optional(), phone: stringOrExpression.optional(), position: stringOrExpression.optional(), company: stringOrExpression.optional(), prospectOrCustomer: z.union([z.literal('Prospect'), z.literal('Customer'), expressionSchema]).optional(), sandbox: booleanOrExpression.optional(), stage: stringOrExpression.optional(), tags: z.array(z.string()).optional(), title: stringOrExpression.optional(), socialMediaUi: z.unknown().optional(), website: stringOrExpression.optional(), ipAddress: stringOrExpression.optional() }).optional(),
      options: z.object({ search: stringOrExpression.optional(), orderBy: stringOrExpression.optional(), orderByDir: z.union([z.literal('asc'), z.literal('desc'), expressionSchema]).optional(), publishedOnly: booleanOrExpression.optional(), minimal: booleanOrExpression.optional(), rawData: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};