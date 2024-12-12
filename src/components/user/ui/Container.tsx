import { cva } from 'class-variance-authority'

interface ContainerProps {
	size?: 'sm' | 'xl'
	className?: string
	children: React.ReactNode
}

const containerVariants = cva('mx-auto', {
	variants: {
		size: {
			sm: 'max-w-[1330px]',
			xl: 'max-w-[1450px] px-2.5'
		}
	},
	defaultVariants: {
		size: 'sm'
	}
})

export const Container = (props: ContainerProps) => {
	const { children, size } = props

	return <div className={containerVariants({ size })}>{children}</div>
}
