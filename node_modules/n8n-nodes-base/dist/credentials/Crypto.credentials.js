"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypto = void 0;
class Crypto {
    name = 'crypto';
    displayName = 'Crypto';
    documentationUrl = 'crypto';
    icon = 'fa:key';
    iconColor = 'green';
    properties = [
        {
            displayName: 'Hmac Secret',
            name: 'hmacSecret',
            type: 'string',
            description: 'Secret used in the Hmac action',
            typeOptions: {
                password: true,
            },
            default: '',
        },
        {
            displayName: 'Private Key',
            name: 'signPrivateKey',
            type: 'string',
            description: 'Private Key used in the Sign action',
            typeOptions: {
                rows: 4,
                password: true,
            },
            default: '',
        },
    ];
}
exports.Crypto = Crypto;
//# sourceMappingURL=Crypto.credentials.js.map