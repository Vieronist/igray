import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<section>
			<div className='mb-[100px] flex justify-between'>
				<div className='w-[650px]'>
					<h3 className='text-[32px] font-extrabold mb-[23px] leading-[35.2px] mt-5 text-gray-800'>
						Страница, которую Вы ищете, не может быть найдена
					</h3>
					<p className='text-[18px] font-normal mb-[32px] text-gray-800'>
						Возможно, вы перешли по ссылке, в которой была допущена ошибка, или
						ресурс был удален. Попробуйте перейти на главную страницу
					</p>
					<Link
						href={"/"}
						className='w-[98%] py-[21px] md:w-[50%] mb-[21px] sm:mb-0 bg-bg_color block text-white text-center rounded-[18px] '
					>
						Перейти на главную
					</Link>
				</div>
				<Image
					className='hidden xl:block'
					src={"404.svg"}
					alt='404'
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
}
