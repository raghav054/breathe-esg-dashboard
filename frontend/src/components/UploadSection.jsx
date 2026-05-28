import { useRef } from "react";

function UploadSection({
  loading,
  sourceType,
  setSourceType,
  setSelectedFile,
  uploadFile,
}) {

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    await uploadFile();

    setSelectedFile(null);

    fileInputRef.current.value = "";
  };

  return (

    <div className="bg-white p-6 rounded-lg shadow mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Upload Emissions Data
      </h2>

      <div className="flex flex-wrap gap-4 items-center">

        <select
          value={sourceType}
          onChange={(e) =>
            setSourceType(e.target.value)
          }
          className="border p-2 rounded"
        >

          <option value="SAP">
            SAP
          </option>

          <option value="UTILITY">
            Utility
          </option>

          <option value="TRAVEL">
            Travel
          </option>

        </select>

        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="border p-2 rounded"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white px-6 py-2 rounded"
        >
          {loading ? "Uploading..." : "Upload CSV"}
        </button>

      </div>

    </div>

  );

}

export default UploadSection;