function RecordsTable({
  filteredRecords,
  approveRecord,
  rejectRecord,
}) {

  return (

    <div className="bg-white shadow-lg rounded-lg overflow-x-auto">

      <table className="w-full">

        <thead className="bg-gray-800 text-white">

          <tr>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Scope
            </th>

            <th className="p-4 text-left">
              Value
            </th>

            <th className="p-4 text-left">
              Unit
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Flagged
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {filteredRecords.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="text-center p-8 text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}

          {filteredRecords.map((record) => (

            <tr
              key={record.id}
              className={`border-b hover:bg-gray-50 transition duration-200 ${
                record.is_flagged
                  ? "bg-red-50"
                  : "bg-white"
              }`}
            >

              <td className="p-4">
                {record.category}
              </td>

              <td className="p-4">
                {record.scope}
              </td>

              <td className="p-4">
                {record.activity_value}
              </td>

              <td className="p-4">
                {record.unit}
              </td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                    record.status === "APPROVED"
                      ? "bg-green-600"
                      : record.status === "REJECTED"
                      ? "bg-red-600"
                      : record.status === "REVIEW"
                      ? "bg-orange-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {record.status}
                </span>

              </td>

              <td className="p-4">

                {record.is_flagged ? (

                  <span className="text-red-600 font-bold">
                    Yes
                  </span>

                ) : (

                  <span className="text-green-600 font-bold">
                    No
                  </span>

                )}

              </td>

              <td className="p-4 space-x-2">

                <button
                  onClick={() =>
                    approveRecord(record.id)
                  }
                  disabled={
                    record.locked_for_audit ||
                    record.status === "APPROVED" ||
                    record.status === "REJECTED"
                  }
                  className={`px-4 py-2 rounded text-white ${
                    record.locked_for_audit ||
                    record.status === "APPROVED" ||
                    record.status === "REJECTED"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 transition duration-200"
                  }`}
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    rejectRecord(record.id)
                  }
                  disabled={
                    record.locked_for_audit ||
                    record.status === "APPROVED" ||
                    record.status === "REJECTED"
                  }
                  className={`px-4 py-2 rounded text-white ${
                    record.locked_for_audit ||
                    record.status === "APPROVED" ||
                    record.status === "REJECTED"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 transition duration-200"
                  }`}
                >
                  Reject
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecordsTable;