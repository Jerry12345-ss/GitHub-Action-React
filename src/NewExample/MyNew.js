import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './Page/Error';
import StyleNavbar from './StyleNavbar';
import About from './About';
import Products from './Products';
import Service from './Service';

export default function MyNew(){
    return (
        <BrowserRouter basename='/react'>
            <Routes>
                <Route path='/' element={<StyleNavbar/>}>
                    <Route index element={<Home/>}></Route>

                    <Route path='about' element={<About/>}></Route>
                    
                    <Route path='service' element={<Service/>}></Route>

                    <Route path='products' element={<Products/>}></Route>

                    <Route path='404' element={<Error/>}></Route>
                </Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}