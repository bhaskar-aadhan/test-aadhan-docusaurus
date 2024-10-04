import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <span>
            {/* <img src='../../static/img/aadhan.svg' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="149" height="38" viewBox="0 0 149 38" stroke="black" strokeWidth="1.3" fill="black">
              <path
                d="M13.028 12.7947H12.6183L17.7806 0L32.6121 37.3998H35.644V37.7279H21.6319V37.3998H25.2374L14.421 10.0061L13.028 12.7947Z"
                fill="url(#paint0_linear_1837_6578)" />
              <path
                d="M5.89982 26.4914C3.52351 35.1032 1.31107 36.1421 0 37.0716C0 37.0716 1.72078 37.9465 3.93322 37.6457C6.14565 37.345 10.8491 35.3329 11.9635 29.6901C13.0779 24.0473 15.5417 21.9805 16.6342 21.6524C13.7116 20.6682 7.27348 21.5133 5.89982 26.4914Z"
                fill="url(#paint1_linear_1837_6578)" />
              <path
                d="M46.7248 16.5274C49.3232 16.5274 51.2511 17.1943 52.5084 18.5279C53.7937 19.8338 54.4363 21.8343 54.4363 24.5294V37.3242H51.1254V33.865C50.5945 35.0597 49.7842 35.9905 48.6946 36.6574C47.6049 37.2964 46.3476 37.6159 44.9227 37.6159C43.6095 37.6159 42.3941 37.352 41.2765 36.8241C40.1868 36.2962 39.3207 35.5599 38.678 34.6152C38.0354 33.6705 37.7141 32.6286 37.7141 31.4894C37.7141 29.9613 38.1053 28.7804 38.8876 27.9469C39.6699 27.0856 40.9552 26.4743 42.7433 26.1131C44.5315 25.7241 47.0182 25.5296 50.2033 25.5296H51.1254V24.1543C51.1254 22.4594 50.7761 21.2369 50.0776 20.4867C49.3791 19.7088 48.2475 19.3198 46.6829 19.3198C44.3359 19.3198 42.0029 20.0422 39.6839 21.487L38.5523 19.0281C39.614 18.2779 40.8853 17.6805 42.3661 17.236C43.8749 16.7636 45.3278 16.5274 46.7248 16.5274ZM45.3837 34.9486C47.0601 34.9486 48.4292 34.3929 49.4909 33.2815C50.5805 32.1424 51.1254 30.6837 51.1254 28.9055V27.6968H50.371C47.9123 27.6968 46.0403 27.808 44.755 28.0303C43.4698 28.2247 42.5478 28.5721 41.989 29.0722C41.4581 29.5445 41.1927 30.253 41.1927 31.1977C41.1927 32.2813 41.5838 33.1843 42.3661 33.9067C43.1764 34.6013 44.1823 34.9486 45.3837 34.9486Z"
                fill="url(#paint2_linear_1837_6578)" />
              <path
                d="M78.7556 7.94202V37.3242H75.3609V33.6149C74.7462 34.893 73.8382 35.8794 72.6368 36.574C71.4633 37.2686 70.0802 37.6159 68.4877 37.6159C66.6995 37.6159 65.1209 37.1714 63.7518 36.2823C62.3827 35.3932 61.321 34.1567 60.5666 32.573C59.8122 30.9615 59.4351 29.1 59.4351 26.9883C59.4351 24.9045 59.8122 23.0707 60.5666 21.487C61.321 19.9033 62.3827 18.6807 63.7518 17.8194C65.1209 16.9581 66.6995 16.5274 68.4877 16.5274C70.0802 16.5274 71.4633 16.8748 72.6368 17.5694C73.8382 18.264 74.7462 19.2503 75.3609 20.5284V7.94202H78.7556ZM69.1582 34.8236C71.142 34.8236 72.6647 34.1567 73.7264 32.8231C74.8161 31.4616 75.3609 29.5445 75.3609 27.0717C75.3609 24.5989 74.8161 22.6956 73.7264 21.362C72.6647 20.0283 71.142 19.3615 69.1582 19.3615C67.1745 19.3615 65.6238 20.0283 64.5062 21.362C63.4165 22.6956 62.8717 24.5711 62.8717 26.9883C62.8717 29.4612 63.4165 31.3922 64.5062 32.7814C65.6238 34.1429 67.1745 34.8236 69.1582 34.8236Z"
                fill="url(#paint3_linear_1837_6578)" />
              <path
                d="M95.3115 16.5274C100.201 16.5274 102.646 19.2087 102.646 24.5711V37.3242H99.251V24.7795C99.251 22.8901 98.8738 21.5148 98.1195 20.6535C97.393 19.7921 96.2195 19.3615 94.599 19.3615C92.727 19.3615 91.2322 19.9311 90.1146 21.0702C88.997 22.2094 88.4382 23.7514 88.4382 25.6963V37.3242H85.0435V7.94202H88.4382V20.2784C89.1088 19.0558 90.0308 18.1251 91.2043 17.486C92.4057 16.847 93.7748 16.5274 95.3115 16.5274Z"
                fill="url(#paint4_linear_1837_6578)" />
              <path
                d="M117.162 16.5274C119.76 16.5274 121.688 17.1943 122.945 18.5279C124.231 19.8338 124.873 21.8343 124.873 24.5294V37.3242H121.562V33.865C121.031 35.0597 120.221 35.9905 119.132 36.6574C118.042 37.2964 116.785 37.6159 115.36 37.6159C114.046 37.6159 112.831 37.352 111.713 36.8241C110.624 36.2962 109.758 35.5599 109.115 34.6152C108.472 33.6705 108.151 32.6286 108.151 31.4894C108.151 29.9613 108.542 28.7804 109.325 27.9469C110.107 27.0856 111.392 26.4743 113.18 26.1131C114.968 25.7241 117.455 25.5296 120.64 25.5296H121.562V24.1543C121.562 22.4594 121.213 21.2369 120.515 20.4867C119.816 19.7088 118.684 19.3198 117.12 19.3198C114.773 19.3198 112.44 20.0422 110.121 21.487L108.989 19.0281C110.051 18.2779 111.322 17.6805 112.803 17.236C114.312 16.7636 115.765 16.5274 117.162 16.5274ZM115.821 34.9486C117.497 34.9486 118.866 34.3929 119.928 33.2815C121.017 32.1424 121.562 30.6837 121.562 28.9055V27.6968H120.808C118.349 27.6968 116.477 27.808 115.192 28.0303C113.907 28.2247 112.985 28.5721 112.426 29.0722C111.895 29.5445 111.63 30.253 111.63 31.1977C111.63 32.2813 112.021 33.1843 112.803 33.9067C113.613 34.6013 114.619 34.9486 115.821 34.9486Z"
                fill="url(#paint5_linear_1837_6578)" />
              <path
                d="M141.355 16.5274C146.245 16.5274 148.69 19.2087 148.69 24.5711V37.3242H145.295V24.7795C145.295 22.8901 144.918 21.5148 144.163 20.6535C143.437 19.7921 142.263 19.3615 140.643 19.3615C138.771 19.3615 137.276 19.9311 136.159 21.0702C135.041 22.2094 134.482 23.7514 134.482 25.6963V37.3242H131.087V17.0276H134.44V20.3617C135.111 19.1114 136.047 18.1667 137.248 17.5277C138.45 16.8609 139.819 16.5274 141.355 16.5274Z"
                fill="url(#paint6_linear_1837_6578)" />
              <defs>
                <linearGradient id="paint0_linear_1837_6578" x1="24.1311" y1="0" x2="24.1311" y2="37.7279"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#535353" />
                  <stop offset="0.40625" stopColor="#2C2C2C" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient id="paint1_linear_1837_6578" x1="8.31711" y1="21.2915" x2="8.31711" y2="37.7087"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#535353" />
                  <stop offset="0.40625" stopColor="#2C2C2C" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient id="paint2_linear_1837_6578" x1="93.2019" y1="17.8885" x2="93.2019" y2="40.0274"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F3F3F" />
                  <stop offset="1" stopColor="#1B1B1B" />
                </linearGradient>
                <linearGradient id="paint3_linear_1837_6578" x1="93.2019" y1="17.8885" x2="93.2019" y2="40.0274"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F3F3F" />
                  <stop offset="1" stopColor="#1B1B1B" />
                </linearGradient>
                <linearGradient id="paint4_linear_1837_6578" x1="93.2019" y1="17.8885" x2="93.2019" y2="40.0274"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F3F3F" />
                  <stop offset="1" stopColor="#1B1B1B" />
                </linearGradient>
                <linearGradient id="paint5_linear_1837_6578" x1="93.2019" y1="17.8885" x2="93.2019" y2="40.0274"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F3F3F" />
                  <stop offset="1" stopColor="#1B1B1B" />
                </linearGradient>
                <linearGradient id="paint6_linear_1837_6578" x1="93.2019" y1="17.8885" x2="93.2019" y2="40.0274"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F3F3F" />
                  <stop offset="1" stopColor="#1B1B1B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
          </span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`${styles.docs_btn} button button--secondary button--lg`}
            to="/docs/intro">
            <span>Docs</span>
            <span className={`${styles.docs_btn_logo}`}>
              <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

    </Layout>
  );
}
