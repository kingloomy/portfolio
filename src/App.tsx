import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
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

  const PortfolioPage = (
    <section className='page --portfolio'>
      <h2 className='big-header' id="concept">Concept</h2>
      <LazyLoad>
        <a target="_blank" href="/assets/port/e3987r3.jpg"><img className="--big" src="/assets/port/e3987r3.jpg" alt="Fantasy Landscape" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/uyuku774.jpg"><img className="--big" src="/assets/port/uyuku774.jpg" alt="Scenic Landscape" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/fr784.jpg"><img className="--big" src="/assets/port/fr784.jpg" alt="Ukiyo-e Narrative" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/69173e68-034f-4dfa-9ef3-3d45f62348de_rw_1920.jpg"><img className='--big' src="/assets/port/69173e68-034f-4dfa-9ef3-3d45f62348de_rw_1920.jpg" alt="Robot Character" /></a>
      </LazyLoad>
      <LazyLoad>
        <div>
          <a target="_blank" href="/assets/port/aaa4b2da-163a-42e9-845c-6aa07c2487d5_rw_1920.jpg"><img className='--half' src="/assets/port/aaa4b2da-163a-42e9-845c-6aa07c2487d5_rw_1920.jpg" alt="Robot Character" /></a>
          <a target="_blank" href="/assets/port/e2dbe89e-435b-4dbb-a27f-32453aafe803_rw_1920.jpg"><img className='--half' src="/assets/port/e2dbe89e-435b-4dbb-a27f-32453aafe803_rw_1920.jpg" alt="Robot Character" /></a>
        </div>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/43r847812.png"><img className='--big' src="/assets/port/43r847812.png" alt="Robot Character" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/eifrua.png"><img className='--big' src="/assets/port/eifrua.png" alt="Mario Academia" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/few333.jpg"><img className='--big' src="/assets/port/few333.jpg" alt="Tyler, The Creator (SU)" /></a>
      </LazyLoad>
      <LazyLoad>
        <a target="_blank" href="/assets/port/fewafewfae.jpg"><img className='--big' src="/assets/port/fewafewfae.jpg" alt="Blue Diamond (SU)" /></a>
      </LazyLoad>
      <h2 className='big-header' id="spots">Spots</h2>
      <LazyLoad>
        <div>
          <a target="_blank" href="/assets/port/bc6df93c-c7fb-4de1-aec9-525500c328f8_rw_1920.jpg"><img className='--half' src="/assets/port/bc6df93c-c7fb-4de1-aec9-525500c328f8_rw_1920.jpg" alt="Book Worms" /></a>
          <a target="_blank" href="/assets/port/Dv3Xru5W0AAuoIV.jpg"><img className='--half' src="/assets/port/Dv3Xru5W0AAuoIV.jpg" alt="Adventure Time" /></a>
        </div>
      </LazyLoad>
      <LazyLoad>
        <div>
          <a target="_blank" href="/assets/port/ear3era.jpg"><img className='--half' src="/assets/port/gra4e94829.jpg" alt="Social Graffiti" /></a>
          <a target="_blank" href="/assets/port/7298fhua7.jpg"><img className='--half' src="/assets/port/7298fhua7.jpg" alt="Pattern" /></a>
        </div>
      </LazyLoad>

      <h2 className='big-header' id="animation">Animation</h2>
      <LazyLoad>
        <div className='mosaic'>
          <a target="_blank" href="/assets/port/cdc5b757-7594-4787-83a6-4cf1ac508583_rw_1200.gif"><img className='--half' src="/assets/port/cdc5b757-7594-4787-83a6-4cf1ac508583_rw_1200.gif" alt="Mermaid" /></a>
          <a target="_blank" href="/assets/port/a2281821-ccc3-40c8-9696-2004486c2a1b_rw_1920.gif"><img className='--half' src="/assets/port/a2281821-ccc3-40c8-9696-2004486c2a1b_rw_1920.gif" alt="Island" /></a>
        </div>
      </LazyLoad>
      <LazyLoad>
        <div className='mosaic'>
          <a target="_blank" href="/assets/port/840aad96-9d55-4fb8-b9c0-50b98403da4e_rw_1200.gif"><img className='--half' src="/assets/port/840aad96-9d55-4fb8-b9c0-50b98403da4e_rw_1200.gif" alt="Waves" /></a>
          <a target="_blank" href="/assets/port/85e29ad2-7947-4b24-96c3-db16a4dc496a_rw_1200.gif"><img className='--half' src="/assets/port/85e29ad2-7947-4b24-96c3-db16a4dc496a_rw_1200.gif" alt="Halloween" /></a>
        </div>
      </LazyLoad>
    </section>
  )

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
        <Route path="/portfolio" element={PortfolioPage} />
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
