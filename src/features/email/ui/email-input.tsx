export const EmailInput = () => {
  return (
    <div className="border-[#DDF1EA] border rounded-[18px] py-[10px] px-[15px] mb-[15px]">
      <label htmlFor="email" className="block text-gray-800">
        Электронная почта
      </label>
      <input type="text" placeholder="name@mail.com" className="outline-none" />
    </div>
  );
};
