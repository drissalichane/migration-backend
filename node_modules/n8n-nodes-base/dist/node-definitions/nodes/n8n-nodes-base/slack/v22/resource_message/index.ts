/**
 * Slack - Message Resource
 * Re-exports all operation types for this resource.
 */

import type { SlackV22MessageDeleteNode } from './operation_delete';
import type { SlackV22MessageGetPermalinkNode } from './operation_get_permalink';
import type { SlackV22MessagePostNode } from './operation_post';
import type { SlackV22MessageSearchNode } from './operation_search';
import type { SlackV22MessageSendAndWaitNode } from './operation_send_and_wait';
import type { SlackV22MessageUpdateNode } from './operation_update';

export * from './operation_delete';
export * from './operation_get_permalink';
export * from './operation_post';
export * from './operation_search';
export * from './operation_send_and_wait';
export * from './operation_update';

export type SlackV22MessageNode =
  | SlackV22MessageDeleteNode
  | SlackV22MessageGetPermalinkNode
  | SlackV22MessagePostNode
  | SlackV22MessageSearchNode
  | SlackV22MessageSendAndWaitNode
  | SlackV22MessageUpdateNode
  ;