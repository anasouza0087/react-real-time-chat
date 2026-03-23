interface IInputProps {
  placeholder: string
  label: string
  onChange: (event: any) => void
  error?: boolean
}

export const Input = (props: IInputProps) => {
  const { placeholder, label, onChange, error } = props
  return (
    <div>
      <label>
        <span className="font-bold text-gray-400">{label}</span> <br />
        <input
          placeholder={placeholder}
          type="text"
          onChange={onChange}
          style={{
            border: `1px solid ${error ? "#EF4444" : "#374151"}`,
            borderRadius: 4,
            padding: 8,
            backgroundColor: "#101828",
            width: "100%",
          }}
        />
      </label>
    </div>
  )
}
