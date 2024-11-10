// components/ui/label.js
export function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor} className="block text-sm text-gray-700">{children}</label>;
}
