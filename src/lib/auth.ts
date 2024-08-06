import { JWTPayload, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secret = process.env.JWT_SECRET

interface ExtendedJWTPayload extends JWTPayload {
    userId: string;
    email: string;
    userType: 'User' | 'Employer';
}

export async function verifyJWT(token: string): Promise<ExtendedJWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
        return payload as ExtendedJWTPayload;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
}

export async function getUserFromRequest(expectedUserType: 'User' | 'Employer' | 'All') {
    const cookieStore = cookies();
    const data = cookieStore.get('token');

    if (!data?.value) {
        throw new Error('Authentication token not found');
    }

    const decoded: any = await verifyJWT(data?.value);

    if (!decoded) {
        throw new Error('Invalid or expired token');
    }

    if (expectedUserType !== 'All' && decoded.userType !== expectedUserType) {
        throw new Error('User type mismatch');
    }

    return decoded;
}
