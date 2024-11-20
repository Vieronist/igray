import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { FC } from "react";

interface AlertModalProps {
  isVisible: boolean;

  success?: boolean;
  messages: {
    successMessage?: string;
    errorMessage?: string;
    loadingMessage: string;
  };
}

export const AlertModal: FC<AlertModalProps> = ({
  isVisible,
  success,
  messages: { errorMessage, successMessage, loadingMessage },
}) => {
  return (
    <Modal
      sx={{ borderRadius: "20px", zIndex: 100 }}
      open={isVisible}
      className="mx-auto mt-[17%] rounded-xl"
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "20%",
          width: "50%",
          margin: "0 auto",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-[#4FCA9C] text-[29px] mb-[20px] text-center mt-[5%]">
            {success === undefined
              ? `${loadingMessage}`
              : success
              ? `${successMessage}`
              : `${errorMessage}`}
          </h3>
        </div>
      </Box>
    </Modal>
  );
};
