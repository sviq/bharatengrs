export default function CompanyStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
            {stat.value}
          </div>
          <div className="text-lg text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

