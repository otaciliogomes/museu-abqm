import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
interface ToastContextProps {
    handleTost: (type: 'error' | 'success', message: string) => void;
}
interface ToastProviderProps {
    children: React.ReactNode
}
export const ToastContext = createContext({} as ToastContextProps);
export const ToastProvider = ({ children }: ToastProviderProps) => {
	const handleTost = (type: 'error' | 'success', message: string) => {
		if (type === 'success') {
			toast.success(message, {
				position: toast.POSITION.TOP_CENTER,
				theme: 'colored'
			});
		}
		if (type === 'error') {
			toast.error(message, {
				position: toast.POSITION.TOP_CENTER,
				theme: 'colored'
			});
		}
	};

	return (
		<ToastContext.Provider value={{ handleTost }}>
			{children}
		</ToastContext.Provider>

	);
};

export const useTost = () => {
	const { handleTost } = useContext(ToastContext);

	return handleTost
}
