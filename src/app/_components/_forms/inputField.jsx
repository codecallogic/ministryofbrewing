
import SVG from "@/app/_libs/svg"

const InputField = ({
  label,
  item,
  property,
  dispatch,
  stateMethod,
  validation,
  validationMethod,
  id
}) => {
  
  return (
    <div className="relative ">
      <input 
        type="text" 
        id={id}
        className="
          peer 
          p-5 
          block 
          w-full 
          border-schemefour
          border-[1px]
          rounded-2xl
          text-[18px] 
          placeholder:text-transparent 
          focus:border-schemefour
          focus:ring-schemefour 
          focus:outline-schemefour
          disabled:opacity-50 
          disabled:pointer-events-none 
          dark:bg-slate-900 
          dark:border-gray-700 
          dark:text-white 
          dark:focus:ring-gray-600
          focus:pt-7
          focus:pb-3
          [&:not(:placeholder-shown)]:pt-7
          [&:not(:placeholder-shown)]:pb-3
          autofill:pt-7
          autofill:pb-3
          outline-transparent
        "
        value={item[property].length > 0 ? item[property] : ''}
        onChange={(e) => 
          validation 
          ? 
           (
            validationMethod(id, e),
            dispatch(stateMethod({ value: e.target.value, type: property }))
           )
          :
          dispatch(stateMethod({ value: e.target.value, type: property }))
        }
        placeholder={label}
      />
      <label 
        htmlFor="hs-floating-input-email" 
        className="
        absolute 
        top-0 
        start-0 
        p-3 
        h-full 
        text-sm 
        truncate 
        pointer-events-none 
        transition 
        ease-in-out 
        duration-100 
        border 
        border-transparent 
        peer-disabled:opacity-50 
        peer-disabled:pointer-events-none
        peer-focus:text-xs
        peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
        peer-[:not(:placeholder-shown)]:text-xs
        peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500
        capitalize
      ">
        {label}
      </label>
    </div>
  )
}

export default InputField
