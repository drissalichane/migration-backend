/**
 * Matrix Node - Version 1
 * Discriminator: resource=room, operation=kick
 */


interface Credentials {
  matrixApi: CredentialReference;
}

/** Kick a user from a room */
export type MatrixV1RoomKickParams = {
  resource: 'room';
  operation: 'kick';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    roomId?: string | Expression<string>;
/**
 * The fully qualified user ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Reason for kick
 */
    reason?: string | Expression<string> | PlaceholderValue;
};

export type MatrixV1RoomKickNode = {
  type: 'n8n-nodes-base.matrix';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MatrixV1RoomKickParams>;
};