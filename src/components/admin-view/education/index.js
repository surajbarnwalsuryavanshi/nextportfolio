"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-10">
            {data && data.length
              ? data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 border p-4 border-green-700"
                  >
                    <p>{item.degree}</p>
                    <p>{item.year}</p>
                    <p>{item.college}</p>
                  </div>
                ))
              : null}
          </div>
          <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
          />
          <button
            onClick={() => handleSaveData("education")}
            className="mt-[10px] border border-green-600 px-4 py-3 font-bold text-[16px] cursor-pointer"
          >
            Add Info
          </button>
        </div>
      </div>
    </>
  );
}
