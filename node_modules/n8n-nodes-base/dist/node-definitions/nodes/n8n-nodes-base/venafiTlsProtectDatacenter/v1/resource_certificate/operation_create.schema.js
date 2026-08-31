/**
 * Venafi TLS Protect Datacenter Node - Version 1 - Zod Schema
 * Discriminator: resource=certificate, operation=create
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
      resource: z.literal('certificate').default('certificate'),
      operation: z.literal('create').default('create'),
      PolicyDN: stringOrExpression.optional(),
      Subject: stringOrExpression.optional(),
      additionalFields: z.object({ Approvers: stringOrExpression.optional(), CADN: stringOrExpression.optional(), CertificateType: z.union([z.literal('Code Signing'), z.literal('Device'), z.literal('Server'), z.literal('User'), expressionSchema]).optional(), City: stringOrExpression.optional(), Contacts: stringOrExpression.optional(), Country: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), CreatedBy: stringOrExpression.optional(), Devices: z.unknown().optional(), DisableAutomaticRenewal: booleanOrExpression.optional(), EllipticCurve: z.union([z.literal('P256'), z.literal('P384'), z.literal('P521'), expressionSchema]).optional(), KeyAlgorithm: z.union([z.literal('RSA'), z.literal('ECC'), expressionSchema]).optional(), KeyBitSize: numberOrExpression.optional(), ManagementType: z.union([z.literal('Enrollment'), z.literal('Monitoring'), z.literal('Provisioning'), z.literal('Unassigned'), expressionSchema]).optional(), origin: stringOrExpression.optional(), Organization: stringOrExpression.optional(), OrganizationalUnit: stringOrExpression.optional(), PKCS10: stringOrExpression.optional(), Reenable: booleanOrExpression.optional(), SetWorkToDo: booleanOrExpression.optional(), State: stringOrExpression.optional(), SubjectAltNamesUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};