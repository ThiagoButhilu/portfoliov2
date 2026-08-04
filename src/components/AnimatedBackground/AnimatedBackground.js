import './AnimatedBackground.scss';

export function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="animated-background__base" />
      <div className="animated-background__orb animated-background__orb--1" />
      <div className="animated-background__orb animated-background__orb--2" />
      <div className="animated-background__orb animated-background__orb--3" />
      <div className="animated-background__grid" />
    </div>
  );
}

export default AnimatedBackground;
