/**
 * Asana Node - Version 1 - Zod Schema
 * Discriminator: resource=taskComment, operation=add
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
      resource: z.literal('taskComment'),
      operation: z.literal('add'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      id: stringOrExpression.optional(),
      isTextHtml: booleanOrExpression.optional(),
      text: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"isTextHtml":[false,true]}}, defaults: {"isTextHtml":false} }),
      additionalFields: z.object({ is_pinned: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};