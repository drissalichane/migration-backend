/**
 * Email Trigger (IMAP) Node - Version 2 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    mailbox: stringOrExpression.optional(),
    postProcessAction: z.union([z.literal('read'), z.literal('nothing'), expressionSchema]).optional(),
    downloadAttachments: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"format":["simple"]}}, defaults: {"format":"simple"} }),
    format: z.union([z.literal('raw'), z.literal('resolved'), z.literal('simple'), expressionSchema]).optional(),
    dataPropertyAttachmentsPrefixName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"format":["resolved","simple"],"downloadAttachments":[true]}}, defaults: {"format":"simple","downloadAttachments":false} }),
    options: z.object({ customEmailConfig: stringOrExpression.optional(), forceReconnect: numberOrExpression.optional(), trackLastMessageId: booleanOrExpression.optional() }).optional(),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};