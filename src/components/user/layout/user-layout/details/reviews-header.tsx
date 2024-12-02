import Link from "next/link";

export const ReviewsHeader = () => {
	return (
		<div className='p-[30px] md:px-[60px] md:pt-[60px]'>
			<h3 className='text-[#4FCA9C]  font-medium mb-8'>Отзывы</h3>
			<div className='flex items-center justify-between'>
				<h3 className='font-steppe font-extrabold leading-[35px] text-[32px] text-wrap min-w-[150px] md:text-[46px]  '>
					<span className='text-[#1F3238]'>Более 10 000 покупок, </span>
					<span className='text-[#4FCA9C]'>5 000 отзывов!</span>
				</h3>
				<Link
					className=' font-medium border-[#66D8AD] border rounded-[18px] py-[12px] px-5 hidden md:block text-gray-800'
					href='/reviews'
				>
					Все отзывы
				</Link>
			</div>
		</div>
	);
};
