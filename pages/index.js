//TODO: Set home page and separate blog page
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import styles from '../styles/index.module.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle}/>
      <Header name={globalData.name} />
      <main className={styles.indexContainer}>
        <section id={styles.hero} className={styles.indexItems}>
          <p>section 1: intro</p>
        </section>

        <section className={styles.indexItems}>
          <p>section 2: skills</p>
        </section>

        <section className={styles.indexItems}>
          <p>section 3: projects</p>
        </section>

        <section className={styles.indexItems}>
          <p>section 4: blog</p>
        </section>

        <section className={styles.indexItems}>
          <p>section 5: testimonials, contacts, etc</p>
        </section>

      </main>
      <div style={{ height: '500px' }}></div>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts(); //mdx-utils.js
  const globalData = getGlobalData(); //global-data.js

  return { props: { posts, globalData } }; //dictionary of arrays?
}
