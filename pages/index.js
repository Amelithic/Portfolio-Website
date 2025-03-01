//TODO: REMOVE UNDERSCORE FROM BLINKING TEXT AND IMPROVE TIMING: DOESNT START QUICK ENOUGH
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import profilePic from '../public/images/portrait.jpg'

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks.js';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import { useEffect, useState } from 'react';

const Index = ({ posts, globalData, initialCareerIndex, initialCareerTitle, initialCareerPrefix, careers }) => {
  const [careerIndex, setCareerIndex] = useState(initialCareerIndex);
  const [careerPrefix, setCareerPrefix] = useState(initialCareerPrefix);
  const [careerTitle, setCareerTitle] = useState(initialCareerTitle);

  useEffect(() => {
    let careerTitleElement = document.getElementsByClassName("careerTitle")[0];
    let careerPrefixElement = document.getElementById("careerPrefix");

    if (!careerTitleElement || !careerPrefixElement) return; //Prevents 'undefined'

    function typeWriter(txt, speed) {
      if (!txt) return; //Prevents 'undefined'
      
      let i = 0;
      careerTitleElement.innerHTML = ''; // Clear previous text

      function typing() {
        if (i < txt.length) {
          careerTitleElement.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else {
          blinkCursor(); // Start blinking cursor after typing completes
        }
      } //end typing()

      function blinkCursor() {
        let visible = true; // Tracks the visibility of the underscore
  
        setTimeout(() => {
          if (visible) {
            careerTitleElement.innerHTML += "_"; //Shows the underscore
          } else {
            if (careerTitleElement.innerHTML.indexOf('_') > -1) {
              console.log('true');
              careerTitleElement.innerHTML = careerTitleElement.innerHTML.replace('_', ''); // Remove last character
            }
          }
          visible = !visible;
        }, 800); // Blinking speed (800ms)
      } //end blinkCursor()

      typing();
    } //end typeWriter

    function updateCareerTitle() {
      let nextIndex;
      if (careerIndex == (careers.length - 1)) {
        nextIndex = 0; // Cycle through array
      } else {
        nextIndex = (careerIndex + 1); // Cycle through array
      }

      let nextTitle = careers[nextIndex];
      let nextPrefix;
      if ((nextTitle.startsWith('A')) || (nextTitle.startsWith('E')) || (nextTitle.startsWith('I')) || (nextTitle.startsWith('O'))) {
        nextPrefix = 'an';
      } else {
        nextPrefix = 'a';
      }

      setCareerIndex(nextIndex);
      setCareerTitle(nextTitle);
      setCareerPrefix(nextPrefix);

      careerPrefixElement.innerHTML = `I'm ${nextPrefix}...`;

      typeWriter(nextTitle, 50);
    } //end updateCareerTitle

    const interval = setInterval(updateCareerTitle, 6000);
    return () => clearInterval(interval);
  }, [careerIndex, careers]); // Depend on `careerIndex` to update state properly
  //end useEffect

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle}/>
      <Header name={globalData.name} />
      <main className={styles.indexContainer}>
        <section id={styles.hero} className={styles.indexItems}>
          <div id={styles.heroLeft}>
            <p>Hi! I am</p>
            <h1 id={styles.myName}>Amelie McCarthy</h1>
            <p id="careerPrefix">I&apos;m a...</p>
            <div id={styles.careerTitleContainer}>
              <h2 id={styles.careerTitle} className="careerTitle"></h2>
            </div>
          </div>
          <div id={styles.heroRight}>
            <div className={styles.profileImg}>
              <Image src={profilePic} alt="Photo of Me"/>
            </div>
            <SocialLinks />
          </div>
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
      <div style={{ height: '500px' }} />
      <Footer copyrightText={globalData.footerText} />

    </Layout>
  );
}



function setCareerTitles(index) {
  let careerPrefix = 'a';
  let careerTitle = careers[index];

  if ((careerTitle.startsWith('A')) || (careerTitle.startsWith('E')) || (careerTitle.startsWith('I')) || (careerTitle.startsWith('O'))) {
    careerPrefix = 'an';
  }
  console.log([careerPrefix,careerTitle]);
  return [careerPrefix,careerTitle];
}

export function getStaticProps() {
  const posts = getPosts(); //mdx-utils.js
  const globalData = getGlobalData(); //global-data.js

  const careers = ['Web designer', 'Graphic designer', 'Artist', 'Web developer', 'Software Engineer', 'Student', 'Human'];
  const initialCareerIndex = 0; // Start from the first career
  const initialCareerTitle = careers[initialCareerIndex];
  let initialCareerPrefix;
  if ((initialCareerTitle.startsWith('A')) || (initialCareerTitle.startsWith('E')) || (initialCareerTitle.startsWith('I')) || (initialCareerTitle.startsWith('O'))) {
    initialCareerPrefix = 'an';
  } else {
    initialCareerPrefix = 'a';
  }
  console.log([initialCareerPrefix,initialCareerTitle]);

  return {
    props: {
      posts,
      globalData,
      initialCareerIndex,
      initialCareerPrefix,
      initialCareerTitle,
      careers
    },
  };
}

export default Index;