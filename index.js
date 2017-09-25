var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
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
var Certificates = (function (_super) {
    __extends(Certificates, _super);
    function Certificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Activates or deactivates the acceptance of self signed/unsecure SSL certificates
     * @param {boolean} boolActivateUnsecure boolean value to set desired behaviour
     */
    Certificates.prototype.trustUnsecureCerts = function (boolActivateUnsecure) {
        return;
    };
    return Certificates;
}(IonicNativePlugin));
Certificates.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Certificates.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Certificates.prototype, "trustUnsecureCerts", null);
Certificates = __decorate([
    Plugin({
        pluginName: 'Certificates',
        plugin: 'cordova-plugin-certificates',
        pluginRef: 'cordova.plugins.certificates',
        repo: 'https://github.com/hypery2k/cordova-certificate-plugin',
        platforms: ['Android', 'iOS']
    })
], Certificates);
export { Certificates };
//# sourceMappingURL=index.js.map