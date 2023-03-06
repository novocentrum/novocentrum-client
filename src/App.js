import {useMediaQuery} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./sections/Header";
import About from "./sections/About";
import Targets from "./sections/Targets";
import Divider from "./components/Divider";
import Articles from "./sections/Articles";
import Objects from "./sections/Objects";
import Gallery from "./sections/Gallery";
import {theme} from "./themes/theme";
import './index.scss';

function App() {
  const [targets, setTargets] = useState([]);
  const [articles, setArticles] = useState([]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  console.log('isMobile', isMobile)

  const getAllTargets = async () => {
    const targets = await axios.get('https://novecentrum.onrender.com/targets/list');
    setTargets(targets.data);
  };

  const getAllArticles = async () => {
    const articles = await axios.get('https://novecentrum.onrender.com/articles/list');
    setArticles(articles.data);
  };

  useEffect(() => {
    getAllTargets();
    getAllArticles()
  }, []);

  return (
    <>
      <header id="header">
        <Header isMobile={isMobile} />
      </header>
      <section
        id="about"
        className={isMobile ? "section-about--mobile" : "section-about"}
      >
        <About isMobile={isMobile} />
      </section>
      <Divider />
      <section
        id="targets"
        className={isMobile ? "section-targets--mobile" : "section-targets"}
      >
        <Targets targets={targets} isMobile={isMobile} />
      </section>
      <section
        id="articles"
        className={isMobile ? "section-articles--mobile" : "section-articles"}
      >
        <Articles articles={articles} isMobile={isMobile} />
      </section>
      <Divider isWhiteBackground={true} />
      <section
        id="objects"
        className={isMobile ? "section-objects--mobile" : "section-objects"}
      >
        <Objects isMobile={isMobile} />
      </section>
      <Divider isWhiteBackground={true} />
      <section
        id="gallery"
        className={isMobile ? "section-gallery--mobile" : "section-gallery"}
      >
        <Gallery isMobile={isMobile}/>
      </section>
    </>
  );
}

export default App;
