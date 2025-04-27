import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import DoctorDetail from "./Pages/DoctorDetail";
import Videos from "./Pages/Video";
import Clinics from "./Pages/Clinics";
import DoctorList from "./Pages/DoctorsList";




function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers />

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home title={"Home"} /></Base>} />
                    <Route path="/treatments" element={<Base> <Services title={"Services"} /> </Base>} />
                    <Route path="/about-us" element={<Base> <About title={"About Us"} /> </Base>} />
                    <Route path="/videos" element={<Base> <Videos title={"Videos"} /> </Base>} />
                    <Route path="/clinics" element={<Base> <Clinics title={"Clinics"} /> </Base>} />
                    <Route path="/contact-us" element={<Base> <Contact title={"Contact Us"} /> </Base>} />
                    <Route path="/doctor-details" element={<Base> <DoctorDetail title={"Doctor's Detail"} /> </Base>} />
                    <Route path="/doctor-list" element={<Base> <DoctorList title={"Doctor's"} /> </Base>} />
             
                    <Route path='*' element={<PageNotFound404 />} />

                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
