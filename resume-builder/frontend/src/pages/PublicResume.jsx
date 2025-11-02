// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getResume } from "../api";
// import TemplateOne from "../components/Resume/Templates/TemplateOne";
// import TemplateTwo from "../components/Resume/Templates/TemplateTwo";
// import TemplateThree from "../components/Resume/Templates/TemplateThree";

// const TEMPLATES = {
//   one: TemplateOne,
//   two: TemplateTwo,
//   three: TemplateThree,
// };

// const PublicResume = () => {
//   const { id } = useParams();
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await getResume(id);
//         setResume(res.data);
//       } catch {
//         setResume(null);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!resume) return <p className="text-center mt-10 text-red-600">Resume not found.</p>;

//   const TemplateComponent = TEMPLATES[resume.template] || TemplateOne;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
//       <div className="bg-white rounded shadow p-6 max-w-3xl w-full">
//         <TemplateComponent data={resume.data} />
//       </div>
//     </div>
//   );
// };

// export default PublicResume;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResume } from "../api";
import TemplateOne from "../components/Resume/Templates/TemplateOne";
import TemplateTwo from "../components/Resume/Templates/TemplateTwo";
import TemplateThree from "../components/Resume/Templates/TemplateThree";

const TEMPLATES = {
  one: TemplateOne,
  two: TemplateTwo,
  three: TemplateThree,
};

const PublicResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getResume(id);
        setResume(res.data);
      } catch {
        setResume(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-20 text-lg text-indigo-600 animate-pulse">
        Loading Resume...
      </p>
    );

  if (!resume)
    return (
      <p className="text-center mt-20 text-red-600 text-lg font-semibold">
        Resume not found.
      </p>
    );

  const TemplateComponent = TEMPLATES[resume.template] || TemplateOne;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-8">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-3xl w-full transition-all duration-300 hover:shadow-indigo-200 hover:scale-[1.01]">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Public Resume</h1>
          <p className="text-gray-600 text-sm">
            View and share your professional resume
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-inner p-6">
          <TemplateComponent data={resume.data} />
        </div>
      </div>
    </div>
  );
};

export default PublicResume;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios"; // Use axios for unauthenticated public fetch
// import TemplateOne from "../components/Resume/Templates/TemplateOne";
// import TemplateTwo from "../components/Resume/Templates/TemplateTwo";
// import TemplateThree from "../components/Resume/Templates/TemplateThree";

// const TEMPLATES = {
//   one: TemplateOne,
//   two: TemplateTwo,
//   three: TemplateThree,
// };

// // NEW (correct for Vite/frontends)
// const API_BASE = import.meta.env.VITE_REACT_APP_API_URL || "https://resumebuilderapp2.onrender.com";

// const PublicResume = () => {
//   const { publicId } = useParams();
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         // GET resume via public endpoint, no auth required
//         const res = await axios.get(`${API_BASE}/resume/public/${publicId}`);
//         setResume(res.data);
//       } catch {
//         setResume(null);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [publicId]);

//   if (loading)
//     return (
//       <p className="text-center mt-20 text-lg text-indigo-600 animate-pulse">
//         Loading Resume...
//       </p>
//     );

//   if (!resume)
//     return (
//       <p className="text-center mt-20 text-red-600 text-lg font-semibold">
//         Resume not found.
//       </p>
//     );

//   const TemplateComponent = TEMPLATES[resume.template] || TemplateOne;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-8">
//       <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-3xl w-full transition-all duration-300 hover:shadow-indigo-200 hover:scale-[1.01]">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-indigo-700 mb-2">Public Resume</h1>
//           <p className="text-gray-600 text-sm">
//             View and share your professional resume
//           </p>
//         </div>

//         <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-inner p-6">
//           <TemplateComponent data={resume.data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublicResume;
