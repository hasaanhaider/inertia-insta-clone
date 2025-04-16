import React, { useState } from "react";

export default function PopupModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const preventDefault = (e) => e.preventDefault();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl h-full sm:h-auto sm:rounded-xl overflow-hidden shadow-lg relative">
        {/* Top Nav */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div>
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="text-blue-500 font-semibold">
                Back
              </button>
            )}
          </div>
          <h2 className="text-lg font-semibold">
            {step === 1 ? "Create new post" : "Add a caption"}
          </h2>
          <div className="flex gap-4 items-center">
            {step < 2 && (
              <button
                onClick={() => setStep(step + 1)}
                className="text-blue-500 font-semibold"
                disabled={!file}
              >
                Next
              </button>
            )}
            <button onClick={onClose} className="text-gray-500 hover:text-black text-xl font-bold">
              &times;
            </button>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {step === 1 && (
            <div
              onDrop={handleFileDrop}
              onDragOver={preventDefault}
              className="border-2 border-dashed border-gray-400 rounded-lg h-64 flex flex-col justify-center items-center text-gray-500 hover:bg-gray-100"
            >
              <p className="mb-2">Drag & drop an image here</p>
              <p className="mb-2">or</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              {file && <p className="mt-4 text-sm text-green-500">Selected: {file.name}</p>}
            </div>
          )}

          {step === 2 && (
            <div>
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="mb-4 w-full h-64 object-cover rounded"
                />
              )}
              <textarea
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring"
                rows="4"
                placeholder="Write a caption..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold w-full"
                onClick={() => {
                  alert("Post submitted!");
                  onClose();
                }}
              >
                Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
