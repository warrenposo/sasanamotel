
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-sasana-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-sasana-800">Sasana</span>
          <span className="font-serif text-lg ml-1 text-sage-700">Guest House</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
          <NavLink to="/amenities">Amenities</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-sasana-600 hover:bg-sasana-700">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-sasana-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/rooms" onClick={toggleMenu}>Rooms</MobileNavLink>
            <MobileNavLink to="/amenities" onClick={toggleMenu}>Amenities</MobileNavLink>
            <MobileNavLink to="/reviews" onClick={toggleMenu}>Reviews</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button asChild className="bg-sasana-600 hover:bg-sasana-700 w-full">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="text-sasana-900 hover:text-sasana-600 font-medium transition-colors"
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="text-sasana-900 hover:text-sasana-600 font-medium py-2 block transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
