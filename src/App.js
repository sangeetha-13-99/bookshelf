import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { MainPage } from './Pages/MainPage';
import { SearchPage } from './Pages/SearchPage';

function App() {

  const router=createBrowserRouter([
    {path:'/',element:<MainPage/>},
    {path:'/search',element:<SearchPage/>}
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
