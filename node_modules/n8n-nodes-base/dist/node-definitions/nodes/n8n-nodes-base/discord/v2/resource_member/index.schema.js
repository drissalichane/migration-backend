/**
 * Discord - Member Resource - Zod Schema Factory
 * Exports a factory that unions all operation schemas for this resource.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

const getGetAllSchema = require('./operation_get_all.schema');
const getRoleAddSchema = require('./operation_role_add.schema');
const getRoleRemoveSchema = require('./operation_role_remove.schema');

module.exports = function getSchema(helpers) {
  const { parameters, z } = helpers;
  // Apply operation default if not set
  const effectiveParams = parameters.operation === undefined ? { ...parameters, operation: 'send' } : parameters;
  return z.union([
    getGetAllSchema({ ...helpers, parameters: effectiveParams }),
    getRoleAddSchema({ ...helpers, parameters: effectiveParams }),
    getRoleRemoveSchema({ ...helpers, parameters: effectiveParams }),
  ]);
};