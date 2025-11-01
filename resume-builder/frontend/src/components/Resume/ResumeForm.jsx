// import React from "react";

// const ResumeForm = ({ data, setData }) => {
//   const handleChange = (section, field, value) => {
//     setData({ ...data, [section]: { ...data[section], [field]: value } });
//   };

//   return (
//     <div className="space-y-6 p-4 max-w-3xl mx-auto">
//       {/* Personal Info */}
//       <section>
//         <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={data.personal.name}
//           onChange={(e) => handleChange("personal", "name", e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={data.personal.email}
//           onChange={(e) => handleChange("personal", "email", e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={data.personal.phone}
//           onChange={(e) => handleChange("personal", "phone", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </section>

//       {/* Education */}
//       <section>
//         <h3 className="font-semibold text-lg mb-2">Education</h3>
//         <input
//           type="text"
//           placeholder="Degree"
//           value={data.education.degree}
//           onChange={(e) => handleChange("education", "degree", e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Institution"
//           value={data.education.institution}
//           onChange={(e) => handleChange("education", "institution", e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Year"
//           value={data.education.year}
//           onChange={(e) => handleChange("education", "year", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </section>

//       {/* Experience */}
//       <section>
//         <h3 className="font-semibold text-lg mb-2">Experience</h3>
//         <textarea
//           placeholder="Describe your work experience"
//           value={data.experience.description}
//           onChange={(e) => handleChange("experience", "description", e.target.value)}
//           rows={4}
//           className="w-full border p-2 rounded"
//         />
//       </section>

//       {/* Skills */}
//       <section>
//         <h3 className="font-semibold text-lg mb-2">Skills (comma separated)</h3>
//         <input
//           type="text"
//           placeholder="e.g. JavaScript, React, Node.js"
//           value={data.skills}
//           onChange={(e) => setData({ ...data, skills: e.target.value })}
//           className="w-full border p-2 rounded"
//         />
//       </section>
//     </div>
//   );
// };

// export default ResumeForm;
import React from "react";

const ResumeForm = ({ data, setData }) => {
  const handleChange = (section, field, value) => {
    setData({ ...data, [section]: { ...data[section], [field]: value } });
  };

  return (
    <div className="space-y-10 p-10 max-w-3xl mx-auto bg-gradient-to-r from-indigo-100 to-blue-50 rounded-2xl shadow-2xl">
      {/* Personal Info */}
      <section className="text-center">
        <h3 className="font-bold text-2xl mb-6 text-indigo-700 tracking-wide">
          Personal Information
        </h3>
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Full Name"
            value={data.personal.name}
            onChange={(e) => handleChange("personal", "name", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.personal.email}
            onChange={(e) => handleChange("personal", "email", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
          <input
            type="text"
            placeholder="Phone"
            value={data.personal.phone}
            onChange={(e) => handleChange("personal", "phone", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
        </div>
      </section>

      {/* Education */}
      <section className="text-center">
        <h3 className="font-bold text-2xl mb-6 text-indigo-700 tracking-wide">
          Education
        </h3>
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Degree"
            value={data.education.degree}
            onChange={(e) => handleChange("education", "degree", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
          <input
            type="text"
            placeholder="Institution"
            value={data.education.institution}
            onChange={(e) => handleChange("education", "institution", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
          <input
            type="text"
            placeholder="Year"
            value={data.education.year}
            onChange={(e) => handleChange("education", "year", e.target.value)}
            className="w-[420px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="text-center">
        <h3 className="font-bold text-2xl mb-6 text-indigo-700 tracking-wide">
          Experience
        </h3>
        <textarea
          placeholder="Describe your work experience"
          value={data.experience.description}
          onChange={(e) => handleChange("experience", "description", e.target.value)}
          rows={5}
          className="w-[460px] border border-gray-300 p-4 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
        />
      </section>

      {/* Skills */}
      <section className="text-center">
        <h3 className="font-bold text-2xl mb-6 text-indigo-700 tracking-wide">
          Skills (comma separated)
        </h3>
        <input
          type="text"
          placeholder="e.g. JavaScript, React, Node.js"
          value={data.skills}
          onChange={(e) => setData({ ...data, skills: e.target.value })}
          className="w-[460px] border border-gray-300 p-3 rounded-lg text-gray-800 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
        />
      </section>
    </div>
  );
};

export default ResumeForm;
