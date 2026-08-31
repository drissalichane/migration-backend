/**
 * Git Node - Version 1.1 - Zod Validation Schemas
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
    authentication: resolveSchema({ parameters, schema: z.union([z.literal('gitPassword'), z.literal('none'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["clone","push"]}}, defaults: {"operation":"log"} }),
    operation: z.union([z.literal('add'), z.literal('addConfig'), z.literal('clone'), z.literal('commit'), z.literal('fetch'), z.literal('listConfig'), z.literal('log'), z.literal('pull'), z.literal('push'), z.literal('pushTags'), z.literal('reflog'), z.literal('status'), z.literal('switchBranch'), z.literal('tag'), z.literal('userSetup')]).optional(),
    repositoryPath: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["clone"]},"hide":{"operation":["clone"]}}, defaults: {"operation":"log"} }),
    pathsToAdd: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["add"]}}, defaults: {"operation":"log"} }),
    key: resolveSchema({ parameters, schema: z.union([z.literal('user.email'), z.literal('user.name'), z.literal('remote.origin.url'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["addConfig"]}}, defaults: {"operation":"log"} }),
    value: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["addConfig"]}}, defaults: {"operation":"log"} }),
    options: resolveSchema({ parameters, schema: z.object({ mode: z.union([z.literal('append'), z.literal('set'), expressionSchema]).optional(), branch: stringOrExpression.optional(), pathsToAdd: stringOrExpression.optional(), file: stringOrExpression.optional(), targetRepository: stringOrExpression.optional(), reference: stringOrExpression.optional(), createBranch: booleanOrExpression.optional(), startPoint: stringOrExpression.optional(), force: booleanOrExpression.optional(), setUpstream: booleanOrExpression.optional(), remoteName: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["addConfig","commit","log","push","reflog","switchBranch"]}}, defaults: {"operation":"log"} }),
    sourceRepository: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["clone"]}}, defaults: {"operation":"log"} }),
    message: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["commit"]}}, defaults: {"operation":"log"} }),
    returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["log","reflog"]}}, defaults: {"operation":"log"} }),
    limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"operation":["log","reflog"],"returnAll":[false]}}, defaults: {"operation":"log","returnAll":false} }),
    branchName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["switchBranch"]}}, defaults: {"operation":"log"} }),
    name: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["tag"]}}, defaults: {"operation":"log"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};