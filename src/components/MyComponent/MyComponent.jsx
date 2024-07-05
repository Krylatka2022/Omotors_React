// import * as React from "react";
import './MyComponent.css'

const ContactInfo = ({ icon, text }) => (
  <div className="contact-item">
    <img loading="lazy" src={icon} alt="" className="contact-icon" />
    <div className="contact-text">{text}</div>
  </div>
);

const NavItem = ({ text, isActive }) => (
  <div className={`nav-item ${isActive ? 'active' : ''}`}>{text}</div>
);

const CatalogItem = ({ text, icon }) => (
  <div className="catalog-item">
    <div className="catalog-text">{text}</div>
    <img loading="lazy" src={icon} alt="" className="catalog-icon" />
  </div>
);

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <ContactInfo
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0188ae205ac1667fe98dc2ab23a81d43f952c7828fc03bbf9173da88c67baf0c?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
          text="Россия, Москва, 38КМ МКАД, 6Бс1"
        />
        <ContactInfo
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/341059ce8b42becfc3bdf415538a9ce8ff99656bc9ed7e2c6c54374842482d47?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
          text="Время работы: c 08:00 до 21:00"
        />
        <ContactInfo
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9dde34e4af3d8295baa9af40ed4cfcda87e42924e0fb7eb330daa21342f084?apiKey=cc5bec9b519e49cc969df3e32a6ea878&"
          text="Whatsapp"
        />
      </div>
      <div className="main-header">
        <div className="logo-section">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1327a8c1e9e7adf26fab021489fac2df1f3d47be1017eff3130605f053bd241e?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Company Icon" className="company-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd1d502f18868bb05b31463d2b19ebf456818a09e096d1afc4538b672ed4988?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Company Logo" className="company-logo" />
          <div className="separator" />
          <div className="slogan">
            <span className="highlight">10 лет</span> превосходим <br /> ваши ожидания
          </div>
        </div>
        <nav className="main-nav">
          <NavItem text="Подбор авто" isActive={true} />
          <NavItem text="О компании" />
          <NavItem text="Техцентр" />
          <NavItem text="Отзывы" />
          <NavItem text="Контакты" />
          <div className="contact-numbers">
            <div className="primary-contact">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10cfbd5d0a7bb47fe80e9a92d1e39143285a06ab42971b869dfa51b336e93360?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Phone" className="phone-icon" />
              <div className="primary-number">+7 (800) 551-94-31</div>
            </div>
            <div className="secondary-number">+7 (495) 292-18-67</div>
          </div>
          <button className="callback-button">Обратный звонок</button>
        </nav>
      </div>
      <div className="catalog-nav">
        <CatalogItem text="Каталог авто" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e8e85ec9915b6f063e1e8c273ef1cebb2f87075ae19207b48ffc03e2e0bd128b?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" />
        <CatalogItem text="Авто с пробегом" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0288031cd2eecebf318616b8c7e1b538d44236acd1a3bf1d7ed99f9c5e3c110b?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" />
        <CatalogItem text="Кредит и рассрочка" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4d18684c9e1b4b4331ec8f84ef73469294943a3d16481ef3e30a0b9818b58a38?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" />
        <CatalogItem text="Спецпредложения" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4cd969921fb178ece50667435723e459e39210b5896227989cac3bbd773a11cd?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" />
        <div className="taxi-credit">Такси в кредит</div>
        <div className="social-icons">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1575fd6a7f10c909f004ef4e81456aa1113bb01ddf13501c4e55417ddb570678?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Social Icon 1" className="social-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1143afed51301115766c388e252a5d4a95673869e869ff9533b7c0855805c9d?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Social Icon 2" className="social-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/78bcddf5e4d975e461f322e8ad971be826c68d02b68134a93d9f0265379ad11b?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Social Icon 3" className="social-icon" />
        </div>
      </div>
    </header>
  );
}

function MyComponent() {
  return (
    <>
      <Header />
    </>
  );
}

export default MyComponent;