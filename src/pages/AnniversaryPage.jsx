import { useEffect, useRef } from 'react';

export default function AnniversaryPage() {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hero section - zooms out and fades as you scroll
      if (heroRef.current) {
        const heroScale = Math.max(0.3, 1 - (scrolled / 1000));
        const heroOpacity = Math.max(0, 1 - (scrolled / 600));
        const heroBlur = Math.min(10, scrolled / 100);
        heroRef.current.style.transform = `scale(${heroScale})`;
        heroRef.current.style.opacity = heroOpacity;
        heroRef.current.style.filter = `blur(${heroBlur}px)`;
      }

      // Section 1 - starts small in distance and zooms in as you scroll
      if (section1Ref.current) {
        const section1Top = section1Ref.current.offsetTop;
        const section1Center = section1Top - (windowHeight * 1.5);
        const section1Progress = Math.max(0, Math.min(1, (scrolled - section1Center) / (windowHeight * 1.2)));
        const section1Scale = 0.3 + section1Progress * 0.7;
        const section1Opacity = Math.min(1, section1Progress * 1.5);
        const section1Blur = Math.max(0, (1 - section1Progress) * 10);
        
        section1Ref.current.style.transform = `scale(${section1Scale})`;
        section1Ref.current.style.opacity = section1Opacity;
        section1Ref.current.style.filter = `blur(${section1Blur}px)`;
      }

      // Section 2 - starts small in distance and zooms in
      if (section2Ref.current) {
        const section2Top = section2Ref.current.offsetTop;
        const section2Center = section2Top - (windowHeight * 1.5);
        const section2Progress = Math.max(0, Math.min(1, (scrolled - section2Center) / (windowHeight * 1.2)));
        const section2Scale = 0.3 + section2Progress * 0.7;
        const section2Opacity = Math.min(1, section2Progress * 1.5);
        const section2Blur = Math.max(0, (1 - section2Progress) * 10);
        
        section2Ref.current.style.transform = `scale(${section2Scale})`;
        section2Ref.current.style.opacity = section2Opacity;
        section2Ref.current.style.filter = `blur(${section2Blur}px)`;
      }

      // Section 3 - starts small in distance and zooms in
      if (section3Ref.current) {
        const section3Top = section3Ref.current.offsetTop;
        const section3Center = section3Top - (windowHeight * 1.5);
        const section3Progress = Math.max(0, Math.min(1, (scrolled - section3Center) / (windowHeight * 1.2)));
        const section3Scale = 0.3 + section3Progress * 0.7;
        const section3Opacity = Math.min(1, section3Progress * 1.5);
        const section3Blur = Math.max(0, (1 - section3Progress) * 10);
        
        section3Ref.current.style.transform = `scale(${section3Scale})`;
        section3Ref.current.style.opacity = section3Opacity;
        section3Ref.current.style.filter = `blur(${section3Blur}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* Hero Section - Layer 1 (Front) */}
      <section ref={heroRef} style={styles.hero}>
        <h1 style={styles.heroTitle}>Happy Anniversary ❤️</h1>
        <p style={styles.heroText}>
          Thank you for loving me and being part of my life.<br />
          Every moment with you is my favorite memory.
        </p>
        {/* String segment from hero */}
        <svg style={styles.curvedString} viewBox="0 0 200 400" preserveAspectRatio="none">
          <path
            d="M 100 0 Q 150 100, 100 200 Q 50 300, 100 400"
            stroke="url(#redGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff1744" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ff1744" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff1744" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </section>

      {/* Section 1 - Layer 2 (Photo Right, Text Left) */}
      <section ref={section1Ref} style={styles.section}>
        <div style={styles.content}>
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>What makes my heart beat faster</h2>
            <p style={styles.sectionText}>
              That smile of yours captured my heart
              instantly. I knew from that moment that you were special.
            </p>
          </div>
          <div style={styles.photoBlock}>
            <div style={styles.photoFrame}>
             <img src={new URL('/photo1.jpg', import.meta.url).href} style={styles.photo} alt="Memory 1" />
            </div>
          </div>
        </div>
        {/* String segment from section 1 */}
        <svg style={styles.curvedString} viewBox="0 0 200 400" preserveAspectRatio="none">
          <path
            d="M 100 0 Q 50 100, 100 200 Q 150 300, 100 400"
            stroke="url(#redGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </section>

      {/* Section 2 - Layer 3 (Photo Left, Text Right) */}
      <section ref={section2Ref} style={styles.section}>
        <div style={styles.content}>
          <div style={styles.photoBlock}>
            <div style={styles.photoFrame}>
             <img src={new URL('/photo2.jpg', import.meta.url).href} style={styles.photo} alt="Memory 2" />
            </div>
          </div>
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Growing Together</h2>
            <p style={styles.sectionText}>
              Every challenge we've faced has made us stronger. Every laugh we've
              shared has made life brighter. You are my partner in everything.
            </p>
          </div>
        </div>
        {/* String segment from section 2 */}
        <svg style={styles.curvedString} viewBox="0 0 200 400" preserveAspectRatio="none">
          <path
            d="M 100 0 Q 140 100, 100 200 Q 60 300, 100 400"
            stroke="url(#redGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </section>

      {/* Section 3 - Layer 4 (Photo Right, Text Left) */}
      <section ref={section3Ref} style={styles.section}>
        <div style={styles.content}>
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Forever & Always</h2>
            <p style={styles.sectionText}>
              Here's to all the memories we've made and all the adventures still
              to come. I love you more with each passing day. Happy Anniversary!
            </p>
          </div>
          <div style={styles.photoBlock}>
            <div style={styles.photoFrame}>
              <img src={new URL('/photo3.jpg', import.meta.url).href} style={styles.photo} alt="Memory 3" />
            </div>
          </div>
        </div>
        {/* String segment from section 3 */}
        <svg style={styles.curvedString} viewBox="0 0 200 400" preserveAspectRatio="none">
          <path
            d="M 100 0 Q 70 100, 100 200 Q 130 300, 100 400"
            stroke="url(#redGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </section>

      {/* Footer */}
      <section style={styles.footer}>
        <p style={styles.footerText}>With all my love ❤️</p>
      </section>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    background: 'linear-gradient(to bottom, #000000, #1a0a0a, #2d1414, #ffd1dc)',
    overflow: 'hidden',
    minHeight: '400vh',
  },
  
  curvedString: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 10,
    opacity: 0.8,
  },

  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    zIndex: 100,
    transition: 'all 0.1s ease-out',
    transformOrigin: 'center center',
  },

  heroTitle: {
    fontSize: '5rem',
    color: '#ff1744',
    marginBottom: '30px',
    fontFamily: 'Georgia, serif',
    textShadow: '0 0 20px rgba(255, 23, 68, 0.5), 2px 2px 4px rgba(0,0,0,0.3)',
    fontWeight: 'bold',
  },

  heroText: {
    fontSize: '1.8rem',
    color: '#ffffff',
    maxWidth: '700px',
    lineHeight: '2',
    fontFamily: 'Arial, sans-serif',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  },

  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    position: 'relative',
    zIndex: 50,
    transition: 'all 0.1s ease-out',
    transformOrigin: 'center center',
  },

  content: {
    display: 'flex',
    gap: '80px',
    maxWidth: '1400px',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 100,
  },

  textBlock: {
    flex: '1 1 450px',
    padding: '50px',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '25px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
  },

  photoBlock: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center',
  },

  photoFrame: {
    padding: '25px',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
    transform: 'rotate(-3deg)',
    transition: 'transform 0.4s ease',
  },

  photo: {
    width: '100%',
    maxWidth: '450px',
    height: 'auto',
    borderRadius: '15px',
    display: 'block',
  },

  sectionTitle: {
    fontSize: '3rem',
    color: '#c62828',
    marginBottom: '25px',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
  },

  sectionText: {
    fontSize: '1.3rem',
    color: '#555',
    lineHeight: '2',
    fontFamily: 'Arial, sans-serif',
  },

  footer: {
    minHeight: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },

  footerText: {
    fontSize: '2.5rem',
    color: '#ff1744',
    fontFamily: 'Georgia, serif',
    textShadow: '0 0 20px rgba(255, 23, 68, 0.5)',
  },
};