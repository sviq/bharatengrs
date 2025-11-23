import Image from 'next/image'

export default function ClientCard({ client }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={150}
          height={80}
          className="object-contain max-h-20"
        />
      ) : (
        <span className="text-gray-600 font-medium">{client.name}</span>
      )}
    </div>
  )
}

