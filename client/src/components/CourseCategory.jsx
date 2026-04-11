const categories = [
  {
    title: "Prelims Preparation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "🧠",
    bg: "bg-purple-100",
  },
  {
    title: "Mains Preparation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "✍️",
    bg: "bg-pink-100",
  },
  {
    title: "Test Series",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "📊",
    bg: "bg-green-100",
  },
  {
    title: "UPSC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "📚",
    bg: "bg-yellow-100",
  },
  {
    title: "Current Affairs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "📰",
    bg: "bg-red-100",
  },
  {
    title: "UPPCS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    icon: "🏛️",
    bg: "bg-indigo-100",
  },
];

const CourseCategory = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-10">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-10">
        Choose your course category
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition duration-300 flex flex-col items-center justify-center"
          >
            
            {/* Icon */}
            <div className={`w-20 h-20 flex items-center justify-center rounded-lg ${cat.bg} text-xl`}>
              {cat.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 font-semibold text-lg">
              {cat.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3 leading-relaxed text-center">
              {cat.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CourseCategory;