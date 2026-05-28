function DashboardCards({
  totalRecords,
  approvedRecords,
  rejectedRecords,
  flaggedRecords,
}) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

      <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transition duration-300">

        <h2 className="text-gray-500 text-sm">
          Total Records
        </h2>

        <p className="text-3xl font-bold mt-2">
          {totalRecords}
        </p>

      </div>

      <div className="bg-green-100 p-6 rounded-lg shadow hover:scale-105 transition duration-300">

        <h2 className="text-green-700 text-sm">
          Approved
        </h2>

        <p className="text-3xl font-bold mt-2">
          {approvedRecords}
        </p>

      </div>

      <div className="bg-red-100 p-6 rounded-lg shadow hover:scale-105 transition duration-300">

        <h2 className="text-red-700 text-sm">
          Rejected
        </h2>

        <p className="text-3xl font-bold mt-2">
          {rejectedRecords}
        </p>

      </div>

      <div className="bg-yellow-100 p-6 rounded-lg shadow hover:scale-105 transition duration-300">

        <h2 className="text-yellow-700 text-sm">
          Flagged
        </h2>

        <p className="text-3xl font-bold mt-2">
          {flaggedRecords}
        </p>

      </div>

    </div>

  );

}

export default DashboardCards;