import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';

import styles from './Landing.module.css';

interface Props {}

const Reveal = require('react-reveal/Reveal');

export default function Landing(): ReactElement {
  return (
    <section className={styles.Landing} id="landing">
      <Reveal bottom>
        <h6>Hello! My name is</h6>
        <h1>Wesley Tam.</h1>
        <h2>
          I'm a <strong>Front End Developer.</strong>
        </h2>
        <div className={styles.Arrow}>
          <Link to="aboutme" spy={true} smooth={true} duration={500}>
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
