/**
 * Onfleet Node - Version 1
 * Discriminator: resource=task, operation=complete
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Force-complete a started Onfleet task */
export type OnfleetV1TaskCompleteParams = {
  resource: 'task';
  operation: 'complete';
/**
 * The ID of the task object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the task's completion was successful
 * @default true
 */
    success?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Completion Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
  };
};

export type OnfleetV1TaskCompleteNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1TaskCompleteParams>;
};