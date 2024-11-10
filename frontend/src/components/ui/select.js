// components/ui/select.js
export function Select({ children, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 border border-gray-300 rounded"
    >
      {children}
    </select>
  );
}

export function SelectContent({ children }) {
  return <div>{children}</div>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

export function SelectTrigger({ children }) {
  return (
    <div className="cursor-pointer p-2 bg-gray-100 border rounded">{children}</div>
  );
}

export function SelectValue({ children }) {
  return <div>{children}</div>;
}
