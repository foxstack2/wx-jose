import type { JWSHeaderParameters, JWEHeaderParameters } from '../types';
export declare type ProtectedHeaderParameters = JWSHeaderParameters & JWEHeaderParameters;
/**
 * Decodes the Protected Header of a JWE/JWS/JWT token utilizing any JOSE serialization.
 *
 * @param token JWE/JWS/JWT token in any JOSE serialization.
 *
 * @example Usage
 * ```js
 * const protectedHeader = jose.decodeProtectedHeader(token)
 * console.log(protectedHeader)
 * ```
 */
export declare function decodeProtectedHeader(token: string | object): ProtectedHeaderParameters;
