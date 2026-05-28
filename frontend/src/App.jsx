import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DashboardCards from "./components/DashboardCards";
import UploadSection from "./components/UploadSection";
import Filters from "./components/Filters";
import ChartsSection from "./components/ChartsSection";
import RecordsTable from "./components/RecordsTable";

import {
  fetchEmissionRecords,
  approveEmissionRecord,
  rejectEmissionRecord,
  uploadEmissionFile,
} from "./services/api";

function App() {

  const [records, setRecords] = useState([]);

  const [scopeFilter, setScopeFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [flaggedOnly, setFlaggedOnly] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [sourceType, setSourceType] = useState("SAP");

  const [searchTerm, setSearchTerm] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  const [loading, setLoading] = useState(false);

  const totalRecords = records.length;

  const approvedRecords = records.filter(
    (record) => record.status === "APPROVED"
  ).length;

  const rejectedRecords = records.filter(
    (record) => record.status === "REJECTED"
  ).length;

  const flaggedRecords = records.filter(
    (record) => record.is_flagged
  ).length;

  const scopeData = [
    {
      name: "Scope 1",
      value: records.filter(
        (r) => r.scope === "Scope 1"
      ).length,
    },

    {
      name: "Scope 2",
      value: records.filter(
        (r) => r.scope === "Scope 2"
      ).length,
    },

    {
      name: "Scope 3",
      value: records.filter(
        (r) => r.scope === "Scope 3"
      ).length,
    },
  ];

  const statusData = [
    {
      name: "Approved",
      value: approvedRecords,
    },

    {
      name: "Rejected",
      value: rejectedRecords,
    },

    {
      name: "Flagged",
      value: flaggedRecords,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
  ];

  const filteredRecords = records
    .filter((record) => {

      const scopeMatch =
        !scopeFilter ||
        record.scope === scopeFilter;

      const statusMatch =
        !statusFilter ||
        record.status === statusFilter;

      const flaggedMatch =
        !flaggedOnly ||
        record.is_flagged;

      const searchMatch =
        record.category
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())

      return (
        scopeMatch &&
        statusMatch &&
        flaggedMatch &&
        searchMatch
      );

    })

    .sort((a, b) => {

      if (sortOrder === "HIGH_TO_LOW") {

        return (
          b.activity_value -
          a.activity_value
        );

      }

      if (sortOrder === "LOW_TO_HIGH") {

        return (
          a.activity_value -
          b.activity_value
        );

      }

      return 0;

    });

  useEffect(() => {

    fetchRecords();

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {

        setDebouncedSearch(searchTerm);

    }, 600);

    return () => clearTimeout(timer);

   }, [searchTerm]);

  const fetchRecords = async () => {

    try {

      const response =
        await fetchEmissionRecords();

      setRecords(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const approveRecord = async (id) => {

    try {

      await approveEmissionRecord(id);

      fetchRecords();

    } catch (error) {

      console.log(error);

    }

  };

  const rejectRecord = async (id) => {

    try {

      await rejectEmissionRecord(id);

      fetchRecords();

    } catch (error) {

      console.log(error);

    }

  };

  const uploadFile = async () => {

    if (!selectedFile) {

      toast.warning("Please select a CSV file");

      return;

    }

    const formData = new FormData();

    formData.append("company", 1);

    formData.append(
      "source_type",
      sourceType
    );

    formData.append(
      "uploaded_file",
      selectedFile
    );

    try {

      setLoading(true);

      await uploadEmissionFile(formData);

      setLoading(false);

      toast.success("File uploaded successfully");

      fetchRecords();

    } catch (error) {

      setLoading(false);

      console.log(error);

      toast.error("Upload failed");

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Breathe ESG Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Emissions ingestion, review and audit workflow
        </p>

      </div>

      <UploadSection
        loading={loading}
        sourceType={sourceType}
        setSourceType={setSourceType}
        setSelectedFile={setSelectedFile}
        uploadFile={uploadFile}
      />

      <DashboardCards
        totalRecords={totalRecords}
        approvedRecords={approvedRecords}
        rejectedRecords={rejectedRecords}
        flaggedRecords={flaggedRecords}
      />

      <ChartsSection
        scopeData={scopeData}
        statusData={statusData}
        COLORS={COLORS}
      />

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        scopeFilter={scopeFilter}
        setScopeFilter={setScopeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        flaggedOnly={flaggedOnly}
        setFlaggedOnly={setFlaggedOnly}
      />

      <RecordsTable
        filteredRecords={filteredRecords}
        approveRecord={approveRecord}
        rejectRecord={rejectRecord}
      />

      <ToastContainer />

    </div>

  );

}

export default App;