/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0
 */
import type { TenantDto } from './tenantDto';

export interface TenantDtoIPagedList {
  readonly hasNext?: boolean;
  readonly hasPrevious?: boolean;
  /** @nullable */
  readonly items?: readonly TenantDto[] | null;
  readonly pageIndex?: number;
  readonly pageSize?: number;
  readonly totalItems?: number;
  readonly totalPages?: number;
}