import Header from "./Header";
import Footer from "./Footer";
import {GlobalStyle} from "../styles/header_styles/header-styles";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
                {children}
            <Footer/>
        </>
    );
};

export default Layout;