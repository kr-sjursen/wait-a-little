import type { UserData } from '@/types/user';

const KEY = 'wait-a-little:user';
export const EMPTY_USER: UserData = { version: 1, goals: [] };

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedUser: UserData = EMPTY_USER;

// Must return the same object until the stored data changes
export function getUserSnapshot(): UserData {
  const raw = localStorage.getItem(KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedUser = raw ? { ...EMPTY_USER, ...JSON.parse(raw) } : EMPTY_USER;
    } catch {
      cachedUser = EMPTY_USER;
    }
  }
  return cachedUser;
}

export function getServerUserSnapshot(): UserData {
  return EMPTY_USER;
}

export function subscribeToUser(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) callback();
  };
  window.addEventListener('storage', onStorage); // changes from other tabs
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
}

export function saveUser(user: UserData) {
  localStorage.setItem(KEY, JSON.stringify(user));
  listeners.forEach((l) => l());
}
