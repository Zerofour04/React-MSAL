import {Configuration} from '@azure/msal-browser';

export const msalConfiguration: Configuration = {
    auth: {
        clientId: 'CLIENT_ID',
        authority: 'AUTHORITY'
    }
};

export const authRequest = {
    scopes: ['openid', 'profile']
};

export  const loginRequest = {
    scopes: ["User.Read"]
};