interface IButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
}

export const Button = (props: IButtonProps) => {
  const { label, onClick, type } = props
  return (
    <button
      className=" bg-indigo-600 rounded-md cursor-pointer w-full font-bold"
      style={{ padding: 8 }}
      onClick={onClick}
      type={type ?? "button"}
    >
      {label}
    </button>
  )
}
