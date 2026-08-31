/**
 * One Simple API Node - Version 1
 * Discriminator: resource=information, operation=exchangeRate
 */


interface Credentials {
  oneSimpleApi: CredentialReference;
}

/** Convert a value between currencies */
export type OneSimpleApiV1InformationExchangeRateParams = {
  resource: 'information';
  operation: 'exchangeRate';
/**
 * Value to convert
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * From Currency
 */
    fromCurrency?: string | Expression<string> | PlaceholderValue;
/**
 * To Currency
 */
    toCurrency?: string | Expression<string> | PlaceholderValue;
};

export type OneSimpleApiV1InformationExchangeRateNode = {
  type: 'n8n-nodes-base.oneSimpleApi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OneSimpleApiV1InformationExchangeRateParams>;
};