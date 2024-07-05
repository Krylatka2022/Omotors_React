import './Footer.css'
// import tel from '/images/tel-modal'
import PropTypes from 'prop-types';

function SocialMediaIcon({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="social-image" />;
}

SocialMediaIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

function ContactDetail({ iconSrc, text }) {
    return (
        <div className="contact-detail">
            <img loading="lazy" src={iconSrc} alt="" className="contact-icon" />
            <span>{text}</span>
        </div>
    );
}

ContactDetail.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


function FooterLink({ href, children }) {
    return (
        <a href={href} className="footer-link">
            {children}
        </a>
    );
}

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

function Footer() {
    return (
        <>
            <footer className="footer">
                 <div className="footer-container">
                    <nav className="footer-nav">
                        <ul className="footer-item">АВТОМОБИЛИ
                            <li className="footer-section"
                            >
                                <div className="footer-column">
                                    <FooterLink href="/new-cars">Новые автомобили</FooterLink>
                                    <FooterLink href="/used-cars">Авто с пробегом</FooterLink>
                                    <FooterLink href="/contacts">Контакты</FooterLink>
                                </div>
                            </li>
                        </ul>
                        <ul className="footer-item">Покупателям
                            <li className="footer-section">
                                <div className="footer-column">
                                    <FooterLink href="/credit">Кредит</FooterLink>
                                    <FooterLink href="/trade-in">TRADE-IN</FooterLink>
                                    <FooterLink href="/reviews">Отзывы</FooterLink>
                                    <FooterLink href="/about">О компании</FooterLink>
                                </div>
                            </li>
                        </ul>
                        <ul className="footer-item">Мы принимаем
                            <li>
                                <div className="footer-socials">
                                    <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e58d8259867809c0425beb9a2318a8e857ab3ae80b8fbc4f575b6f41e22e37?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Icon 1" />
                                    <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1708a83a035e287d4066fbcd1d8339b7cc726a9188c742f256ec04f6aeb08be6?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Icon 2" />
                                    <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f71b8e18453f66d89c30bc6085d350aa3f7c5d2f8da65b6dbb403cd94e95d857?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Icon 3" />
                                    <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/336b93e98f3739756ac45afddbd84a318bef39e5ca5f8141295cb6ddebb6b294?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Icon 4" />
                                </div>
                                <p className="footer-social-label">Мы в соцсети</p>
                                <div className="footer-buttons">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b787e459af84f6d78790e7ff3677ff38d5456f60eff377f81e49dd2c454310?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Button 1" />
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce028be33df7668aa410703d2ff5082f670a39001586cca01951e7e251e6dad2?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Button 2" />
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76084f112c1536fc86d0c08661eea33107dd179f17e88f050ab1eda543e9d156?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Button 3" />
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1bb4cafc29d327f65994e423a8b7c75bcc6a7e11541637c2d0c50efe7904604?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Button 4" />
                                </div>
                            </li>
                        </ul>
                        <ul className="footer-item">Контакты
                            <li>
                                <div className="footer-contacts">
                                    <ContactDetail
                                        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b8add58759ff9b10f12711be36751035c0d416c8402f0aec05144939b024c7?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                        text="8 (800) 500-79-53"
                                    />
                                    <ContactDetail
                                        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/faee21846952f547e46d00ad90eab30e03c9b0ce589651bfe42d8f40e5cc1e77?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
                                        text="8 (812) 250-06-05"
                                    />
                                    <ContactDetail iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/524358d066c050f38513a23b76bebf7d6b32adf35a9202e7d1c1e939a9e7dc03?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" text="avtotsentr.omotors@mail.ru" />
                                    <ContactDetail iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/35d0b5a0576933ce92a2f718344e30718c6c03977e68f4d23c2d4b7ea5d7e753?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" text="Санкт-Петербург, пр-кт Тореза, д. 68" />
                                </div>
                                <button className="callback-button">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</button>
                            </li>
                        </ul>
                    </nav>

                    <section className="legal-section">
                        <p className="legal-notice">
                            Обратите внимание! В соответствии со ст. 437 ГК РФ текущий сайт не является публичной офертой и создан исключительно в информационных целях. Указанные на сайте цены представлены с
                            учетом имеющихся скидок. Чтобы узнать актуальные цены на авто, обратитесь к менеджеру по продажам при помощи формы обратной связи или по телефону.
                        </p>
                        <p className="legal-agreement">
                            Используя данный веб-сайт и предоставляя свои персональные данные, вы автоматически соглашаетесь на их хранение и обработку в соответствии с федеральным законодательством.
                        </p>
                        <p className="legal-copyright">© 2023 Автосалон OMOTORS.</p>
                    </section>
                </div>
            </footer >
        </>
    )
}
export default Footer;