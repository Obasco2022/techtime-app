export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      text: "Techtime has transformed my career. The courses are top-notch and mentors are amazing!",
      avatar: "https://i.pravatar.cc/100?u=sarah",
    },
    {
      name: "Mike Chen",
      role: "Full Stack Developer",
      text: "Best investment I made in my education. Got a job offer within 2 months of finishing.",
      avatar: "https://i.pravatar.cc/100?u=mike",
    },
    {
      name: "Emily Davis",
      role: "Marketing Lead",
      text: "The live classes and community support are unmatched. Highly recommend!",
      avatar: "https://i.pravatar.cc/100?u=emily",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          What our clients are saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <p className="text-gray-700 mb-4 italic">"{r.text}"</p>
              <h4 className="font-bold">{r.name}</h4>
              <p className="text-sm text-gray-600">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}