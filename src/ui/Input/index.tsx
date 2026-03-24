interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
}

export const Input = (props: IInputProps) => {
  const { placeholder, label, onChange, error, type } = props
  return (
    <div>
      <label>
        <span className="font-bold text-gray-400 block mb-1">{label}</span>
        <input
          placeholder={placeholder}
          onChange={onChange}
          type={type ?? "text"}
          className={`w-full  rounded bg-[#101828] border ${
            error ? "border-red-500" : "border-gray-700"
          }`}
          style={{ padding: 8 }}
        />
      </label>
    </div>
  )
}
