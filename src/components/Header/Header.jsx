import './Header.css'


const Header = () => {
    return (
        <header className="header-container">
            {/* <div className="header"> */}
            <div className="header-content">
                <div className="header-top">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1aefa1e34c2af357c4fd3f4aa01a4af1ebc85b3b2c33d70da9b894d0f3ed662?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                        className="logo"
                        alt="Company Logo"
                    />
                    <div className="contact-info">
                        <div className="contact-item">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94a695bf3211ccf6b1fa24da70af3d790793a192e8d9893cd3bd8594a0d02c97?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                className="contact-icon"
                                alt="Location Icon"
                            />
                            <span className="contact-text">г. Санкт-Петербург, пр. Тореза, 68</span>
                        </div>
                        <div className="contact-item">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/878b16f65799a83f133d29ac9bd8d3558b60827b5bc435ad0621a3a88e003be5?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                className="contact-icon"
                                alt="Email Icon"
                            />
                            <span className="contact-text">avtotsentr.omotors@mail.ru</span>
                        </div>
                        <div className="contact-item">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39506da0c5d7f286da1043671c0a13c629da2290a1b3e0a192c9c1e094f7f1b7?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                className="contact-icon"
                                alt="Phone Icon"
                            />
                            <span className="contact-text">8 (800) 500-79-53</span>
                        </div>
                        <div className="contact-item">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4435e57c79905a69302b180dff395a5d28412b1377b007404b0426926c40331f?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                className="contact-icon"
                                alt="Phone Icon"
                            />
                            <span className="contact-text">8 (812) 250-06-05</span>
                        </div>
                    </div>
                    <div className="consultation-button">Заказать консультацию</div>
                </div>
            </div>
            {/* </div> */}

            <nav className="navigation-menu">
                <a href="#" className="menu-item">Главная</a>
                <a href="#" className="menu-item">Новые авто</a>
                <a href="#" className="menu-item">Авто с пробегом</a>
                <a href="#" className="menu-item">Кредит</a>
                <a href="#" className="menu-item">TRADE-IN</a>
                <a href="#" className="menu-item">Отзывы</a>
                <a href="#" className="menu-item">Контакты</a>
            </nav>
        </header>
    );
};

export default Header;
