import React from "react";

const TemplateOne = ({ data }) => (
  <div className="font-sans text-gray-900 p-8">
    <h1 className="text-3xl font-bold mb-1">{data.personal.name || "Your Name"}</h1>
    <p className="text-sm mb-4">
      {data.personal.email} | {data.personal.phone}
    </p>
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Education</h2>
      <p>{data.education.degree} - {data.education.institution} ({data.education.year})</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Experience</h2>
      <p>{data.experience.description}</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Skills</h2>
      <p>{data.skills}</p>
    </section>
  </div>
);

export default TemplateOne;
