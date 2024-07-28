import { jwtVerify } from 'jose';

export async function verifyJWT(token: string, secret: string) {
    try {
        return await jwtVerify(token, new TextEncoder().encode(secret));
    } catch (error) {
        throw new Error('JWT verification failed');
    }
}
