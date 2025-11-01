import React from "react";

const ResumePreview = React.forwardRef(({ data, TemplateComponent }, ref) => {
  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto border p-6 bg-white">
      <TemplateComponent data={data} />
    </div>
  );
});

export default ResumePreview;
