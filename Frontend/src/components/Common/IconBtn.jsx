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
      className={`flex items-center bg-tblue2 text-tyellow3
       cursor-pointer gap-x-2 rounded-md py-2 px-5 text-white ${customClasses}`}
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
