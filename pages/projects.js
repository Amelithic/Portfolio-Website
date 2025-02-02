import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Projects({ globalData }) {
    return(
        <Layout>
            <SEO title={globalData.name} description={globalData.blogTitle} />
            <Header name={globalData.name} />
            <main className="w-full">
                <p>Projects here</p>
            </main>

            <Footer copyrightText={globalData.footerText} />

            <GradientBackground
            variant="large"
            className="fixed top-20 opacity-40 dark:opacity-60"
            />
            <GradientBackground
            variant="small"
            className="absolute bottom-0 opacity-20 dark:opacity-10"
            />
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }