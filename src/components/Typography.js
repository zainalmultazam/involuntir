export const Title = ({ children, className }) => {
  return (
    <h1 className={`text-7xl ${className}`}>
      {children}
    </h1>
  )
}

export const Text = ({ children, className }) => {
  return (
    <p className={`text-[15px] ${className}`}>
      {children}
    </p>
  )
}

export const Small = ({ children, className }) => {
  return (
    <p className={`text-lg text-gray-500 ${className}`}>
      {children}
    </p>
  )
}

export const Heading = ({ children, className }) => {
  return (
    <h1 className={`text-2xl ${className}`}>
      {children}
    </h1>
  )
}
