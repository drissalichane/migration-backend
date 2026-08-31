/**
 * Slack - Message Resource
 * Re-exports all operation types for this resource.
 */

import type { SlackV24MessageDeleteNode } from './operation_delete';
import type { SlackV24MessageGetPermalinkNode } from './operation_get_permalink';
import type { SlackV24MessagePostNode } from './operation_post';
import type { SlackV24MessageSearchNode } from './operation_search';
import type { SlackV24MessageSendAndWaitNode } from './operation_send_and_wait';
import type { SlackV24MessageUpdateNode } from './operation_update';

export * from './operation_delete';
export * from './operation_get_permalink';
export * from './operation_post';
export * from './operation_search';
export * from './operation_send_and_wait';
export * from './operation_update';

export type SlackV24MessageNode =
  | SlackV24MessageDeleteNode
  | SlackV24MessageGetPermalinkNode
  | SlackV24MessagePostNode
  | SlackV24MessageSearchNode
  | SlackV24MessageSendAndWaitNode
  | SlackV24MessageUpdateNode
  ;