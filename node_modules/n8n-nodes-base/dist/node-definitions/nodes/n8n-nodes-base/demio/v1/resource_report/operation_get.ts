/**
 * Demio Node - Version 1
 * Discriminator: resource=report, operation=get
 */


interface Credentials {
  demioApi: CredentialReference;
}

/** Get an event */
export type DemioV1ReportGetParams = {
  resource: 'report';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    eventId?: string | Expression<string>;
/**
 * ID of the session. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    dateId?: string | Expression<string>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Filter results by participation status
     */
    status?: 'attended' | 'banned' | 'completed' | 'did-not-attend' | 'left-early' | Expression<string>;
  };
};

export type DemioV1ReportGetNode = {
  type: 'n8n-nodes-base.demio';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DemioV1ReportGetParams>;
};