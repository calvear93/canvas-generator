import { RouterProvider, Router } from '@router';
import { routes } from './app.routes';
import './styles/app.scss';

export const App: React.VFC = (): JSX.Element => {
    return (
        <RouterProvider routes={routes}>
            <Router />
        </RouterProvider>
    );
};
