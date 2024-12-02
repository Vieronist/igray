"use client";

import { UnavailableServiceModal } from "@/components/user/common/modals/unavailable-service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { Toaster } from "react-hot-toast";

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [client] = useState(new QueryClient());

	// {
	// 	defaultOptions: {
	// 		queries: {
	// 			refetchOnWindowFocus: false,
	// 		},
	// 	},
	// }

	return (
		<QueryClientProvider client={client}>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 2000,
					style: {
						background: "#333",
						color: "#fff",
					},
				}}
			/>

			{children}

			<UnavailableServiceModal />
		</QueryClientProvider>
	);
};

export default Providers;