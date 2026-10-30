'use client';

import { LuTimerReset } from 'react-icons/lu';
import { LuSquare } from 'react-icons/lu';
import { LuPlay } from 'react-icons/lu';
import { LuPencil } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';
import { LuSave } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';

interface ButtonProps {
  Text: string;
  Icon?: string;
  ClassName?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  AriaLabel?: string;
}

// TODO: Add default hover and active state styles.
// TODO: Add focus styles.
// TODO: Add disabled state styles.
export default function ProjectButtons({
  Text,
  Icon,
  onClick,
  ClassName,
  type = 'button',
  AriaLabel

}: ButtonProps) {
  let IconComp;
  let styleAdditions = '';

  if (Icon === 'add') {IconComp = LuPlus};
  if (Icon === 'play') IconComp = LuPlay;
  if (Icon === 'stop') IconComp = LuSquare;
  if (Icon === 'reset') IconComp = LuTimerReset;
  if (Icon === 'edit') IconComp = LuPencil;
  if (Icon === 'delete') {
    IconComp = LuTrash2;
    styleAdditions = 'hover:bg-red-400 hover:border-red-200 hover:text-black'
  };
  if (Icon === 'save') IconComp = LuSave;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        btn flex flex-row p-2 gap-2 border rounded-md border-gray-200
        ${styleAdditions}
        ${ClassName}
      `}
      aria-label={AriaLabel}
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
