// import React from "react";

// const TemplateOne = ({ data }) => (
//   <div className="font-sans text-gray-900 p-8">
//     <h1 className="text-3xl font-bold mb-1">{data.personal.name || "Your Name"}</h1>
//     <p className="text-sm mb-4">
//       {data.personal.email} | {data.personal.phone}
//     </p>
//     <section className="mb-6">
//       <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Education</h2>
//       <p>{data.education.degree} - {data.education.institution} ({data.education.year})</p>
//     </section>
//     <section className="mb-6">
//       <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Experience</h2>
//       <p>{data.experience.description}</p>
//     </section>
//     <section>
//       <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Skills</h2>
//       <p>{data.skills}</p>
//     </section>
//   </div>
// );

// export default TemplateOne;
import React from "react";

const TemplateOne = ({ data }) => (
  <div className="font-sans text-gray-900 p-8 bg-white rounded-xl shadow-md border border-gray-200 leading-relaxed tracking-wide">
    {/* Header Section */}
    <div className="text-center mb-6">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-1">
        {data.personal.name || "Your Name"}
      </h1>
      <p className="text-sm text-gray-600">
        {data.personal.email || "youremail@example.com"} | {data.personal.phone || "123-456-7890"}
      </p>
    </div>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-indigo-600 border-b-2 border-indigo-200 pb-1 mb-2 uppercase tracking-wider">
        Education
      </h2>
      <p className="text-gray-800">
        <span className="font-medium">{data.education.degree || "Degree"}</span> —{" "}
        {data.education.institution || "Institution"} ({data.education.year || "Year"})
      </p>
    </section>

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-indigo-600 border-b-2 border-indigo-200 pb-1 mb-2 uppercase tracking-wider">
        Experience
      </h2>
      <p className="text-gray-800 whitespace-pre-line">
        {data.experience.description || "Describe your professional experience here..."}
      </p>
    </section>

    {/* Skills */}
    <section>
      <h2 className="text-lg font-semibold text-indigo-600 border-b-2 border-indigo-200 pb-1 mb-2 uppercase tracking-wider">
        Skills
      </h2>
      <p className="text-gray-800">{data.skills || "List your key skills here (e.g. React, Node.js, TailwindCSS)"}</p>
    </section>
  </div>
);

export default TemplateOne;
