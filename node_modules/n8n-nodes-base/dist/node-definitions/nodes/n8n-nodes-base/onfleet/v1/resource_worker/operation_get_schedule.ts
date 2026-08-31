/**
 * Onfleet Node - Version 1
 * Discriminator: resource=worker, operation=getSchedule
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Get a specific Onfleet worker schedule */
export type OnfleetV1WorkerGetScheduleParams = {
  resource: 'worker';
  operation: 'getSchedule';
/**
 * The ID of the worker object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1WorkerGetScheduleNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1WorkerGetScheduleParams>;
};