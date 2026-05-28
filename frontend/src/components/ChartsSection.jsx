import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

function ChartsSection({
  scopeData,
  statusData,
  COLORS,
}) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

      <div className="bg-white p-6 rounded-lg shadow">

        <h2 className="text-2xl font-bold mb-4">
          Scope Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={scopeData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >

              {scopeData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="bg-white p-6 rounded-lg shadow">

        <h2 className="text-2xl font-bold mb-4">
          Review Analytics
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={statusData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="value"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default ChartsSection;