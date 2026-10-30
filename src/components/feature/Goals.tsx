'use client';

import { useState } from 'react';
import ProjectButtons from '../buttons/ProjectButtons';
import { useUser } from '@/hooks/useUser';

export function Goals() {
  const { user, addGoal } = useUser();
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addGoal(text);
    setText('');
  }

  return (
    <section className='w-full max-w-1/3 p-2 border rounded-md border-gray-200'>
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
          type='submit'
          ClassName='px-4 w-fit'
        />
      </form>
      <ul className='flex flex-col p-4 pl-6 list-disc text-left break-all hyphens-auto border rounded-md border-gray-200 gap-1'>
        <li>Example goal</li>
        <li>Another loooooooooooooooooooooooooooooooooooong goal</li>
        <li>A way too fucking long goal. Like goddamn hell shit this is way too long but some users would still appreciate it because i don`t know what weird shit users will use this shit for. Is it long enough yet?</li>
        {user?.goals.map((g) => <li key={g.id}>{g.text}</li>)}
      </ul>
    </section>
  );
}
