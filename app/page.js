import MyComponent from '@/components/MyComponent';
import HeroText from '@/components/HeroText';
import PhotoSection from '@/components/PhotoSection';
import Stats from '@/components/Stats';
import ScriptsLoader from '@/components/ScriptsLoader';

const Home = () => {
  return (
    <>
      {/* Load external scripts */}
      <ScriptsLoader />

      {/* Full-screen background component */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        aria-hidden="true"
      >
        <MyComponent />
      </div>

      {/* Main content section */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary content heading for SEO */}
          <header>
            <h1 className="sr-only">Welcome to Our Website</h1>
          </header>

          <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:py-24">
            <HeroText />
            <PhotoSection />
          </div>
        </div>

        {/* Statistics section with a descriptive heading */}
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="text-xl font-bold text-center">
            Our Achievements
          </h2>
          <Stats />
        </section>
      </main>
    </>
  );
};

export default Home;
