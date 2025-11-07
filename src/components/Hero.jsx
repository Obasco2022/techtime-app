export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text & Buttons */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Grow your skills to advance your career path
          </h1>

          <p className="text-lg opacity-90">
            Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105">
              Get Started Now
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition">
              Enroll Now
            </button>
          </div>

          {/* Student Avatars + Count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                  style={{ backgroundImage: `ur[](https://i.pravatar.cc/40?u=${i})`, backgroundSize: 'cover' }}
                />
              ))}
            </div>
            <span className="text-sm font-medium">295k+ Premium Students</span>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <p className="text-white text-xl font-bold">Student Image</p>
            </div>
            {/* Decorative Icons */}
            <div className="absolute -top-4 -left-4 text-6xl animate-bounce">Lightbulb</div>
            <div className="absolute -bottom-6 -right-6 text-5xl animate-pulse">Rocket</div>
          </div>
        </div>
      </div>
    </section>
  );
}