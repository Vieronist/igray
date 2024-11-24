
export const Container = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={`max-w-[1430px] mx-auto my-[20px] px-[8px]`}>
      {children}
    </div>
  )
}
