import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/oil4.jpg';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.landing_main_cont}>
      <div className={styles.top_div_main_cont}>
        <ul>
          <li>We are</li>
          <li>
            Eploring the natural resources in the best possible way <br /> for a
            better world
          </li>
          <li>
            Our exploration teams use advanced technologies and techniques to
            drill wells into the Earth&apos;s surface, often reaching great
            depths.
          </li>
          <li>
            <div className={styles.landingBtn_cont}>
              <button>Read more</button>
              <button>Contact Us</button>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <Image src={bg} height={700} width={800} alt="background image" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
