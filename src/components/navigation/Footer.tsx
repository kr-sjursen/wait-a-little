export function Footer() {
  // TODO: Update these links to the correct pages!
  const footerLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/wait-a-little'
    },
    {
      name: 'Feedback',
      href: 'https://github.com/wait-a-little/feedback'
    },
    {
      name: 'Issues',
      href: 'https://github.com/wait-a-little/issues'
    },
  ];

  // TODO: Set up legal pages!
  const legalLinks = [
    {
      name: 'Terms of Service',
      href: '/terms-of-service'
    },
    {
      name: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      name: 'Cookie Policy',
      href: '/cookie-policy'
    }
  ];

  return (
    <footer className='
      p-8 pb-4 w-full border-t border-gray-200 text-end flex flex-row
      items-end
    '>
      <div className='
        flex flex-row items-center gap-16 order-last
      '>
        <ul className='flex flex-col gap-4'>
          {footerLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-4'>
          {legalLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className='text-start mt-4 grow text-sm text-gray-500'>
        Version: 0.1.0
      </p>
    </footer>
  );
}
