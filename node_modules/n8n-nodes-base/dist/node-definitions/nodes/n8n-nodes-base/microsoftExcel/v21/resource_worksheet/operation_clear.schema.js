/**
 * Microsoft Excel 365 Node - Version 2.1 - Zod Schema
 * Discriminator: resource=worksheet, operation=clear
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('worksheet'),
      operation: z.literal('clear'),
      workbook: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      worksheet: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      applyTo: z.union([z.literal('All'), z.literal('Formats'), z.literal('Contents'), expressionSchema]).optional(),
      useRange: booleanOrExpression.optional(),
      range: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"useRange":[true]}}, defaults: {"useRange":false} }),
    }).optional(),
  });
};