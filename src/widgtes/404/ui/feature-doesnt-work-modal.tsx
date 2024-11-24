
import { Box, Modal } from "@mui/material";
import { ReactSVG } from "react-svg";

import { useServiceStore } from "@/shared/";

export const FeatureDoesntWorkModal = () => {

  const { isModalVisible, setIsModalVisible } = useServiceStore()


  function removeHash() {
    
    history.replaceState(null, "", " ");

    setIsModalVisible(false)
  }

  return (
    <Modal open={isModalVisible} sx={{width:350, height:322, margin:"auto"}}>
      <Box sx={{ bgcolor: "white", p: 4, position:"relative" , borderRadius:15}}>
        <button onClick={removeHash} className="absolute top-5 right-[30px]">
          <ReactSVG height={20} width={20} src="X.svg" />
        </button>
        <h3 className="font-extrabold text-[32px] leading-[35px] mb-[27px]">Сервис недоступен</h3>
        <p className="text-[16px] leading-[19px] mb-[34px]">
          Страница временно недоступна. Не переживайте, мы уже трудимся над
          решением проблемы.
        </p>
        <button className="bg-[#66D8AD] text-white py-[21px] w-full rounded-[18px]" onClick={removeHash}>Хорошо</button>
      </Box>
    </Modal>
  );
};