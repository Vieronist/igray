interface ContainerProps {
	children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
	const { children } = props

	return <div className={`max-w-[1450px] mx-auto px-[10px]`}>{children}</div>
}
