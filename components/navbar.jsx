import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
import { MENU_ITEMS, THEME } from "../constants/navigation";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    initializeTheme();
  }, []);

  useEffect(() => {
    handleRouteChange();
  }, [router.pathname]);

  const initializeTheme = () => {
    const theme = localStorage.getItem("theme") || THEME.LIGHT;
    setIsDark(theme === THEME.DARK);
    document.documentElement.classList.toggle(THEME.DARK, theme === THEME.DARK);
  };

  const handleRouteChange = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = !isDark ? THEME.DARK : THEME.LIGHT;
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(THEME.DARK);
  };

  const isActive = (path) => router.pathname === path;

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          <Logo />
          <DesktopMenu 
            menuItems={MENU_ITEMS} 
            isActive={isActive} 
            isDark={isDark}
            toggleTheme={toggleTheme}
          />
          <MobileMenu 
            menuItems={MENU_ITEMS}
            isActive={isActive}
            isDark={isDark}
            toggleTheme={toggleTheme}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </nav>
  );
}

const Logo = () => (
  <Link href="/">
    <a className="flex-shrink-0 flex items-center">
      <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Cornelius S Alfredo
      </span>
    </a>
  </Link>
);

const DesktopMenu = ({ menuItems, isActive, isDark, toggleTheme }) => (
  <div className="hidden md:flex md:items-center md:space-x-6">
    {menuItems.map((item) => (
      <Link key={item.path} href={item.path}>
        <a
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${
              isActive(item.path)
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }`}
        >
          {item.label}
        </a>
      </Link>
    ))}
    <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
  </div>
);

const MobileMenu = ({ 
  menuItems, 
  isActive, 
  isDark, 
  toggleTheme, 
  isMenuOpen, 
  setIsMenuOpen 
}) => (
  <>
    <div className="flex md:hidden items-center space-x-2">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <HiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <HiOutlineMenu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    </div>

    <div
      className={`
        absolute top-full left-0 right-0 
        bg-white dark:bg-gray-900 
        border-b dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
        md:hidden
      `}
    >
      <div className="px-4 py-3 space-y-1">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a
              className={`
                block px-3 py-2 rounded-md text-base font-medium transition-colors
                ${
                  isActive(item.path)
                    ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default Navbar;
