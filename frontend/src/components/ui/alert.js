// components/ui/alert.js

export function Alert({ children, variant = "info" }) {
  // Choose styles based on the variant (you can extend this to include 'success', 'error', etc.)
  const variantStyles = {
    info: "bg-blue-100 text-blue-800 border-blue-400",
    success: "bg-green-100 text-green-800 border-green-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    error: "bg-red-100 text-red-800 border-red-400",
  };

  return (
    <div
      className={`border-l-4 p-4 ${variantStyles[variant] || variantStyles.info} rounded-lg`}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ children }) {
  return <p className="text-sm">{children}</p>;
}
