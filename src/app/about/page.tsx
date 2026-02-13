import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

async function About(props: PageProps<'/about'>): Promise<React.ReactElement> {
  const params = await props.params;
  const searchParams = await props.searchParams;

  // 获取路由参数, 例如 /about/123, 可以通过 params.id 获取
  // 获取搜索参数, 例如 /about?id=123, 可以通过 searchParams.id 获取
  console.log('Params:', params);
  console.log('Search Params:', searchParams);

  return (
    <div className={styles.page}>
      <p>About Page</p>
      <Link href="/">Jump To Home Page</Link>
    </div>
  );
}

export default About;
