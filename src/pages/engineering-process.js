import React from 'react';
import Layout from '@theme/Layout';
import styles from './engineering-process.module.css';

export default function EngineeringProcess() {
  return (
    <Layout
      title="Engineering Process"
      description="FTC Team 23786 MakEMinds Engineering Process">
      <div className={styles.container}>
        <h1>Our Engineering Process</h1>
        
        <section className={styles.section}>
          <h2>Robot Design Evolution</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Initial Design Phase</h3>
              <p>Our team began with brainstorming sessions and CAD designs focusing on:</p>
              <ul>
                <li>Efficient pixel intake mechanism</li>
                <li>Stable drive train design</li>
                <li>Strategic scoring mechanisms</li>
              </ul>
            </div>
            
            <div className={styles.timelineItem}>
              <h3>Prototyping</h3>
              <p>Key developments include:</p>
              <ul>
                <li>Testing various intake designs</li>
                <li>Developing autonomous navigation</li>
                <li>Optimizing scoring efficiency</li>
              </ul>
            </div>
            
            <div className={styles.timelineItem}>
              <h3>Competition Refinements</h3>
              <p>Based on competition experience, we:</p>
              <ul>
                <li>Enhanced reliability</li>
                <li>Improved autonomous accuracy</li>
                <li>Optimized driver controls</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Technical Specifications</h2>
          <div className={styles.specs}>
            <div className={styles.specItem}>
              <h3>Drive Train</h3>
              <p>Details about your drive train...</p>
            </div>
            <div className={styles.specItem}>
              <h3>Intake System</h3>
              <p>Details about your intake system...</p>
            </div>
            <div className={styles.specItem}>
              <h3>Scoring Mechanism</h3>
              <p>Details about your scoring mechanism...</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 