import react from 'react';
import ReactDOM from 'react-dom/client';
import  Header from './component/Header';
import Body from './component/body';
import Footer from './component/footer';
import { IMG_CDN_URL } from './component/constants';




// jsx


// learning importing









const AppLayout = () => {

    return(
        <>
           
            <Header />
            <Body />
            <Footer />
            
        </>
    );
};





const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<AppLayout />)
