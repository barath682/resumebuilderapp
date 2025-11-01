// import React, { useState, useRef } from "react";
// import ResumeForm from "../components/Resume/ResumeForm";
// import ResumePreview from "../components/Resume/ResumePreview";
// import TemplateOne from "../components/Resume/Templates/TemplateOne";
// import TemplateTwo from "../components/Resume/Templates/TemplateTwo";
// import TemplateThree from "../components/Resume/Templates/TemplateThree";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const TEMPLATES = {
//   one: TemplateOne,
//   two: TemplateTwo,
//   three: TemplateThree,
// };

// const Editor = () => {
//   const [data, setData] = useState({
//     personal: { name: "", email: "", phone: "" },
//     education: { degree: "", institution: "", year: "" },
//     experience: { description: "" },
//     skills: "",
//   });

//   const [selectedTemplate, setSelectedTemplate] = useState("one");
//   const previewRef = useRef();

//   const exportPDF = async () => {
//     const element = previewRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "pt", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("resume.pdf");
//   };

//   const TemplateComponent = TEMPLATES[selectedTemplate];

//   return (
//     <div className="min-h-screen p-8 bg-gray-100 flex flex-col lg:flex-row gap-6">
//       <div className="flex-1 bg-white rounded shadow p-4 overflow-auto max-h-[90vh]">
//         <h2 className="text-xl font-semibold mb-4">Resume Details</h2>
//         <ResumeForm data={data} setData={setData} />
//         <div className="my-4">
//           <label className="mr-2 font-semibold">Select Template:</label>
//           <select
//             value={selectedTemplate}
//             onChange={(e) => setSelectedTemplate(e.target.value)}
//             className="border rounded p-1"
//           >
//             <option value="one">Template One</option>
//             <option value="two">Template Two</option>
//             <option value="three">Template Three</option>
//           </select>
//         </div>
//         <button
//           onClick={exportPDF}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
//         >
//           Export as PDF
//         </button>
//       </div>
//       <div className="flex-1 bg-white rounded shadow p-4 overflow-auto max-h-[90vh]">
//         <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
//         <ResumePreview ref={previewRef} data={data} TemplateComponent={TemplateComponent} />
//       </div>
//     </div>
//   );
// };

// export default Editor;
import React, { useState, useRef } from "react";
import ResumeForm from "../components/Resume/ResumeForm";
import ResumePreview from "../components/Resume/ResumePreview";
import TemplateOne from "../components/Resume/Templates/TemplateOne";
import TemplateTwo from "../components/Resume/Templates/TemplateTwo";
import TemplateThree from "../components/Resume/Templates/TemplateThree";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TEMPLATES = {
  one: TemplateOne,
  two: TemplateTwo,
  three: TemplateThree,
};

const Editor = () => {
  const [data, setData] = useState({
    personal: { name: "", email: "", phone: "" },
    education: { degree: "", institution: "", year: "" },
    experience: { description: "" },
    skills: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("one");
  const previewRef = useRef();

  const exportPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  const TemplateComponent = TEMPLATES[selectedTemplate];

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col lg:flex-row gap-8 transition-all duration-300">
      {/* Left Panel - Form */}
      <div className="flex-1 bg-white rounded-2xl shadow-2xl p-6 overflow-auto max-h-[90vh] border border-gray-200 hover:shadow-indigo-200 transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Resume Details</h2>
        <ResumeForm data={data} setData={setData} />

        <div className="my-6 text-center">
          <label className="mr-3 font-semibold text-gray-700 text-lg">Select Template:</label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="border border-indigo-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
          >
            <option value="one">Template One</option>
            <option value="two">Template Two</option>
            <option value="three">Template Three</option>
          </select>
        </div>
        

        <div className="flex justify-center">
          <button
            onClick={exportPDF}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-200"
          >
            Export as PDF
          </button>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="flex-1 bg-white rounded-2xl shadow-2xl p-6 overflow-auto max-h-[90vh] border border-gray-200 hover:shadow-blue-200 transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Live Preview</h2>
        <ResumePreview ref={previewRef} data={data} TemplateComponent={TemplateComponent} />
      </div>
    </div>
  );
};

export default Editor;
