export default function FormButton({ children, disabled = false, type = 'button', ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

