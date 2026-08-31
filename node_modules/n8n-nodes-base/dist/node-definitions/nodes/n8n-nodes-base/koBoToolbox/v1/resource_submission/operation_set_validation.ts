/**
 * KoBoToolbox Node - Version 1
 * Discriminator: resource=submission, operation=setValidation
 */


interface Credentials {
  koBoToolboxApi: CredentialReference;
}

/** Set the validation status of the submission */
export type KoBoToolboxV1SubmissionSetValidationParams = {
  resource: 'submission';
  operation: 'setValidation';
/**
 * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    formId?: string | Expression<string>;
/**
 * Submission ID (number, e.g. 245128)
 */
    submissionId?: string | Expression<string> | PlaceholderValue;
/**
 * Desired Validation Status
 */
    validationStatus?: 'validation_status_approved' | 'validation_status_not_approved' | 'validation_status_on_hold' | Expression<string>;
};

export type KoBoToolboxV1SubmissionSetValidationNode = {
  type: 'n8n-nodes-base.koBoToolbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KoBoToolboxV1SubmissionSetValidationParams>;
};