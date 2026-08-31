/**
 * Help Scout Node - Version 1
 * Discriminator: resource=mailbox, operation=get
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Get a conversation */
export type HelpScoutV1MailboxGetParams = {
  resource: 'mailbox';
  operation: 'get';
/**
 * Mailbox ID
 */
    mailboxId?: string | Expression<string> | PlaceholderValue;
};

export type HelpScoutV1MailboxGetOutput = {
  _links?: {
    fields?: {
      href?: string;
    };
    folders?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  createdAt?: string;
  email?: string;
  id?: number;
  name?: string;
  slug?: string;
  updatedAt?: string;
};

export type HelpScoutV1MailboxGetNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1MailboxGetParams>;
  output?: Items<HelpScoutV1MailboxGetOutput>;
};