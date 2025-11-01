import React from "react";

const TemplateThree = ({ data }) => (
  <div className="p-8 font-mono bg-gray-100 border rounded-lg shadow-md">
    <header className="mb-6 border-b border-gray-400 pb-3">
      <h1 className="text-3xl font-semibold">{data.personal.name || "Your Name"}</h1>
      <p className="text-sm">{data.personal.email} | {data.personal.phone}</p>
    </header>
    <section className="mb-6">
      <h2 className="text-lg font-semibold underline">Education</h2>
      <p>{data.education.degree} - {data.education.institution} ({data.education.year})</p>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold underline">Experience</h2>
      <p>{data.experience.description}</p>
    </section>
    <section>
      <h2 className="text-lg font-semibold underline">Skills</h2>
      <p>{data.skills}</p>
    </section>
  </div>
);

export default TemplateThree;
