export function NavBar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];

  return (
    <nav>
      <ul className='
        flex space-x-4 p-4 w-full border-b border-gray-200
      '>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}