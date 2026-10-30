'use client';

import { useState } from 'react';
import ProjectButtons from '../buttons/ProjectButtons';
import { GoalButtons } from './GoalButtons';
import { useUser } from '@/hooks/useUser';
import { clsx } from 'clsx';

// TODO: deleting a goal removes its data. Once occurrences are linked to goals, consider the archivedAt idea from earlier instead of a hard delete.
// TODO: add an aria-live region announcing "Goal updated" and "Goal deleted". Ideally move focus back to the Edit button after saving, since the focused input disappears.
// TODO: Add an undo toast.
export function Goals() {
  const { user, addGoal, updateGoal, deleteGoal } = useUser();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    addGoal(text);
    setText('');
  }

  function startEdit(id: string, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEdit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (editingId) updateGoal(editingId, editText);
    setEditingId(null);
  }

  return (
    <section className='w-full min-w-1/3 p-2 border rounded-md border-gray-200'>
      <h2 className='text-lg'>Goals</h2>
      <p>Set your goals here.</p>
      <form
        onSubmit={handleSubmit}
        className='w-full flex gap-2 mb-2 border rounded-md border-gray-200'
      >
        <label
          htmlFor='newGoal'
          className='self-center pl-2'
        >
          Goal:
        </label>
        <input
          id='newGoal'
          type='text'
          value={text}
          autoComplete='off'
          onChange={e => setText(e.target.value)}
          placeholder='New goal'
          className='w-full grow'
        />
        <ProjectButtons
          Text='Add'
          Icon='add'
          type='submit'
          ClassName='px-4 w-fit'
        />
      </form>
      <ul className={clsx(
        'flex flex-col p-4 pl-6 list-disc text-left break-all hyphens-auto',
        'border rounded-md border-gray-200 gap-4'
      )}>
        {user?.goals.map((g) => 
          <li
            className='flex w-full border-b border-gray-200'
            key={g.id}
          >
            {editingId === g.id ? (
              <form
                onSubmit={saveEdit}
                className='flex w-full gap-2'
              >
                <label
                  htmlFor={`edit-${g.id}`}
                  className='sr-only'
                >
                  Edit goal
                </label>
                <input
                  id={`edit-${g.id}`}
                  autoFocus
                  autoComplete='off'
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  onKeyDown={e => e.key === 'Escape' && setEditingId(null)}
                  className='grow'
                />
                <ProjectButtons
                  Text='Save'
                  Icon='save'
                  type='submit'
                />
                <ProjectButtons
                  Text='Cancel'
                  type='button'
                  onClick={() => setEditingId(null)}
                />
              </form>
            ) : (
              <>
                <span className='grow self-center'>{g.text}&nbsp;</span>
                <GoalButtons
                  goalText={g.text}
                  onEdit={() => startEdit(g.id, g.text)}
                  onDelete={() => deleteGoal(g.id)}
                />
              </>
            )}
          </li>
        )}
      </ul>
    </section>
  );
}
