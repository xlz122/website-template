import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function Home(): React.ReactElement {
  return (
    <div className={styles.page}>
      <p>Home Page</p>
      <Link href="/about">Jump To About Page</Link>
    </div>
  );
}

export default Home;
