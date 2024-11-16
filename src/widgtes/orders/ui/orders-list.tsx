import { useGetOrders } from "@/shared";
import { ChangeEvent, useState } from "react";
import { OrderItem } from "@/entities/orders";
import Pagination from "@mui/material/Pagination";

export const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { orders } = useGetOrders({ limit: 5, page: currentPage });

  const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto sm:w-[80%] md:w-[50%]">
      <h3 className="text-center text-3xl mb-[40px] text-gray-800">Список заказов</h3>
      <ul className="mb-5">
        {orders?.items.map((order, idx) => (
          <OrderItem key={idx} {...order} />
        ))}
      </ul>
      <div className="mx-auto w-[80%] flex justify-center">
        <Pagination
          count={orders?.countPages}
          page={Number(currentPage)}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
