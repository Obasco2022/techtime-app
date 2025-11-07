export default function WhyBest() {
  const reasons = [
    { icon: "Chart", title: "In-Demand Skills", desc: "Learn skills that top companies want" },
    { icon: "Clock", title: "One-on-One Mentoring", desc: "Personal guidance from experts" },
    { icon: "Video", title: "Live Online Meetings", desc: "Interactive sessions weekly" },
    { icon: "Certificate", title: "Affordable Price", desc: "Quality education, budget-friendly" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          This is why we are best from others
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}