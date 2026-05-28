function Filters({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  scopeFilter,
  setScopeFilter,
  statusFilter,
  setStatusFilter,
  flaggedOnly,
  setFlaggedOnly,
}) {

  return (

    <div className="bg-white p-6 rounded-lg shadow mb-6 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Search category..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >

        <option value="">
          Sort By Value
        </option>

        <option value="HIGH_TO_LOW">
          High to Low
        </option>

        <option value="LOW_TO_HIGH">
          Low to High
        </option>

      </select>

      <select
        value={scopeFilter}
        onChange={(e) =>
          setScopeFilter(e.target.value)
        }
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >

        <option value="">
          All Scopes
        </option>

        <option value="Scope 1">
          Scope 1
        </option>

        <option value="Scope 2">
          Scope 2
        </option>

        <option value="Scope 3">
          Scope 3
        </option>

      </select>

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >

        <option value="">
          All Status
        </option>

        <option value="PENDING">
          Pending
        </option>

        <option value="APPROVED">
          Approved
        </option>

        <option value="REJECTED">
          Rejected
        </option>

      </select>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={flaggedOnly}
          onChange={() =>
            setFlaggedOnly(!flaggedOnly)
          }
        />

        Flagged Only

      </label>

    </div>

  );

}

export default Filters;