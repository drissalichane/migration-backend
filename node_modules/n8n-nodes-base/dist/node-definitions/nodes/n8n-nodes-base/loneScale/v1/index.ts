/**
 * LoneScale Node - Version 1
 * Re-exports all discriminator combinations.
 */

import type { LoneScaleV1ListNode } from './resource_list';
import type { LoneScaleV1ItemNode } from './resource_item';

export * from './resource_list';
export * from './resource_item';

export type LoneScaleV1Node =
  | LoneScaleV1ListNode
  | LoneScaleV1ItemNode
  ;