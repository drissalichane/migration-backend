/**
 * Microsoft Entra ID Node - Version 1 - Zod Schema
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
      user: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      updateFields: z.object({ aboutMe: stringOrExpression.optional(), accountEnabled: booleanOrExpression.optional(), ageGroup: z.union([z.literal('Adult'), z.literal('Minor'), z.literal('NotAdult'), expressionSchema]).optional(), birthday: stringOrExpression.optional(), businessPhones: stringOrExpression.optional(), city: stringOrExpression.optional(), companyName: stringOrExpression.optional(), consentProvidedForMinor: z.union([z.literal('Denied'), z.literal('Granted'), z.literal('NotRequired'), expressionSchema]).optional(), country: stringOrExpression.optional(), department: stringOrExpression.optional(), displayName: stringOrExpression.optional(), employeeId: stringOrExpression.optional(), employeeType: stringOrExpression.optional(), givenName: stringOrExpression.optional(), employeeHireDate: stringOrExpression.optional(), employeeLeaveDateTime: stringOrExpression.optional(), employeeOrgData: z.unknown().optional(), forceChangePassword: z.union([z.literal('forceChangePasswordNextSignIn'), z.literal('forceChangePasswordNextSignInWithMfa'), expressionSchema]).optional(), interests: stringOrExpression.optional(), jobTitle: stringOrExpression.optional(), surname: stringOrExpression.optional(), mail: stringOrExpression.optional(), mailNickname: stringOrExpression.optional(), mobilePhone: stringOrExpression.optional(), mySite: stringOrExpression.optional(), officeLocation: stringOrExpression.optional(), onPremisesImmutableId: stringOrExpression.optional(), otherMails: stringOrExpression.optional(), password: stringOrExpression.optional(), passwordPolicies: z.array(z.union([z.literal('DisablePasswordExpiration'), z.literal('DisableStrongPassword')])).optional(), pastProjects: stringOrExpression.optional(), postalCode: stringOrExpression.optional(), preferredLanguage: stringOrExpression.optional(), responsibilities: stringOrExpression.optional(), schools: stringOrExpression.optional(), skills: stringOrExpression.optional(), state: stringOrExpression.optional(), streetAddress: stringOrExpression.optional(), usageLocation: stringOrExpression.optional(), userPrincipalName: stringOrExpression.optional(), userType: z.union([z.literal('Guest'), z.literal('Member'), expressionSchema]).optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};