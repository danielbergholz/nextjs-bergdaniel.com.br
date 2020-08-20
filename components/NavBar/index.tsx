import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

import { useTheme } from '../../context/theme';
import { Background, Container, MenuIcon, MenuBar } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { changeTheme, theme, lock } = useTheme();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
        lock(false);
      } else {
        setOpen(!open);
        lock(true);
      }
    },
    [open, lock]
  );

  const handleNewTab = useCallback(
    (n: number): void => {
      setOpen(false);
      setTab(n);
      lock(false);
    },
    [lock]
  );

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link href="/">
          <a onClick={(): void => handleOpen(true)}>
            <p>
              <strong>Daniel</strong> Bergholz
            </p>
          </a>
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          {theme === 'dark' ? (
            <FaSun size={28} color="#F1FA8C" onClick={changeTheme} />
          ) : (
            <FaMoon size={22} color="#F1FA8C" onClick={changeTheme} />
          )}
          <li>
            <Link href="/cursos">
              <a onClick={(): void => handleNewTab(2)}>cursos</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a onClick={(): void => handleNewTab(3)}>portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a onClick={(): void => handleNewTab(4)}>contato</a>
            </Link>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
