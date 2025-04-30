import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ 
  menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' }
  ],
  onMenuItemClick = (item) => console.log('Clicked:', item)
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onMenuItemClick(item);
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-primary dark:text-white" />
      </button>
      
      {isOpen && (
        <div className="absolute -right-40 mt-2 w-48 glassmorphic-dark dark:glassmorphic rounded-md shadow-lg z-10 border border-gray-200">
          <div className="py-1 ">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-left block px-4 py-2 text-sm text-black dark:text-white hover:bg-primary hover:text-white dark:hover:text-white"
                onClick={(e) => {
                  if (!item.href || item.href === '#') {
                    e.preventDefault();
                  }
                  handleItemClick(item);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;