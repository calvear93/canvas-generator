import { IRouteDefinition } from '@router';
import { MainPage } from 'pages/main/Main.page';
import { AppLayout } from 'layouts/app/App.layout';

export const routes: readonly IRouteDefinition[] = [
    {
        path: '/',
        render: {
            layout: AppLayout,
            children: [
                {
                    title: 'Home',
                    render: {
                        child: MainPage
                    }
                }
            ]
        }
    }
];
