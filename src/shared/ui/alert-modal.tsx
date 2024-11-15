import Modal from "@mui/material/Modal";
import { FC } from "react";

interface AlertModalProps {

  isVisible: boolean;
  isAdmin?: boolean;
}

export const AlertModal: FC<AlertModalProps> = ({ isVisible, isAdmin }) => {
  return (
    <Modal sx={{borderRadius: "20px", opacity:1, zIndex: 100}} open={isVisible} className="w-1/2 bg-white mx-auto h-[300px] mt-[7%] rounded-xl">
      <div className="">
        <h3 className="text-[#4FCA9C] text-5xl mb-[20px] text-center mt-[5%]">{isAdmin ? "Успешно!" : "Вы ввели не валидные данные!"}</h3>
      </div>
    </Modal>
  );
};
