interface IInputMultilineProps extends React.TextareaHTMLAttributes<any> {
  label: string
}

export const InputMultiline = (props: IInputMultilineProps) => {
  const { placeholder, label, onChange } = props
  return (
    <div>
      <label>
        <span className="font-bold text-gray-400 block mb-1">{label}</span>
        <textarea
          rows={2}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded bg-[#101828] border text-gray-400`}
          style={{ padding: 8 }}
        />
      </label>
    </div>
  )
}
