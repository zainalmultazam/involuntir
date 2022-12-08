const Input = props => {
  const { placeholder, className, ...other } = props

  return (
    <div className={`flex flex-col ${className}`}>
      <input
        className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900
        rounded-base"
        placeholder={placeholder}
        {...other}
      />
    </div>
  )
}

export default Input

export const InputWithIcon = props => {
  const { placeholder, className, icon } = props

  return (
    <div className={`relative flex items-center ${className}`}>
      <input
        type="text"
        className={`bg-transparent w-[188px] h-[40px] text-[14px] pl-3 pr-10 text-base
        rounded-base focus:outline-none placeholder-black border border-gray-200`}
        placeholder={placeholder}
      />

      <div className="absolute right-0 px-3 pointer-events-none">
        {icon}
      </div>
    </div>
  )
}

export const SelectInput = ({ placeholder }) => {
  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        className="w-[130px] h-[40px] text-[14px] bg-transparent border border-gray-200 pl-3 pr-8 text-base
        rounded-base focus:outline-none placeholder-black appearance-none"
        placeholder={placeholder}>
        <option className="border border-gray-200 rounded-base">Terbaru</option>
        <option>Another option</option>
        <option>And one more</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd" fillRule="evenodd"/>
        </svg>
      </div>
    </div>
  )
}
