//TODO: REMOVE UNDERSCORE FROM BLINKING TEXT AND IMPROVE TIMING: DOESNT START QUICK ENOUGH
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import profilePic from '../public/images/random-image.jpeg'

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks.js';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import { useEffect, useState } from 'react';

const techImg = ['/public/images/tech-1.png','/../public/images/tech-2.png','/../public/images/tech-3.png'];


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
      <SEO title={globalData.name} description={globalData.blogTitle} />
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
            </div>
            <SocialLinks />
          </div>
        </section>

        <section id={styles.about} className={styles.indexItems}>
          <h1 className={styles.sectionTitle}>About me...</h1>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutItem}>
              <Image />
            </div>
            <div className={styles.aboutItem}>
              <p>text about self</p>
            </div>
          </div> <br />

          <h1 className={styles.sectionTitle}>Skills</h1>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutItem}>
              <p>text</p>
            </div>
            <div className={styles.aboutItem}>
              <ul>
                <li>list items</li>
                <li>list items</li>
                <li>list items</li>
                <li>list items</li>
              </ul>
            </div>
          </div>

        </section>

        <section id={styles.projects} className={styles.indexItems}>
          <h1>Projects</h1>
          <div class={styles.projectContainer}>
            <div class={styles.projectItem}>
            <div class={styles.projectItemText}>
                <h3>Personal Portfolio Website <span>(In Progress)</span></h3>
                <p>Started in February, I&apos;ve been building my own portfolio website using the NextJS and React
                  frameworks. Similar to this website, it will show my projects and links to work I&apos;ve done!
                </p>
                <p class={styles.projectItemDate}>25/02/2025</p>
                <p class={styles.projectItemLink}><a href="https://github.com/Amelithic/Portfolio-Website">Link to
                  Github repo</a></p>
                <p class={styles.projectItemLink}><a href="https://amelithic.com/">Link to Website</a></p>
              </div>
              <div class={styles.projectItemImg}>
                <figure>
                  <Image src={techImg[0]} alt="Thumbnail image" width={100} height={100}/>
                    <figcaption>Figure 1: Website screenshot of an animated front page element</figcaption>
                </figure>
              </div>
            </div>
            <div class={styles.projectItem}>
            <div class={styles.projectItemText}>
                <h3>Discord Bot using NodeJS</h3>
                <p>Originally made in Python, this is an automated response bot that responds to a specific list
                  of commands typed in my Discord server. I converted it to NodeJS after the Python library I
                  was using was no longer supported. I also came back and made some changes in January 2025.
                  It can take parameters after certain commands and also stores a list of statistics based on
                  command usage!</p>
                <p class={styles.projectItemDate}>04/03/2023</p>
                <p class={styles.projectItemLink}><a href="#" title="Not currently available">Link to Github repo</a>
                </p>
              </div>
              <div class={styles.projectItemImg}>
                <figure>
                  <Image src={techImg[1]} alt="Thumbnail image" width={100} height={100}/>
                    <figcaption>Figure 2: Example of bot response</figcaption>
                </figure>
              </div>
            </div>
            <div class={styles.projectItem}>
            <div class={styles.projectItemText}>
                <h3>Python Turtle Graphics Generation</h3>
                <p>In this project, I generated a collection of graphics using mathematical formulas and the
                  built-in Python library called &apos;turtle&apos;.</p>
                <p>This was one of the first projects I made when I began Python programming in 2019/2020.</p>
                <p class={styles.projectItemDate}>25/05/2020</p>
                <p class={styles.projectItemLink}><a href="https://github.com/Amelithic/-ARCHIVE-Python-Projects">Link
                  to Github repo</a></p>
              </div>
              <div class={styles.projectItemImg}>
                <figure>
                  <Image src={techImg[2]} alt="Thumbnail image" width={100} height={100}/>
                    <figcaption>Figure 3: Python Turtle Graphics</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.indexItems}>
          <p>section 2: skills</p>
          <p>section 4: blog</p>
          <Link href='../PDFs/Technical Portfolio Brochure.pdf' title='Technical Portfolio Brochure' target="_blank" locale={false}>Link to my tech-related portfolio</Link>
          <Link href='../PDFs/album-covers.jpg' title='Album Covers Image' target="_blank" locale={false}>Album covers I&apos;ve worked on</Link>
        </section>

        <section className={styles.indexItems}>
          <p>section 5: testimonials, contacts, etc</p>
        </section>

      </main>
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
  console.log([careerPrefix, careerTitle]);
  return [careerPrefix, careerTitle];
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
  console.log([initialCareerPrefix, initialCareerTitle]);

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