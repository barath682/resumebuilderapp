// import React from "react";

// const TemplateTwo = ({ data }) => (
//   <div className="font-serif p-8 text-gray-800 border-l-4 border-blue-600 bg-blue-50">
//     <h1 className="text-4xl font-bold mb-2 border-b border-blue-400 pb-2">{data.personal.name || "Your Name"}</h1>
//     <p className="text-sm italic mb-4">{data.personal.email} | {data.personal.phone}</p>
//     <section className="mb-6">
//       <h3 className="text-lg font-semibold">Education</h3>
//       <p>{data.education.degree} at {data.education.institution} ({data.education.year})</p>
//     </section>
//     <section className="mb-6">
//       <h3 className="text-lg font-semibold">Experience</h3>
//       <p>{data.experience.description}</p>
//     </section>
//     <section>
//       <h3 className="text-lg font-semibold">Skills</h3>
//       <p>{data.skills}</p>
//     </section>
//   </div>
// );

// export default TemplateTwo;
import React from "react";

const TemplateTwo = ({ data }) => (
  <div className="font-serif bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 border-l-[6px] border-blue-600 rounded-xl shadow-md p-8 leading-relaxed tracking-wide">
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2 border-b-2 border-blue-200 pb-2">
        {data.personal.name || "Your Name"}
      </h1>
      <p className="text-sm italic text-gray-600">
        {data.personal.email || "youremail@example.com"} | {data.personal.phone || "123-456-7890"}
      </p>
    </div>

    {/* Education */}
    <section className="mb-6 bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-300 mb-2 uppercase tracking-wider">
        Education
      </h3>
      <p className="text-gray-800">
        <span className="font-medium">{data.education.degree || "Degree"}</span> at{" "}
        {data.education.institution || "Institution"} ({data.education.year || "Year"})
      </p>
    </section>

    {/* Experience */}
    <section className="mb-6 bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-300 mb-2 uppercase tracking-wider">
        Experience
      </h3>
      <p className="text-gray-800 whitespace-pre-line">
        {data.experience.description || "Describe your work experience, roles, and achievements here..."}
      </p>
    </section>

    {/* Skills */}
    <section className="bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-300 mb-2 uppercase tracking-wider">
        Skills
      </h3>
      <p className="text-gray-800">{data.skills || "List your skills here (e.g. React, Node.js, TailwindCSS)"}</p>
    </section>
  </div>
);

export default TemplateTwo;
