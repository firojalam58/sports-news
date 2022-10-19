
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category/Category';
import News from './Components/News/News/News';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/category:id',
        element:<Category></Category>
      },
      {
        path:'/news:id',
        element:<News></News>
      },
      {
        path:'/',
        element:<Home></Home>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
