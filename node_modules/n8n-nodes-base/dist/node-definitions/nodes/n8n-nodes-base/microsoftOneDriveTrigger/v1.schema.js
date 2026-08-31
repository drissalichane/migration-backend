/**
 * Microsoft OneDrive Trigger Node - Version 1 - Zod Validation Schemas
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
    pollTimes: z.object({ item: z.array(z.object({ mode: z.union([z.literal('everyMinute'), z.literal('everyHour'), z.literal('everyDay'), z.literal('everyWeek'), z.literal('everyMonth'), z.literal('everyX'), z.literal('custom'), expressionSchema]).optional(), hour: numberOrExpression.optional(), minute: numberOrExpression.optional(), dayOfMonth: numberOrExpression.optional(), weekday: z.union([z.literal('1'), z.literal('2'), z.literal('3'), z.literal('4'), z.literal('5'), z.literal('6'), z.literal('0'), expressionSchema]).optional(), cronExpression: stringOrExpression.optional(), value: numberOrExpression.optional(), unit: z.union([z.literal('minutes'), z.literal('hours'), expressionSchema]).optional() })).optional() }).optional(),
    event: z.union([z.literal('fileCreated'), z.literal('fileUpdated'), z.literal('folderCreated'), z.literal('folderUpdated'), expressionSchema]).optional(),
    simple: booleanOrExpression.optional(),
    watchFolder: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"event":["fileCreated","folderCreated"]}}, defaults: {"event":"fileCreated"} }),
    watch: resolveSchema({ parameters, schema: z.union([z.literal('anyFile'), z.literal('selectedFolder'), z.literal('selectedFile'), expressionSchema]), required: false, displayOptions: {"show":{"event":["fileUpdated","folderUpdated"]}}, defaults: {"event":"fileCreated"} }),
    fileId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"event":["fileUpdated"],"watch":["selectedFile"]}}, defaults: {"event":"fileCreated","watch":"anyFile"} }),
    folderId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"watch":["selectedFolder","oneSelectedFolder"],"watchFolder":[true]}}, defaults: {"watch":"anyFile","watchFolder":false} }),
    options: resolveSchema({ parameters, schema: z.object({ folderChild: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"watch":["selectedFolder"],"watchFolder":[true]}}, defaults: {"watch":"anyFile","watchFolder":false} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};