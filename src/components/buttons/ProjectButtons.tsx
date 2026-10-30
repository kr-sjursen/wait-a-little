'use client';

import { LuPlay } from 'react-icons/lu';
import { LuSquare } from 'react-icons/lu';
import { LuTimerReset } from 'react-icons/lu';

interface ButtonProps {
  Text: string;
  Icon?: string;
  ClassName?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

// TODO: Add hover and active state styles.
export default function ProjectButtons({
  Text,
  Icon,
  onClick,
  ClassName,
  type = 'button'

}: ButtonProps) {
  let IconComp;
  if (Icon === 'play') IconComp = LuPlay;
  if (Icon === 'stop') IconComp = LuSquare;
  if (Icon === 'reset') IconComp = LuTimerReset;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        btn flex flex-row p-2 gap-2 border rounded-md border-gray-200
        ${ClassName}
      `}
    >
      <span>{Text}</span>
      {IconComp &&
        <span aria-hidden='true'>
          <IconComp className='h-full' />
        </span>
      }
    </button>
  );
}
