import React from "react";
import Navbar_v2 from "../components/Navbar_v2";

const About = () => {
  return (
    <>
      <Navbar_v2 />
      <div className="flex lg:mx-20 sm:mx-5 mx-2   mt-22 text-gray-600 flex-col">
        <div className="border-b border-gray-200 lg:py-20 py-10 w-full">
          <h1 className="text-2xl lg:w-2/3 sm:w-1/2 w-full mx-auto">
            We are committed to shaping future civil servants of India. At TQ
            Civils, we combine quality education with smart strategy to help
            students crack competitive exams with confidence.
          </h1>
        </div>
        <div className="py-10 flex gap-10 text-md md:flex-row flex-col">
          <div className="flex-1 lg:px-10 sm:px-5 px-2 flex flex-col gap-5">
            <p>
              TQ Civils was founded with a vision to make quality civil services
              preparation accessible to every student, regardless of their
              background.
            </p>
            <p>
              We started our journey with a mission to simplify complex subjects
              and provide structured guidance for exams like UPSC and State PCS.
            </p>
            <p>
              Over time, we have built a strong learning ecosystem where
              students not only gain knowledge but also develop the right
              mindset to succeed in competitive exams.
            </p>
            <p>
              Our focus is not just on teaching, but on mentoring students
              throughout their preparation journey.
            </p>
          </div>
          <div className="flex-1 lg:px-10 sm:px-5 px-2 flex flex-col gap-5">
            <p>
              At TQ Civils, we offer a wide range of courses, test series, and
              mentorship programs designed by experienced educators.
            </p>
            <p>
              We also run an active learning community where students can
              discuss doubts, stay updated with current affairs, and stay
              motivated.
            </p>
            <p>
              Our goal is to build a platform where every aspirant gets the
              right direction, strategy, and support to achieve their dream of
              becoming a civil servant.
            </p>
            <p>
              We believe consistency, guidance, and the right resources can
              transform any dedicated student into a successful candidate.
            </p>
          </div>
        </div>
        <div className="py-10">
          <section className="max-w-6xl mx-auto lg:px-10 sm:px-5 px-2 py-10">
            <h2 className="text-2xl font-semibold text-center mb-12">People</h2>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Image */}
              <div className="text-center flex-1">
                <img
                  src="https://zerodha.com/static/images/nithin-kamath.jpg" // apni image path dal
                  alt="Pawan Sir"
                  className="w-72 h-72 rounded-full object-cover mx-auto"
                />
                <h3 className="mt-4 text-lg font-medium">Pawan Sir</h3>
                <p className="text-gray-500 text-sm">Founder, CEO</p>
              </div>

              {/* Content */}
              <div className="text-gray-700 space-y-5 text-[15px] leading-relaxed flex-1">
                <p>
                  Pawan Sir founded TQ Civils with the aim of guiding students
                  through the complexities of civil services preparation.
                </p>

                <p>
                  With years of teaching experience, he focuses on simplifying
                  concepts and building strong fundamentals for aspirants.
                </p>

                <p>
                  He believes that the right strategy and consistent effort are
                  the keys to success in competitive exams.
                </p>
                <p>Teaching and mentoring students is his passion.</p>

                <p>
                  Connect on{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Homepage
                  </a>{" "}
                  /{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>{" "}
                  /{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
