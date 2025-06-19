
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { Intro } from './components/Intro/Intro';
import  Project from './components/Project/project';
import { ContactForm } from './components/Form/form';
import { Timeline } from './components/Timeline/timeline';


import Particles from './components/Particles';


import './style/core.scss';

function App() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <Particles //Particles component
          particleColors={['#6658d3', '#6658d3']}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={250}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Header></Header>
      <div style={{ backdropFilter: 'blur(6px)' }}>
        <Intro></Intro>
        <Main></Main>
        <Timeline></Timeline>
      </div>
        <Project></Project>
        <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default App;
