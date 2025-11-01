import React from "react";

const TemplateTwo = ({ data }) => (
  <div className="font-serif p-8 text-gray-800 border-l-4 border-blue-600 bg-blue-50">
    <h1 className="text-4xl font-bold mb-2 border-b border-blue-400 pb-2">{data.personal.name || "Your Name"}</h1>
    <p className="text-sm italic mb-4">{data.personal.email} | {data.personal.phone}</p>
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Education</h3>
      <p>{data.education.degree} at {data.education.institution} ({data.education.year})</p>
    </section>
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Experience</h3>
      <p>{data.experience.description}</p>
    </section>
    <section>
      <h3 className="text-lg font-semibold">Skills</h3>
      <p>{data.skills}</p>
    </section>
  </div>
);

export default TemplateTwo;
