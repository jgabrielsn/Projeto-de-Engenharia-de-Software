/* eslint-disable no-undef */

const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');


const { validPassword, genPassword, issueJWT } = require('../models/authModel');

describe('validPassword', () => {
    const password = 'password123';
    const salt = 'salty';
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    it('returns true when password is valid', () => {
        expect(validPassword(password, hash, salt)).toBe(true);
    });

    it('returns false when password is invalid', () => {
        expect(validPassword('invalid', hash, salt)).toBe(false);
    });
});

describe('genPassword', () => {
    it('returns salt and hash for a given password', () => {
        const password = 'password123';
        const { salt, hash } = genPassword(password);
        expect(typeof salt).toBe('string');
        expect(typeof hash).toBe('string');
        expect(salt).not.toBe('');
        expect(hash).not.toBe('');
    });
});

describe('issueJWT', () => {
    const user = { UserID: 1 };

    it('returns a signed JWT with Bearer token type', () => {
        const { token, expires } = issueJWT(user);
        expect(typeof token).toBe('string');
        expect(token).toContain('Bearer ');
        expect(typeof expires).toBe('string');
    });

    it('returns a JWT that can be verified with the private key', () => {
        const { token } = issueJWT(user);
        pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
        const decoded = jsonwebtoken.verify(token.split(' ')[1], fs.readFileSync(pathToKey));
        expect(decoded.sub).toBe(user.UserID);
        expect(typeof decoded.iat).toBe('number');
    });
});