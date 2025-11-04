import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css'
import App from './App.tsx'
import { SideBar } from './components/SideBar.tsx';
import { DocPage } from './layouts/DocPage.tsx';
import Guide from './pages/Guide.mdx';
import Faq from './pages/FAQ.mdx';
import Resources from './pages/Resources.mdx';
import {NotFound} from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/guide',
    element: (
      <DocPage Content={ Guide } SideBar={ SideBar } />
    ),
  },
  {
    path: '/resources',
    element: (
      <DocPage Content={ Resources } SideBar={ SideBar } />
    ),
  },
  {
    path: '/faq',
    element: (
      <DocPage Content={ Faq } SideBar={ SideBar } />
    ),
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
)
