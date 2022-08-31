import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './stylesheet.css';

function App() {
  //States
  const [navActive, setNavActive] = useState(false);
  const [aniActive, setAnimationActive] = useState(motionMediaQuery());

  //Reduced motion sentinel
  function motionMediaQuery() {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    return (!m || !m.matches);
  }

  const Header = (
    <header className='header'>
      <Link to="/" onClick={() => (navActive) ? setNavActive(!navActive) : null} className="header__button --logo" data-jp="ヤングザック">Zach Young</Link>
      <button className="header__button --anima" data-motion-toggled={(aniActive)} onClick={() => setAnimationActive(!aniActive)}>Enable Motion</button>
      <button className='header__button --nav' data-nav-toggled={(navActive)} onClick={() => setNavActive(!navActive)}>Toggle Menu</button>
    </header>
  );

  const Navigation = (
    <nav className='nav'>
      <div className='nav__figure' data-motion={(aniActive)}>
        <div className='shape2d --circle'></div>
        <div className='shape2d --circle2'></div>
        <div className='shape2d --circle3'></div>
        <div className='shape2d --circle4'></div>
        <div className='shape2d --circle5'></div>
      </div>
      <ul className='nav__list'>
        <li>
          <Link to="/projects" onClick={() => setNavActive(!navActive)} className="nav__button" data-en="Projects" data-jp="プロジェクト">
            Projects
          </Link>
        </li>
        <li>
          <a href="/assets/zach_young_resume_aug.pdf" className="nav__button" data-en="Resume" data-jp="履歴書">
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/kingloomy" className="nav__button" data-en="GitHub" data-jp="ギットハブ">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://codepen.io/kingloomy" className="nav__button" data-en="CodePeｎ" data-jp="コードペン">
            CodePen
          </a>
        </li>
      </ul>
    </nav>
  );

  const HomePage = (
    <section className='page --home'>
      <figure className='scene' data-motion={(aniActive)}>
        <figcaption>
          Colorful 3D objects rendered entirely with CSS.
        </figcaption>
        <div className='scene__camera --1'></div>
        <div className='scene__camera --2'></div>
        <div className='scene__camera --3'></div>
        <div className='scene__camera --4'></div>
        <div className='scene__camera --5'></div>
        <div className='scene__camera --6'></div>

        <div className='canvas'>
          <div className='shape3d --cube --hyperrectangle'>
            <div className='__face --front'></div>
            <div className='__face --back'></div>
            <div className='__face --left'></div>
            <div className='__face --right'></div>
            <div className='__face --top'></div>
            <div className='__face --bottom'></div>
          </div>

          <div className="shape3d --cylinder">
            <div className="__face bm"></div>
            <div className="__face tp"></div>
            <div className="__face --side s0"></div>
            <div className="__face --side s1"></div>
            <div className="__face --side s2"></div>
            <div className="__face --side s3"></div>
            <div className="__face --side s4"></div>
            <div className="__face --side s5"></div>
            <div className="__face --side s6"></div>
            <div className="__face --side s7"></div>
            <div className="__face --side s8"></div>
            <div className="__face --side s9"></div>
            <div className="__face --side s10"></div>
            <div className="__face --side s11"></div>
            <div className="__face --side s12"></div>
            <div className="__face --side s13"></div>
            <div className="__face --side s14"></div>
            <div className="__face --side s15"></div>
            <div className="__face --side s16"></div>
            <div className="__face --side s17"></div>
            <div className="__face --side s18"></div>
            <div className="__face --side s19"></div>
            <div className="__face shadow"></div>
          </div>
          <div className="shape3d --cylinder --2">
            <div className="__face bm"></div>
            <div className="__face tp"></div>
            <div className="__face --side s0"></div>
            <div className="__face --side s1"></div>
            <div className="__face --side s2"></div>
            <div className="__face --side s3"></div>
            <div className="__face --side s4"></div>
            <div className="__face --side s5"></div>
            <div className="__face --side s6"></div>
            <div className="__face --side s7"></div>
            <div className="__face --side s8"></div>
            <div className="__face --side s9"></div>
            <div className="__face --side s10"></div>
            <div className="__face --side s11"></div>
            <div className="__face --side s12"></div>
            <div className="__face --side s13"></div>
            <div className="__face --side s14"></div>
            <div className="__face --side s15"></div>
            <div className="__face --side s16"></div>
            <div className="__face --side s17"></div>
            <div className="__face --side s18"></div>
            <div className="__face --side s19"></div>
            <div className="__face shadow"></div>
          </div>
          <div className="shape3d --cylinder --3">
            <div className="__face bm"></div>
            <div className="__face tp"></div>
            <div className="__face --side s0"></div>
            <div className="__face --side s1"></div>
            <div className="__face --side s2"></div>
            <div className="__face --side s3"></div>
            <div className="__face --side s4"></div>
            <div className="__face --side s5"></div>
            <div className="__face --side s6"></div>
            <div className="__face --side s7"></div>
            <div className="__face --side s8"></div>
            <div className="__face --side s9"></div>
            <div className="__face --side s10"></div>
            <div className="__face --side s11"></div>
            <div className="__face --side s12"></div>
            <div className="__face --side s13"></div>
            <div className="__face --side s14"></div>
            <div className="__face --side s15"></div>
            <div className="__face --side s16"></div>
            <div className="__face --side s17"></div>
            <div className="__face --side s18"></div>
            <div className="__face --side s19"></div>
            <div className="__face shadow"></div>
          </div>
          <div className='shape3d --torus'>
          </div>
          <div className='shape3d --shadow --torus-shadow'></div>
          <div className='shape3d --metasphere'>
            <div className='shape3d --moon'></div>
            <div className='shape3d --ring --front'>
              <div className='__face --front'></div>
            </div>
            <div className='shape3d --ring'>
              <div className='__face'></div>
            </div>
            <div className='shape3d --ring --front'>
              <div className='__face --inner --front'></div>
            </div>
            <div className='shape3d --ring --back'>
              <div className='__face --inner --back'></div>
            </div>
            <div className='shape3d --sphere'>
              <div className='__light --sphere'></div>
              <div className='__light --sphere2'></div>
              <div className='__light --sphere3'></div>
            </div>
          </div>
          <div className='shape3d --cube'>
            <div className='__face --front'></div>
            <div className='__face --back'></div>
            <div className='__face --left'></div>
            <div className='__face --right'></div>
            <div className='__face --top'></div>
            <div className='__face --bottom'></div>
          </div>
          <div className='shape3d --shadow --sphere-shadow'></div>
          <div className='shape3d --pyramid'>
            <div className='__face --front'></div>
            <div className='__face --left'></div>
            <div className='__face --right'></div>
            <div className='__face --back'></div>
            <div className='__face --bottom'></div>
            <div className='__face --shadow'></div>
          </div>
        </div>
      </figure>
    </section>
  );

  const ProjectPage = (
    <section className='page --projects'>
      <a href="https://main.d3e5jo0eiyk3ey.amplifyapp.com/" target="_blank" rel="noreferrer" className="block">
        <article className='entry'>
          <figure className='--celadon'>
          </figure>
          <h2>Celadon</h2>
          <h3>React + Redux / TypeScript / AWS / Amplify</h3>
          <p>
            Full-stack, collaborative React app currently in development by   my friend and I. We created it to solve the problem of organizing massive Pokémon collections.
            Utilizes a flexible AWS Postgres database system with powerful, custom filters, which allows users to find the exact Pokémon they are looking for amidst a huge data set.
          </p>
        </article>
      </a>
      <a href="https://fuuj.in/" target="_blank" rel="noreferrer">
        <article className='entry'>
          <figure className='--fuujin'>
          </figure>
          <h2>Fuuj.in</h2>
          <h3>React + Query / TypeScript / Query / Netlify</h3>
          <p>
            React-based weather app that uses React Query to read API data from the National Weather Service and Open-Meteo.
            Delivers the forecast to users based on location and time, and each forecast is paired with a matching ukiyo-e print and handmade CSS theme.
          </p>
        </article>
      </a>
      <a href="https://loomy.dev/" target="_blank" rel="noreferrer">
        <article className='entry'>
          <figure className='--loomy'>
          </figure>
          <h2>Loomy.dev</h2>
          <h3>React + Router / TypeScript / Netlify</h3>
          <p>
            My very own, hand-made portfolio website. A constant work in progress, I drew on inspiration from AI-generated 3D objects and Japanese graphic design to create a <strong>CSS-only</strong> 3D camera array system that lets you explore a diorama of 2.5d objects.
          </p>
        </article>
      </a>
    </section >
  );

  const Main = (
    <main className='main'>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/projects" element={ProjectPage} />
      </Routes>
    </main>
  );

  return (
    <div className='stem'>
      {Header}
      {(navActive) ? Navigation : Main}
    </div>
  );
}

export default App;
