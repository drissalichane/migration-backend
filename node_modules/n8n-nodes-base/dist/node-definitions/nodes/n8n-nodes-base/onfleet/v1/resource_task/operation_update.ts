/**
 * Onfleet Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Update an Onfleet admin */
export type OnfleetV1TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
/**
 * The ID of the task object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The earliest time the task should be completed
     */
    completeAfter?: string | Expression<string>;
    /** The latest time the task should be completed
     */
    completeBefore?: string | Expression<string>;
    /** The ID of the organization that will be responsible for fulfilling the task
     */
    executor?: string | Expression<string> | PlaceholderValue;
    /** The ID of the organization that will be displayed to the recipient of the task
     */
    merchant?: string | Expression<string> | PlaceholderValue;
    /** Notes for the task
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Whether the task is a pickup task
     * @default false
     */
    pickupTask?: boolean | Expression<boolean>;
    /** The number of units to be dropped off while completing this task, for route optimization purposes
     * @default 0
     */
    quantity?: number | Expression<number>;
    /** The number of minutes to be spent by the worker on arrival at this task's destination, for route optimization purposes
     * @default 0
     */
    serviceTime?: number | Expression<number>;
  };
};

export type OnfleetV1TaskUpdateNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1TaskUpdateParams>;
};