import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold">Alejandro Tañón Díaz</h1>
        <p className="mt-3 text-lg text-gray-600">
          Software engineer
        </p>
      </header>

      <div className="space-y-6 text-gray-700">
        <div className="text-lg md:text-xl">
          <p>
            Alejandro Tañón Díaz is a software engineer focused on systems,
            data analysis, and Human-Computer Interaction. This site is a personal
            portfolio and professional homepage documenting projects,
            technical explorations, and ongoing work in software engineering.
          </p>
        </div>

        <div className="text-lg md:text-xl">
          <p>
            Alejandro studied Computer Science and Engineering 
            at <strong>MIT</strong> and currently works at <strong>Microsoft</strong> as a Software Engineer.
          </p>
        </div>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Areas of focus</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Distributed systems and reliability</li>
            <li>Data Analysis and visualization</li>
            <li>Performance and low-level optimization</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Open to</h2>
          <p className="text-gray-700">
            Collaborations, technical discussions, mentoring, and challenging
            projects that align with Alejandro's expertise in software
            engineering.
          </p>
        </div>
      </section>

      <footer className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-black text-white rounded hover:opacity-95"
        >
          Get in touch
        </a>
      </footer>
    </section>
  );
};

export default About;
