import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          FTC Team 23786 MakEMinds
        </Heading>
        <p className="hero__subtitle">Engineering Portfolio 2023-2024</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/team-info">
            View Our Engineering Portfolio 🤖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="FTC Team 23786 MakEMinds"
      description="Engineering Portfolio for FTC Team 23786 MakEMinds - CENTERSTAGE 2023-2024">
      <HomepageHeader />
      <main>
        <div className={styles.mainContent}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>About Our Team</h2>
                <p>
                  We are FTC Team 23786 MakEMinds, a robotics team dedicated to innovation,
                  learning, and community engagement. Our team combines creativity with
                  technical expertise to compete in the FIRST Tech Challenge.
                </p>
              </div>
              <div className="col col--6">
                <h2>CENTERSTAGE 2023-2024</h2>
                <p>
                  This season, we're tackling the exciting CENTERSTAGE challenge,
                  developing innovative solutions for pixel placement and autonomous
                  navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
