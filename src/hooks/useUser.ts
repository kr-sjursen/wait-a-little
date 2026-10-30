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
    saveUser({ ...getUserSnapshot(), goals: [...getUserSnapshot().goals, goal] });
  }

  function updateGoal(id: string, text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const current = getUserSnapshot();
    saveUser({
      ...current,
      goals: current.goals.map(g =>
        g.id === id ? { ...g, text: trimmed, updatedAt: new Date().toISOString() } : g
      ),
    });
    console.log('updated goal with id: ' + id);
  }

  function deleteGoal(id: string) {
    const current = getUserSnapshot();
    saveUser({
      ...current,
      goals: current.goals.filter(g => g.id !== id)
    });
    console.log('deleted goal with id: ' + id);
  }

  return { user, addGoal, updateGoal, deleteGoal };
}
