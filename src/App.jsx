import navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import VideoSection from './components/VideoSection';
import WhyBest from './components/WhyBest';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Partners />
      <VideoSection />
      <WhyBest />
      <Courses />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;