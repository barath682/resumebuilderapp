// import React from "react";

// const ResumePreview = React.forwardRef(({ data, TemplateComponent }, ref) => {
//   return (
//     <div ref={ref} className="w-full max-w-3xl mx-auto border p-6 bg-white">
//       <TemplateComponent data={data} />
//     </div>
//   );
// });

// export default ResumePreview;
import React from "react";

const ResumePreview = React.forwardRef(({ data, TemplateComponent }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-md p-6 my-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.005]"
    >
      <div className="bg-white p-5 rounded-lg shadow-inner border border-gray-200">
        <TemplateComponent data={data} />
      </div>
    </div>
  );
});

export default ResumePreview;
