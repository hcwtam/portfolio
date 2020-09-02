import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';

import styles from './Navbar.module.css';
import cv from '../../assets/Wesley_Tam_CV.pdf';

const INITIAL_POSITION = window.scrollY;

export default function Navbar(): ReactElement {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [show, setShow] = useState(true);

  let prevPosition = position;

  console.log(position);

  const checkScrollDirection = useCallback(() => {
    const currentPosition = window.scrollY;
    if (show && currentPosition > prevPosition) setShow((prev) => false);
    if (!show && currentPosition < prevPosition) setShow((prev) => true);
    prevPosition = currentPosition;
    setPosition(currentPosition);
  }, [show, position]);

  useEffect(() => {
    return window.addEventListener('scroll', checkScrollDirection);
  }, [checkScrollDirection]);

  return (
    <nav className={`${styles.Navbar} ${!show && styles.Hide}`}>
      <div className={styles.Logo}>
        <Link to="landing" spy={true} smooth={true} offset={-30} duration={500}>
          WT
        </Link>
      </div>
      <ul className={styles.Links}>
        <li>
          <Link to="aboutme" spy={true} smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.Icons}>
        <a
          href="https://www.linkedin.com/in/wesleyhctam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://github.com/hcwtam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <button className={styles.Resume}>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
}
