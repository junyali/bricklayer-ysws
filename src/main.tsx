import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { App } from './routes/App.tsx'
import { SideBar } from './components/SideBar';
import { DocPage } from './layouts/DocPage';
import { NotFound } from './routes/NotFound.tsx';
import { Canvas } from './routes/Canvas.tsx';

/* Markdown Pages*/
import Guide from './pages/Guide.mdx';
import Advanced from './pages/Advanced.mdx';
import Resources from './pages/Resources.mdx';
import Submission from './pages/Submission.mdx';
import Faq from './pages/FAQ.mdx';

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
    path: '/advanced',
    element: (
      <DocPage Content={ Advanced } SideBar={ SideBar } />
    ),
  },
  {
    path: '/resources',
    element: (
      <DocPage Content={ Resources } SideBar={ SideBar } />
    ),
  },
  {
    path: '/submission',
    element: (
      <DocPage Content={ Submission } SideBar={ SideBar } />
    ),
  },
  {
    path: '/faq',
    element: (
      <DocPage Content={ Faq } SideBar={ SideBar } />
    ),
  },
  {
    path: '/canvas',
    element: <Canvas />
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
