import { cookies } from 'next/headers';

export async function login(email, password) {
  if (email === 'admin@test.com' && password === '123456') {
    const cookieStore = await cookies();
    cookieStore.set('auth', 'true');
    return true;
  }
  return false;
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get('auth');
}
