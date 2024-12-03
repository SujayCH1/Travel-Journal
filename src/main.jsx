import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
// import { Journal } from './components/Journal.jsx'
// import Layout from './components/Layout.jsx'
// import Timeline from './components/Timeline.jsx'
// import Search from './components/Search.jsx'
// import Home from './components/Home.jsx'

// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <Layout/>,
//       children: [
//         {
//           index: true,
//           element: <Navigate to = "home" replace />
//         },
//         {
//           path: "home",
//           element: <Home/>
//         },
//         {
//           path: "journal",
//           element: <Journal/>
//         },
//         {
//           path: "timeline",
//           element: <Timeline/>
//         },
//         {
//           path: "search",
//           element: <Search/>
//         }
//       ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>  
  </StrictMode>,
)
