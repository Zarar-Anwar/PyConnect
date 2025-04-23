import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ToastContainers() {
    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                limit={1}
                pauseOnHover
            />
        </>
    )
}

export default ToastContainers
