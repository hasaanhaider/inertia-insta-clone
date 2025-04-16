import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function PopupModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const { data, setData, post, reset, errors } = useForm({
    post_image: null,
    post_description: "",
  });

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setData("post_image", selected);
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      setFile(dropped);
      setData("post_image", dropped);
    }
  };

  const preventDefault = (e) => e.preventDefault();

  const handleSubmit = () => {
    post("/post/store", {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setFile(null);
        setStep(1);
        onClose();
        setShowSuccess(true); // Show success modal
        setTimeout(() => setShowSuccess(false), 3000); // Auto-close after 3s
      },
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-2xl h-full sm:h-auto sm:rounded-xl overflow-hidden shadow-lg relative">
          {/* Header */}
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

          {/* Content */}
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
                {errors.post_image && (
                  <p className="text-red-500 text-sm mt-2">{errors.post_image}</p>
                )}
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
                  value={data.post_description}
                  onChange={(e) => setData("post_description", e.target.value)}
                />
                {errors.post_description && (
                  <p className="text-red-500 text-sm mt-2">{errors.post_description}</p>
                )}
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold w-full"
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Post uploaded successfully!
        </div>
      )}
    </>
  );
}
