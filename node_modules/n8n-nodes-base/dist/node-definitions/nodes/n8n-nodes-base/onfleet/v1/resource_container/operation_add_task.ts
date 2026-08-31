/**
 * Onfleet Node - Version 1
 * Discriminator: resource=container, operation=addTask
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Add task at index (or append) */
export type OnfleetV1ContainerAddTaskParams = {
  resource: 'container';
  operation: 'addTask';
/**
 * Container Type
 */
    containerType?: 'organizations' | 'teams' | 'workers' | Expression<string>;
/**
 * The object ID according to the container chosen
 */
    containerId?: string | Expression<string> | PlaceholderValue;
/**
 * Insert Type
 */
    type?: -1 | 0 | 1 | Expression<number>;
/**
 * The index given indicates the position where the tasks are going to be inserted
 * @displayOptions.show { type: [1] }
 * @default 0
 */
    index?: number | Expression<number>;
/**
 * Task's ID that are going to be used
 * @default []
 */
    tasks?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to include the target task's dependency family (parent and child tasks) in the resulting assignment operation
     * @default false
     */
    considerDependencies?: boolean | Expression<boolean>;
  };
};

export type OnfleetV1ContainerAddTaskNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1ContainerAddTaskParams>;
};