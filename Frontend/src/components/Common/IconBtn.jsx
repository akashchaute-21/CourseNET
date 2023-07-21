export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) { 
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={` flex items-center ${
        outline ? "bg-transparent border-2 border-[#4db5ff]" : "bg-tyellow3 border-2 border-tblue2 font-semibold"
      } cursor-pointer gap-x-3 rounded-md  py-2 px-5 text-tblue2 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-[#4db5ff]"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
