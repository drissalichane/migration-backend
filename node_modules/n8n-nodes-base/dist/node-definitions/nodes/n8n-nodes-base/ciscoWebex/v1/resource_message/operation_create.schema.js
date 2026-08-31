/**
 * Webex by Cisco Node - Version 1 - Zod Schema
 * Discriminator: resource=message, operation=create
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
      resource: z.literal('message').default('message'),
      operation: z.literal('create').default('create'),
      destination: z.union([z.literal('room'), z.literal('person'), expressionSchema]).optional(),
      roomId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"destination":["room"]}}, defaults: {"destination":"room"} }),
      specifyPersonBy: resolveSchema({ parameters, schema: z.union([z.literal('email'), z.literal('id'), expressionSchema]), required: false, displayOptions: {"show":{"destination":["person"]}}, defaults: {"destination":"room"} }),
      toPersonId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"specifyPersonBy":["id"]}}, defaults: {"specifyPersonBy":"email"} }),
      toPersonEmail: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"specifyPersonBy":["email"]}}, defaults: {"specifyPersonBy":"email"} }),
      text: stringOrExpression.optional(),
      additionalFields: z.object({ attachmentsUi: z.unknown().optional(), fileUi: z.unknown().optional(), markdown: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};