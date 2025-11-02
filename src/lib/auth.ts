import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'tempacc.akash@gmail.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$12$F1imBncHnVihTH4mpwAdju/2wbHidQKQKEUpK0pAWIREZjsxvwcw.'; // 'Akrsh@gmail.com'

export interface User {
  email: string;
  username: string;
  role: 'admin';
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error('bcrypt.compare error:', error);
    return false;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export function generateToken(user: User): string {
  return jwt.sign(
    { email: user.email, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

export function verifyToken(token: string): User | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return {
      email: decoded.email,
      username: decoded.username || decoded.email.split('@')[0],
      role: decoded.role
    };
  } catch (error) {
    return null;
  }
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  if (email !== ADMIN_EMAIL) {
    return null;
  }

  const isValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);
  if (!isValid) {
    return null;
  }

  return {
    email,
    username: email.split('@')[0],
    role: 'admin'
  };
}

export function getTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}