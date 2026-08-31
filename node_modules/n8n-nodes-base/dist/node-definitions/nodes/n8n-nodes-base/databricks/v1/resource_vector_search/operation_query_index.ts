/**
 * Databricks Node - Version 1
 * Discriminator: resource=vectorSearch, operation=queryIndex
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Semantic search with vector embeddings. <a href="https://docs.databricks.com/generative-ai/vector-search.html" target="_blank">Learn more</a>. */
export type DatabricksV1VectorSearchQueryIndexParams = {
  resource: 'vectorSearch';
  operation: 'queryIndex';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Name of the vector search index
 */
    indexName?: string | Expression<string> | PlaceholderValue;
/**
 * Type of query to perform
 * @default text
 */
    queryType?: 'text' | 'vector' | Expression<string>;
/**
 * Text to search for (will be automatically converted to embeddings)
 * @displayOptions.show { queryType: ["text"] }
 */
    queryText?: string | Expression<string> | PlaceholderValue;
/**
 * Vector embeddings to search for similar vectors (array of numbers)
 * @displayOptions.show { queryType: ["vector"] }
 * @default []
 */
    queryVector?: IDataObject | string | Expression<string>;
/**
 * Search algorithm to use
 * @default ANN
 */
    searchMode?: 'HYBRID' | 'ANN' | Expression<string>;
/**
 * Comma-separated list of column names to return in results (e.g., "content,URL,title")
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Maximum number of results to return
 * @default 10
 */
    numResults?: number | Expression<number>;
/**
 * Whether to rerank results using a reranker model for improved relevance
 * @default false
 */
    enableReranking?: boolean | Expression<boolean>;
/**
 * Name of the reranker model to use
 * @displayOptions.show { enableReranking: [true] }
 * @default databricks_reranker
 */
    rerankerModel?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of columns to use for reranking (e.g., "content,title")
 * @displayOptions.show { enableReranking: [true] }
 */
    columnsToRerank?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** SQL-like filter expression to apply to the results (e.g., "category = 'docs' AND published = true")
     */
    filterExpression?: string | Expression<string> | PlaceholderValue;
    /** Minimum relevance score threshold for results. Must be ≥ 0 and ≤ 1.
     * @default 0
     */
    scoreThreshold?: number | Expression<number>;
  };
};

export type DatabricksV1VectorSearchQueryIndexNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1VectorSearchQueryIndexParams>;
};