"use client";

import { useGetOrders } from "@/api/queries/orders.queries";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/shadcn-ui/table";
import { useState } from "react";
import { OrderPagination } from "./order-pagination";

export default function OrderTable() {
	const [currentPage, setCurrentPage] = useState(1);

	const { orders } = useGetOrders({ limit: 5, page: currentPage });

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber + 1);
	};

	return (
		<div className='max-w-3xl flex flex-col items-center gap-4'>
			<Table className='bg-slate-50 rounded-xl'>
				{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
				<TableHeader>
					<TableRow>
						<TableHead>id</TableHead>
						<TableHead>email</TableHead>
						<TableHead>steam</TableHead>
						<TableHead>amount</TableHead>
						<TableHead>date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders?.items.map((order, idx) => (
						<TableRow key={idx}>
							<TableCell>{order.order_id}</TableCell>
							<TableCell>{order.email}</TableCell>
							<TableCell>{order.login}</TableCell>
							<TableCell>{order.amount.toFixed(2)} $</TableCell>
							<TableCell>{order.date}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div>
				<OrderPagination
					count={orders?.countPages || 1}
					onClickPage={(pageNumber) => handlePageChange(pageNumber)}
				/>
			</div>
		</div>
	);
}
