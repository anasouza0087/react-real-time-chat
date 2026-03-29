import { useState } from "react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
}

export const Input = (props: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { placeholder, label, onChange, error, type } = props


  return (
    <div>
      <label>
        <span className="font-bold text-gray-400 block mb-1">{label}</span>
        <div className="w-full relative">
          <input
            placeholder={placeholder}
            onChange={onChange}
            type={type === "password" && showPassword ? "text" : type}
            className={`w-full  rounded bg-[#101828] border ${
              error ? "border-red-500" : "border-gray-700"
            } text-gray-400`}
            {...props}
            style={{ padding: 8 }}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} />
              ) : (
                <AiOutlineEye fontSize={20} />
              )}
            </button>
          )}
        </div>
      </label>
    </div>
  )
}
