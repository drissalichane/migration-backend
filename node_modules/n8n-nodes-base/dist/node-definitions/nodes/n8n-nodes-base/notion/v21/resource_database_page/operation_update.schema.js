/**
 * Notion Node - Version 2.1 - Zod Schema
 * Discriminator: resource=databasePage, operation=update
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
      resource: z.literal('databasePage'),
      operation: z.literal('update'),
      pageId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      simple: booleanOrExpression.optional(),
      propertiesUi: z.object({ propertyValues: z.array(z.object({ key: stringOrExpression.optional(), type: z.unknown().optional(), title: stringOrExpression.optional(), richText: booleanOrExpression.optional(), textContent: stringOrExpression.optional(), text: z.unknown().optional(), phoneValue: stringOrExpression.optional(), multiSelectValue: z.array(z.string()).optional(), selectValue: stringOrExpression.optional(), statusValue: stringOrExpression.optional(), emailValue: stringOrExpression.optional(), ignoreIfEmpty: booleanOrExpression.optional(), urlValue: stringOrExpression.optional(), peopleValue: z.array(z.string()).optional(), relationValue: stringOrExpression.optional(), checkboxValue: booleanOrExpression.optional(), numberValue: numberOrExpression.optional(), range: booleanOrExpression.optional(), includeTime: booleanOrExpression.optional(), date: stringOrExpression.optional(), dateStart: stringOrExpression.optional(), dateEnd: stringOrExpression.optional(), timezone: stringOrExpression.optional(), fileUrls: z.unknown().optional() })).optional() }).optional(),
      options: z.object({ iconType: z.union([z.literal('emoji'), z.literal('file'), expressionSchema]).optional(), icon: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};