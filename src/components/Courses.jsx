export default function Courses() {
  const courses = [
    {
      title: "Introduction to User Research in UX Design",
      instructor: "Leonard Victor",
      price: "$59.00",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Introduction to new marketing audience",
      instructor: "Jeffrey Williams",
      price: "$69.00",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Introduction to HTML, CSS & Bootstrap",
      instructor: "Claretta Mason",
      price: "$59.00",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Introduction to Javascript, Git & GitHub",
      instructor: "Jessica Duke",
      price: "$45.00",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Introduction to outroom marketing analysis",
      instructor: "Samuel Jacobs",
      price: "$69.00",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Introduction to live marketing analysis",
      instructor: "Adam Smith",
      price: "$59.00",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Browse Our Popular Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 font-semibold hover:underline">
            Explore All Courses →
          </button>
        </div>
      </div>
    </section>
  );
}