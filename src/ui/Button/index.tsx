interface IButtonProps {
  label: string
  onClick: () => void
}

export const Button = (props: IButtonProps) => {
  const { label, onClick } = props
  return (
    <button
      className=" bg-indigo-600 rounded-md cursor-pointer"
      style={{ padding: 8, width: "100%" }}
      onClick={onClick}
    >
      <b>{label}</b>
    </button>
  )
}
