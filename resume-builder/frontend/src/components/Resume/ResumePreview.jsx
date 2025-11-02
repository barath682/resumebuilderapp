// import React from "react";

// const ResumePreview = React.forwardRef(({ data, TemplateComponent }, ref) => {
//   return (
//     <div ref={ref} className="w-full max-w-3xl mx-auto border p-6 bg-white">
//       <TemplateComponent data={data} />
//     </div>
//   );
// });

// export default ResumePreview;
// import React from "react";

// const ResumePreview = React.forwardRef(({ data, TemplateComponent }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-md p-6 my-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.005]"
//     >
//       <div className="bg-white p-5 rounded-lg shadow-inner border border-gray-200">
//         <TemplateComponent data={data} />
//       </div>
//     </div>
//   );
// });

// export default ResumePreview;
import React from "react";

// NEW (correct for Vite/frontends)
const API_BASE = import.meta.env.VITE_REACT_APP_API_URL || "https://resumebuilderapp3.onrender.com";

const ResumePreview = React.forwardRef(({ data, TemplateComponent, publicId }, ref) => {
  // Only show the public link if publicId exists
  const publicUrl = publicId ? `${API_BASE}/resume/public/${publicId}` : "";

  return (
    <div
      ref={ref}
      className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-md p-6 my-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.005]"
    >
      {/* Public share link box */}
      {publicId && (
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between bg-blue-50 border border-blue-300 p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-blue-700">Public Resume Link:</span>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <input
              value={publicUrl}
              readOnly
              className="border rounded px-2 py-1 text-sm bg-blue-100 w-64"
            />
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              onClick={() => {
                navigator.clipboard.writeText(publicUrl);
                alert("Public resume link copied!");
              }}
            >
              Copy
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-5 rounded-lg shadow-inner border border-gray-200">
        <TemplateComponent data={data} />
      </div>
    </div>
  );
});

export default ResumePreview;

