// import React from "react";

// const TemplateThree = ({ data }) => (
//   <div className="p-8 font-mono bg-gray-100 border rounded-lg shadow-md">
//     <header className="mb-6 border-b border-gray-400 pb-3">
//       <h1 className="text-3xl font-semibold">{data.personal.name || "Your Name"}</h1>
//       <p className="text-sm">{data.personal.email} | {data.personal.phone}</p>
//     </header>
//     <section className="mb-6">
//       <h2 className="text-lg font-semibold underline">Education</h2>
//       <p>{data.education.degree} - {data.education.institution} ({data.education.year})</p>
//     </section>
//     <section className="mb-6">
//       <h2 className="text-lg font-semibold underline">Experience</h2>
//       <p>{data.experience.description}</p>
//     </section>
//     <section>
//       <h2 className="text-lg font-semibold underline">Skills</h2>
//       <p>{data.skills}</p>
//     </section>
//   </div>
// );

// export default TemplateThree;
import React from "react";

const TemplateThree = ({ data }) => (
  <div className="p-10 font-sans bg-gradient-to-br from-indigo-50 via-white to-blue-100 border border-indigo-200 rounded-2xl shadow-2xl max-w-3xl mx-auto transition-all duration-300 hover:shadow-indigo-300">
    {/* Header Section 💼 */}
    <header className="mb-10 border-b-4 border-indigo-400 pb-5 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-800 tracking-wide drop-shadow-md">
        {data.personal.name || "Your Name"}
      </h1>
      <p className="text-md text-gray-600 mt-2 italic">
        {data.personal.email} | {data.personal.phone}
      </p>
    </header>

    {/* Education 🎓 */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
        🎓 <span>Education</span>
      </h2>
      <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
        <p className="text-gray-800 font-medium">
          {data.education.degree || "Degree"} —{" "}
          {data.education.institution || "Institution"}{" "}
          <span className="text-gray-500">({data.education.year || "Year"})</span>
        </p>
      </div>
    </section>

    {/* Experience 💼 */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
        💼 <span>Experience</span>
      </h2>
      <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
        <p className="text-gray-800 leading-relaxed">
          {data.experience.description || "Describe your work experience here."}
        </p>
      </div>
    </section>

    {/* Skills 🧠 */}
    <section>
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
        🧠 <span>Skills</span>
      </h2>
      <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
        <p className="text-gray-800">{data.skills || "Your skills here"}</p>
      </div>
    </section>

    {/* Footer Line 🌈 */}
    <div className="mt-10">
      <hr className="h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 border-0 rounded-full" />
    </div>
  </div>
);

export default TemplateThree;
