/**
 * Oracle Database Node - Version 1 - Zod Validation Schemas
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
    resource: z.unknown().optional(),
    operation: resolveSchema({ parameters, schema: z.union([z.literal('deleteTable'), z.literal('execute'), z.literal('insert'), z.literal('upsert'), z.literal('select'), z.literal('update')]), required: false, displayOptions: {"show":{"resource":["database"]}}, defaults: {"resource":"database"} }),
    schema: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('name')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"hide":{"operation":["execute"]}}, defaults: {"operation":"insert"} }),
    table: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('name')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"hide":{"operation":["execute"]}}, defaults: {"operation":"insert"} }),
    deleteCommand: resolveSchema({ parameters, schema: z.union([z.literal('truncate'), z.literal('delete'), z.literal('drop'), expressionSchema]), required: false, displayOptions: {"show":{"resource":["database"],"operation":["deleteTable"]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    where: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ column: stringOrExpression.optional(), condition: z.union([z.literal('equal'), z.literal('!='), z.literal('LIKE'), z.literal('>'), z.literal('<'), z.literal('>='), z.literal('<='), z.literal('IS NULL'), z.literal('IS NOT NULL'), expressionSchema]).optional(), value: z.union([iDataObjectSchema, z.string()]).optional() })).optional() }), required: false, displayOptions: {"show":{"deleteCommand":["delete"],"resource":["database"],"operation":["deleteTable","select"]},"hide":{"table":[""]}}, defaults: {"deleteCommand":"truncate","resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    combineConditions: resolveSchema({ parameters, schema: z.union([z.literal('AND'), z.literal('OR'), expressionSchema]), required: false, displayOptions: {"show":{"deleteCommand":["delete"],"resource":["database"],"operation":["deleteTable","select"]},"hide":{"table":[""]}}, defaults: {"deleteCommand":"truncate","resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    options: resolveSchema({ parameters, schema: z.object({ autoCommit: booleanOrExpression.optional(), params: z.unknown().optional(), fetchArraySize: numberOrExpression.optional(), prefetchRows: numberOrExpression.optional(), outputColumns: z.array(z.string()).optional(), largeNumbersOutputAsString: booleanOrExpression.optional(), stmtBatching: z.union([z.literal('single'), z.literal('independently'), z.literal('transaction')]).optional(), stmtBatching: z.union([z.literal('single'), z.literal('independently'), z.literal('transaction')]).optional() }), required: false, displayOptions: {"show":{"resource":["database"],"operation":["deleteTable","execute","insert","select","update","upsert"]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    query: resolveSchema({ parameters, schema: z.string(), required: false, displayOptions: {"show":{"resource":["database"],"operation":["execute"]}}, defaults: {"resource":"database","operation":"insert"} }),
    columns: resolveSchema({ parameters, schema: resourceMapperValueSchema, required: false, displayOptions: {"show":{"resource":["database"],"operation":["insert","update","upsert"]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"resource":["database"],"operation":["select"]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
    limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"resource":["database"],"operation":["select"],"returnAll":[false]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","returnAll":false,"table":{"mode":"list","value":""}} }),
    sort: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ column: stringOrExpression.optional(), direction: z.union([z.literal('ASC'), z.literal('DESC'), expressionSchema]).optional() })).optional() }), required: false, displayOptions: {"show":{"resource":["database"],"operation":["select"]},"hide":{"table":[""]}}, defaults: {"resource":"database","operation":"insert","table":{"mode":"list","value":""}} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};