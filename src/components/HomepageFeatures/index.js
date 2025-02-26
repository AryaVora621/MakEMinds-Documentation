import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Robot Development',
    description: (
      <>
        Our robot design process focuses on reliability, efficiency, and innovation.
      </>
    ),
  },
  {
    title: 'Programming',
    description: (
      <>
        Advanced autonomous routines and precise TeleOp controls using modern techniques.
      </>
    ),
  },
  {
    title: 'Community Impact',
    description: (
      <>
        Engaging with our community through outreach and STEM education initiatives.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
