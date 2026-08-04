
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { Intro } from './components/Intro/Intro';
import  Project from './components/Project/project';
import { ContactForm } from './components/Form/form';
import { Timeline } from './components/Timeline/timeline';

import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';

import './style/core.scss';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Intro />
      <Main />
      <Timeline />
      <Project />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
