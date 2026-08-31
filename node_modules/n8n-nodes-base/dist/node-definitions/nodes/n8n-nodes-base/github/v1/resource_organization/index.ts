/**
 * GitHub - Organization Resource
 * Re-exports all operation types for this resource.
 */

import type { GithubV1OrganizationGetRepositoriesNode } from './operation_get_repositories';

export * from './operation_get_repositories';

export type GithubV1OrganizationNode = GithubV1OrganizationGetRepositoriesNode;