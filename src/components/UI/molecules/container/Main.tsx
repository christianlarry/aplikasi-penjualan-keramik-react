interface Props extends React.HTMLAttributes<HTMLElement>{}

const Main = ({
  children,
  ...props
}:Props)=>{
  return (
    <main {...props}>
      <div className="flex flex-col gap-20 px-5">
        {children}
      </div>
    </main>
  )
}

export default Main