/**
 * Perplexity Node Types
 *
 * Re-exports all version-specific types and provides combined union type.
 */

import type { PerplexityV2Node } from './v2';
import type { PerplexityV1Node } from './v1';

export * from './v2';
export * from './v1';

// Combined union type for all versions
export type PerplexityNode = PerplexityV2Node | PerplexityV1Node;