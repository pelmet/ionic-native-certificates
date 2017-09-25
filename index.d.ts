import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Certificates
 * @description Cordova plugin to configure SSL certificates, currently used to enable usage of untrusted aka self-signed SSL certificates.
 *
 * @usage
 * ```typescript
 * import { Certificates } from '@ionic-native/certificates';
 *
 *
 * constructor(private certificates: Certificates) { }
 *
 * ...
 *
 * this.certificates.trustUnsecureCerts(true);
 * ```
 */
export declare class Certificates extends IonicNativePlugin {
    /**
     * Activates or deactivates the acceptance of self signed/unsecure SSL certificates
     * @param {boolean} boolActivateUnsecure boolean value to set desired behaviour
     */
    trustUnsecureCerts(boolActivateUnsecure: boolean): void;
}
