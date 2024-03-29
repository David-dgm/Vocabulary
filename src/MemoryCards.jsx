import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const MemoryCards = () => {
	return (
		<AppTheme>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</AppTheme>
	);
};
