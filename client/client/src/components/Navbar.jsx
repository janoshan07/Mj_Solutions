import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, MonitorSmartphone, X } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-shell flex h-[74px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-brand-navy">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue text-white shadow-glow">
            <MonitorSmartphone size={22} />
          </span>
          MJ Solution
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
