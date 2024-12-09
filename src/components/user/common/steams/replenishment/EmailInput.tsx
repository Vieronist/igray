import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { IPaymentInputs } from '@/types/payments.interface'

interface IProps {
	register: UseFormRegister<IPaymentInputs>
	errors: FieldErrors<IPaymentInputs>
}

export const EmailInput: FC<IProps> = ({ register, errors }) => {
	return (
		<>
			<div className='border-light_green border rounded-[18px] h-size_1 py-[10px] px-[15px] '>
				<label htmlFor='email' className='block font-medium text-xs'>
					Электронная почта
				</label>
				<input
					type='text'
					{...register('email', {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
					})}
					placeholder='name@mail.com'
					className='outline-none placeholder:text-gray_color'
				/>
			</div>
			<p className='mb-[15px]'>
				{errors.email && (
					<span className='text-red-600 text-xs ml-2'>
						Электронная почта обязательна
					</span>
				)}
			</p>
		</>
	)
}
