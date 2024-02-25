import { useState, useEffect, useRef } from 'react';

const useHoverMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleMouseLeave = (event: React.MouseEvent) => {
    setTimeout(() => {
      if (
        !listRef.current?.contains(event.relatedTarget as Node) &&
        !buttonRef.current?.contains(event.relatedTarget as Node)
      ) {
        closeMenu();
      }
    }, 300);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
        listRef.current && !listRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return {
    menuOpen,
    buttonRef,
    listRef,
    openMenu,
    handleMouseLeave,
  };
};

export default useHoverMenu;
