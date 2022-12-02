import desktopHeader from "../assets/images/bg-header-desktop.svg"
import mobileHeader from "../assets/images/bg-header-mobile.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img className="desktop-header" src={desktopHeader} alt="header" />
            <img className="mobile-header" src={mobileHeader} alt="header" />
        </div>
    )
}

export default Header