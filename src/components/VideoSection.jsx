export default function VideoSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            High quality video, audio & live classes
          </h2>
          <p className="text-gray-600">
            High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition...
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            View Courses
          </button>

          <div className="flex flex-wrap gap-3">
            {["Audio Classes", "Live Classes", "Recorded Classes", "50+ Notes"].map((tab) => (
              <span
                key={tab}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
                  style={{ backgroundImage: `ur[](https://i.pravatar.cc/32?u=v${i})`, backgroundSize: 'cover' }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">250k Enrolled Students</span>
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Student learning"
            className="rounded-2xl shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Live class"
              className="w-32 h-24 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}