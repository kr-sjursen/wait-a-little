'use client';

import { useSyncExternalStore } from 'react';
import type { Goal } from '@/types/user';
import {
  getUserSnapshot,
  getServerUserSnapshot,
  subscribeToUser,
  saveUser,
} from '@/lib/storage';

export function useUser() {
  const user = useSyncExternalStore(
    subscribeToUser,
    getUserSnapshot,
    getServerUserSnapshot,
  );

  function addGoal(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const goal: Goal = {
      id: crypto.randomUUID(),
      text: trimmed,
      createdAt: new Date().toISOString(),
    };
    saveUser({ ...getUserSnapshot(), goals: [...user.goals, goal] });
  }

  return { user, addGoal };
}