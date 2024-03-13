import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const MemoryCards = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};
