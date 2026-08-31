/**
 * Google Workspace Admin Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=update
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
      resource: z.literal('user').default('user'),
      operation: z.literal('update'),
      userId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('userEmail'), z.literal('userId')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      updateFields: z.object({ archived: booleanOrExpression.optional(), suspendUi: booleanOrExpression.optional(), changePasswordAtNextLogin: booleanOrExpression.optional(), firstName: stringOrExpression.optional(), lastName: stringOrExpression.optional(), password: stringOrExpression.optional(), phoneUi: z.unknown().optional(), primaryEmail: stringOrExpression.optional(), emailUi: z.unknown().optional(), roles: z.array(z.union([z.literal('directorySyncAdmin'), z.literal('groupsAdmin'), z.literal('groupsEditor'), z.literal('groupsReader'), z.literal('helpDeskAdmin'), z.literal('inventoryReportingAdmin'), z.literal('mobileAdmin'), z.literal('servicesAdmin'), z.literal('storageAdmin'), z.literal('superAdmin'), z.literal('userManagement')])).optional(), customFields: z.unknown().optional() }).optional(),
    }).optional(),
  });
};