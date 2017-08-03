import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'hurjun1995.auth0.com',
    clientID: '2PxLctIy5ueR1aUhyZUBKYkdiTvC502M',
    redirectUri: 'http://localhost:3000',
    audience: 'https://hurjun1995.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
