/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0
 */
import type { TenantsLicenseDto } from './tenantsLicenseDto';

export interface TenantDto {
  /** @nullable */
  adminEmail?: string | null;
  /** @nullable */
  connectionString?: string | null;
  /** @nullable */
  id?: string | null;
  isActive?: boolean;
  /** @nullable */
  issuer?: string | null;
  /** @nullable */
  licenseId?: string | null;
  /** @nullable */
  name?: string | null;
  tenantGroupId?: string;
  /** @nullable */
  tenantsLicense?: TenantsLicenseDto[] | null;
  validUpto?: string;
}
