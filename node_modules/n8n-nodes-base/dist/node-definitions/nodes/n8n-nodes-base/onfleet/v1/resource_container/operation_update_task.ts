/**
 * Onfleet Node - Version 1
 * Discriminator: resource=container, operation=updateTask
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Fully replace a container's tasks */
export type OnfleetV1ContainerUpdateTaskParams = {
  resource: 'container';
  operation: 'updateTask';
/**
 * The object ID according to the container chosen
 */
    containerId?: string | Expression<string> | PlaceholderValue;
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

export type OnfleetV1ContainerUpdateTaskNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1ContainerUpdateTaskParams>;
};