import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Powers NodeBots',
    description: 'Nodebots uses SerialPort as the bridge between your javascript and the firmware on thousands of devices from Arduinos to drones.',
    imageUrl: 'img/nodebots-logo.svg',
    imageLink: 'http://nodebots.io',
  },
  {
    title: 'Consumer Devices',
    description: 'SerialPort is used in consumer devices ranging from IOT Devices, to pancake printing robots to homebrew games. When used with Electron you have fast and easy path from prototype to production.',
    imageUrl: 'img/pancake-bot-300px.jpg',
    imageLink: 'http://www.pancakebot.com/',
  },
  {
    title: 'Commercial Applications',
    description: 'Used in underwater sensors, drones, ATMs, fork lift diagnostics, and medical devices. SerialPort has found its way into many industries. With an Open Source MIT license and the ability to submit fixes back to the project, SerialPort is an obvious choice for your next project.',
    imageUrl: 'img/open-rov-300px.jpg',
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <asciinema-player src="/demo-short.cast" theme="solarized-dark" autoplay="true" preload="true"></asciinema-player>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
