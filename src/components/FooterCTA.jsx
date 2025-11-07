export default function FooterCTA() {
  const avatars = [
    "https://i.pravatar.cc/60?u=a",
    "https://i.pravatar.cc/60?u=b",
    "https://i.pravatar.cc/60?u=c",
    "https://i.pravatar.cc/60?u=d",
    "https://i.pravatar.cc/60?u=e",
    "https://i.pravatar.cc/60?u=f",
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Are you ready to connect with the future talent of the tech world
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join 50,000+ students learning with us
        </p>

        <div className="flex justify-center mb-8 -space-x-4">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Student"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Join Community
          </button>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}