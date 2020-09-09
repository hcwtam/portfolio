import React, { ReactElement } from 'react';

import styles from './Projects.module.css';
import reactgram from '../../assets/reactgram.jpg';
import fruity from '../../assets/fruity.jpg';
import other from './other.json';
import Card from './Card/Card';
import { Link } from 'react-router-dom';

interface Props {}

export default function Projects(): ReactElement {
  const cards = other.map(
    ({ title, description, technologies, github, link }) => (
      <Card
        title={title}
        description={description}
        technologies={technologies}
        github={github}
        link={link}
        key={title}
      />
    )
  );

  return (
    <section className={styles.Projects} id="projects">
      <h3>My Projects</h3>
      <div className={styles.Project} id="reactgram">
        <div className={styles.ImageContainer}>
          <Link to="/reactgram">
            <img src={reactgram} alt="project 1" />
          </Link>
        </div>
        <div className={styles.Description}>
          <h4>
            <Link to="/reactgram">Reactgram</Link>
          </h4>
          <p>
            A clone of instagram built with React. You may share photos, add
            captions, follow friends, post comments and more.
          </p>
          <ul>
            <li>React</li>
            <li>Context</li>
            <li>SWR</li>
            <li>Typescript</li>
            <li>Firebase</li>
          </ul>
          <Link to="/reactgram">
            <h5>Learn More</h5>
          </Link>
        </div>
      </div>
      <div className={styles.Project} id="fruity">
        <div className={styles.Description}>
          <h4>
            <Link to="/fruity">Fruity</Link>
          </h4>
          <p>
            An e-commerce application for online grocery shopping. Includes an
            easy-to-use checkout, detail page for your favourite products, and
            own purchase history for your reference.
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Typescript</li>
            <li>Firebase</li>
          </ul>
          <Link to="/fruity">
            <h5>Learn More</h5>
          </Link>
        </div>
        <div className={styles.ImageContainer}>
          <Link to="fruity">
            <img src={fruity} alt="project 2" />
          </Link>
        </div>
      </div>
      <h4 className={styles.Other}>Other noteworthy projects:</h4>
      <div className={styles.Others}>{cards}</div>
    </section>
  );
}
