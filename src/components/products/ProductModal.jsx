'use client';

export default function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product?.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="space-y-4">
            {product?.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded"
              />
            )}
            <p className="text-gray-600">{product?.description}</p>
            {product?.specs && (
              <div>
                <h3 className="font-semibold mb-2">Specifications:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
