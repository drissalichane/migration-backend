/**
 * Notion Node - Version 1 - Zod Schema
 * Discriminator: resource=block, operation=append
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
      resource: z.literal('block'),
      operation: z.literal('append').default('append'),
      blockId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      blockUi: z.object({ blockValues: z.array(z.object({ type: stringOrExpression.optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), checked: booleanOrExpression.optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), title: stringOrExpression.optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), url: stringOrExpression.optional() })).optional() }).optional(),
    }).optional(),
  });
};