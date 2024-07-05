import './TradeInForm.css'
import PropTypes from 'prop-types';


const InputField = ({ label, type = "text" }) => (
    <div className="input-wrapper">
        <label className="visually-hidden" htmlFor={`${label.toLowerCase()}Input`}>{label}</label>
        <input
            type={type}
            id={`${label.toLowerCase()}Input`}
            placeholder={label}
            className="input-field"
        />
    </div>
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string
};

function TradeInForm() {
    return (
        <section className="trade-in-section">
            <div className="content-wrapper">
                <div className="image-column">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d68cf9f15ed9436eabcb63e4a451013ee65c0e466aaa396d293e03cb3f8e9ea4?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="Trade-in offer visual" className="trade-in-image" />
                </div>
                <div className="form-column">
                    <article className="trade-in-card">
                        <header>
                            <h2 className="offer-title">ВЫГОДНЫЙ</h2>
                            <h1 className="main-title">TRADE‑IN</h1>
                        </header>
                        <p className="offer-description">Выгодно обменяем старый авто на новый</p>
                        <form className="trade-in-form">
                            <InputField label="Ваше имя" />
                            <InputField label="Ваш телефон" type="tel" pattern="[0-9()#&+*-=.]+" />
                            <button type="submit" className="submit-button">УЗНАТЬ ВЫГОДУ</button>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default TradeInForm;