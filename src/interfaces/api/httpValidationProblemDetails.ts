/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0
 */
import type { HttpValidationProblemDetailsErrors } from './httpValidationProblemDetailsErrors';

export interface HttpValidationProblemDetails {
  /** @nullable */
  detail?: string | null;
  /** @nullable */
  errors?: HttpValidationProblemDetailsErrors;
  /** @nullable */
  instance?: string | null;
  /** @nullable */
  status?: number | null;
  /** @nullable */
  title?: string | null;
  /** @nullable */
  type?: string | null;
  [key: string]: unknown;
}
