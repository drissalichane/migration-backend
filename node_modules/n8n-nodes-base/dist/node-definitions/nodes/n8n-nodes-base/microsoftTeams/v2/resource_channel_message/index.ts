/**
 * Microsoft Teams - ChannelMessage Resource
 * Re-exports all operation types for this resource.
 */

import type { MicrosoftTeamsV2ChannelMessageCreateNode } from './operation_create';
import type { MicrosoftTeamsV2ChannelMessageGetAllNode } from './operation_get_all';

export * from './operation_create';
export * from './operation_get_all';

export type MicrosoftTeamsV2ChannelMessageNode =
  | MicrosoftTeamsV2ChannelMessageCreateNode
  | MicrosoftTeamsV2ChannelMessageGetAllNode
  ;