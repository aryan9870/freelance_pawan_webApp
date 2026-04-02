import React from "react";

const stats = [
  { value: "15K+", label: "Students" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

const OurSuccess = () => {
  return (
    <section className="w-full py-10 flex justify-center">
      <div className="w-full max-w-6xl text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-3">
          Our Success
        </h2>

        {/* Description */}
        <p className="text-gray-500 md:text-base max-w-xl mx-auto mb-10">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-between gap-6">
          {stats.map((item, index) => (
            <div key={index} className="">
              <h3 className="text-3xl md:text-4xl text-cyan-500">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurSuccess;