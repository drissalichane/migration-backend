/**
 * Matrix Node - Version 1
 * Discriminator: resource=room, operation=leave
 */


interface Credentials {
  matrixApi: CredentialReference;
}

/** Leave a room */
export type MatrixV1RoomLeaveParams = {
  resource: 'room';
  operation: 'leave';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    roomId?: string | Expression<string>;
};

export type MatrixV1RoomLeaveNode = {
  type: 'n8n-nodes-base.matrix';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MatrixV1RoomLeaveParams>;
};