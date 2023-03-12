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
import Footer from "./sections/Footer";
import FeedbackDialog from "./components/FeedbackDialog";
import {theme} from "./themes/theme";
import './index.scss';

function App() {
  const [targets, setTargets] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const openFeedbackModal = () => {
    setIsOpenModal(true);
  };

  const closeFeedbackModal = () => {
    setIsOpenModal(false);
  };

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
    getAllArticles();
  }, []);

  return (
    <div className={isMobile ? 'body__mobile' : 'body'}>
      <FeedbackDialog
        isOpen={isOpenModal}
        closeModal={closeFeedbackModal}
        isMobile={isMobile}
      />
      <header id="header">
        <Header
          openFeedbackModal={openFeedbackModal}
          isMobile={isMobile}
        />
      </header>
      <section
        id="about"
        className={isMobile ? "section-about--mobile" : "section-about"}
      >
        <About isMobile={isMobile} />
      </section>
      <Divider isMobile={isMobile} />
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
      <Divider isWhiteBackground={true} isMobile={isMobile} />
      <section
        id="objects"
        className={isMobile ? "section-objects--mobile" : "section-objects"}
      >
        <Objects isMobile={isMobile} />
      </section>
      <Divider isWhiteBackground={true} isMobile={isMobile} />
      <section
        id="gallery"
        className={isMobile ? "section-gallery--mobile" : "section-gallery"}
      >
        <Gallery isMobile={isMobile}/>
      </section>
      <footer
        id="footer"
        className={isMobile ? "footer--mobile" : "footer"}
      >
        <Footer
          openFeedbackModal={openFeedbackModal}
          isMobile={isMobile}
        />
      </footer>
    </div>
  );
}

export default App;
