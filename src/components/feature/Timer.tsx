'use client';

import ProjectButtons from '../buttons/ProjectButtons';
import { useState, useEffect } from 'react';

export function Timer() {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleReset = () => setTime(300);
  const handleStop = () => setRunning(false);
  const handleStart = () => {
    if (!running) setTime(300);
    setRunning(true);
  };

  // TODO: Handle timer end.
  // TODO: Give option to change timer length.
  // TODO: Fix timer changing size when numbers change.
  // TODO: Add something for when timer ends.
  return (
    <section className='flex flex-col w-fit h-fit mb-4 gap-2 items-center'>
      <h2 className='text-lg'>Timer</h2>
      <output
        id='timer-display'
        aria-live='polite'
        aria-atomic='true'
        className='w-fit h-fit min-w-42 aspect-square p-4 m-4 flex flex-col justify-center content-center text-center border border-gray-200 rounded-full outline-2 outline-offset-4'
      >
        <time dateTime={`PT${minutes}M${seconds}S`}>
          <span className='time-block'>{minutes}</span>m
          <span className='time-block'>{seconds}</span>s
        </time>
      </output>

      <div
        id='timer-controls'
        className='flex gap-2'
        role='group'
        aria-label='Timer controls'
      >
        <ProjectButtons Text='Start' Icon='play' onClick={handleStart} />
        <ProjectButtons Text='Stop' Icon='stop' onClick={handleStop} />
        <ProjectButtons Text='Reset' Icon='reset' onClick={handleReset} />
      </div>
    </section>
  );
}
