import Link from 'next/link';

export function SkipLink() {
  return (
    <Link
      href='#main'
      className='
        absolute left-0 top-0 bg-jobloop-primary-green py-2 px-4 z-50
        transform -translate-y-full focus:translate-y-0 transition
        focus:bg-black focus:text-white
      '
    >
      Skip to main content
    </Link>
  );
}