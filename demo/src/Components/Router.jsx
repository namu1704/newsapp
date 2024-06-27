import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout';
import Home from './Home';
import Sports from './Sports';
import Science from './Science';
import Entertainment from './Entertainment';
import Busniess from './Busniess';
import Pollution from './Pollution';
import Environments from './Environments';
import Health from './Health';
import CurrentAffair from './CurrentAffair';
const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/sports', element: <Sports /> },
            { path: '/Science', element: <Science /> },
            { path: '/Entertainment',element:<Entertainment/>},
            { path: '/Busniess',element:<Busniess/>},
            { path:'/Pollution',element:<Pollution/> },
            { path:'/Environments',element:<Environments/> },
            {path:'/Health',element:<Health/>},
            {path:'/CurrentAffair',element:<CurrentAffair/>},
        ]
    }, {
/*        path: '*',
        element: <PageNotFound />*/
    }
]);

export default Router