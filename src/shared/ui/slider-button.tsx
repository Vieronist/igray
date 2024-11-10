import { FC } from "react";
import { ReactSVG } from "react-svg"; // Ensure this is a named export if needed

interface IProps {
  direction: "left" | "right";
}

export  const SliderButton: FC<IProps> = ({ direction }) => {
    

  return (
    <button >
      <ReactSVG src={`arrow-${direction}.svg`} />
    </button>
  );
};
