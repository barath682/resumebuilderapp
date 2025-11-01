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
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col lg:flex-row gap-6">
      <div className="flex-1 bg-white rounded shadow p-4 overflow-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Resume Details</h2>
        <ResumeForm data={data} setData={setData} />
        <div className="my-4">
          <label className="mr-2 font-semibold">Select Template:</label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="border rounded p-1"
          >
            <option value="one">Template One</option>
            <option value="two">Template Two</option>
            <option value="three">Template Three</option>
          </select>
        </div>
        <button
          onClick={exportPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Export as PDF
        </button>
      </div>
      <div className="flex-1 bg-white rounded shadow p-4 overflow-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <ResumePreview ref={previewRef} data={data} TemplateComponent={TemplateComponent} />
      </div>
    </div>
  );
};

export default Editor;
