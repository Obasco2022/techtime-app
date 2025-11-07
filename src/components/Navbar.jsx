export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      {/* Left: Menu + Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl cursor-pointer hover:scale-110 transition">Menu</div>
        <h1 className="text-2xl font-bold tracking-tight">Techtime</h1>
      </div>

      {/* Center: Nav Links (Hidden on Mobile) */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        {["Home", "About Us", "Courses", "Testimonial", "Community"].map((item) => (
          <li key={item} className="hover:text-blue-400 transition cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* Right: Button */}
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold transition shadow-md">
        Enroll Now
      </button>
    </nav>
  );
}