import React from "react";

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "5000+", label: "Questions Solved" },
  { value: "10+", label: "Years of Experience" },
  { value: "90%", label: "Student Satisfaction" },
];

const OurSuccess = () => {
  return (
    <section className="w-full py-10 px-2 flex justify-center">
      <div className="w-full max-w-6xl text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-3">
          Our Results & Impact
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