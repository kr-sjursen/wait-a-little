export interface Goal {
  id: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
}

export interface UserData {
  version: 1;
  goals: Goal[];
  // later: occurrences, waits, settings...
}
