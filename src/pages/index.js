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
        <p className="hero__subtitle">Engineering Portfolio 2024-2025</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
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
      description="Engineering Portfolio for FTC Team 23786 MakEMinds - CRESCENDO 2024-2025">
      <HomepageHeader />
      <main>
        <div className={styles.mainContent}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>Upper Central League, Edison Township, NJ</h2>
                <p className="hero__subtitle">
                  "Have fun, raise STEM awareness, and build a robot to do impossible things!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
