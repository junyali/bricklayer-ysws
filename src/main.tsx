import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css'
import App from './App.tsx'
import { SideBar } from './components/SideBar.tsx';
import { DocPage } from './layouts/DocPage.tsx';
import Guide from './pages/Guide.mdx';

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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
)
