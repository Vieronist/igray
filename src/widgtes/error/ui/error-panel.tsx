import Image from "next/image";

export const ErrorPanel = () => {
  return (
    <section>
      <div>
        <h3>Ooops... 😭 оплата не удалась</h3>

        <p>
          Возможно вы ввели неправильные данные карты, или недостаточно средств
          на вашем счете.
        </p>
      </div>
      <Image width={100} height={100} src={"/error.png"} alt={""} />
    </section>
  );
};
