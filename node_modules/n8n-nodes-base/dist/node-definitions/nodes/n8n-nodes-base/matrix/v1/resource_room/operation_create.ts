/**
 * Matrix Node - Version 1
 * Discriminator: resource=room, operation=create
 */


interface Credentials {
  matrixApi: CredentialReference;
}

/** Send a message to a room */
export type MatrixV1RoomCreateParams = {
  resource: 'room';
  operation: 'create';
/**
 * Room Name
 */
    roomName?: string | Expression<string> | PlaceholderValue;
/**
 * Preset
 * @default public_chat
 */
    preset?: 'private_chat' | 'public_chat' | Expression<string>;
/**
 * Room Alias
 */
    roomAlias?: string | Expression<string> | PlaceholderValue;
};

export type MatrixV1RoomCreateNode = {
  type: 'n8n-nodes-base.matrix';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MatrixV1RoomCreateParams>;
};