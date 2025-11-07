export default function Partners() {
  const partners = [
    { name: "zoom", color: "text-blue-600" },
    { name: "stripe", color: "text-purple-600" },
    { name: "monday.com", color: "text-pink-600" },
    { name: "slack", color: "text-green-600" },
    { name: "Dropbox", color: "text-blue-500" },
  ];

  return (
    <section className="bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-2xl font-bold">
          {partners.map((p) => (
            <span key={p.name} className={`${p.color} opacity-70 hover:opacity-100 transition`}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}