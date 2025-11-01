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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!resume) return <p className="text-center mt-10 text-red-600">Resume not found.</p>;

  const TemplateComponent = TEMPLATES[resume.template] || TemplateOne;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white rounded shadow p-6 max-w-3xl w-full">
        <TemplateComponent data={resume.data} />
      </div>
    </div>
  );
};

export default PublicResume;
