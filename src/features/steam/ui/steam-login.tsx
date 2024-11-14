import { FC } from "react";

interface IProps {
  login: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SteamLogin: FC<IProps> = ({ login, onChange }) => {
  return (
    <div className="rounded-[18px] border-[#DDF1EA] border px-[15px] py-[10px] sm:basis-[70%]">
      <label htmlFor="login" className="block text-gray-800">Steam логин</label>
      <input
        onChange={onChange}
        value={login}
        type="text"
        placeholder="Name..."
        className="outline-none"
        id="login"
      />
    </div>
  );
};
