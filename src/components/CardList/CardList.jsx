// import PropTypes from 'prop-types';
// import './CardList.css'

// const CarCard = ({ image, name, power, acceleration, fuelConsumption }) => (
//     <article className="car-card">
//         <div className="car-image-wrapper">
//             <img loading="lazy" src={image} alt={name} className="car-image" />
//         </div>
//         <h2 className="car-name">{name}</h2>
//         <div className="car-specs">
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eee8d970547e7c8192597c12d735a9cdb2f31b8fc74f076e9b2916b7d36fdaa?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{power}</p>
//             </div>
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2395e4f94c14a22a0832027e89ae69dfc1042616bdb4932e35ce97c8a67a0724?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{acceleration}</p>
//             </div>
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76d779cd2abe3182d483fca3abceaef29f1f696fda380aed75853ac7daf58f31?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{fuelConsumption}</p>
//             </div>
//         </div>
//         <button className="price-button">Узнать цену</button>
//     </article>
// );

// CarCard.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     power: PropTypes.string.isRequired,


//     acceleration: PropTypes.string.isRequired,


//     fuelConsumption: PropTypes.string.isRequired,
// };


// function CardList() {
//     const carData = [
//         {
//             image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9987dbafb6ef8240d92a040c8a4824d91d76c8d59856d066bc3c9796e1a5e609?apiKey=cc5bec9b519e49cc969df3e32a6ea878&",
//             name: "Changan CS55 Plus 1.5 AMT, 2023",
//             power: "181 л.с. Мощность при 5500 об/мин",
//             acceleration: "8.1 с. Разгон до 100 км/ч",
//             fuelConsumption: "5.9 л/100км Расход в смешанном цикле"
//         },
//         {
//             image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb39c059ee9849be6ebc5504617754adaf60e77ec18666380215b8849a8a437c?apiKey=cc5bec9b519e49cc969df3e32a6ea878&",
//             name: "Haval Jolion 1.5 AMT, 2023, 60 км",
//             power: "143 л.с. Мощность при 5600 об/мин",
//             acceleration: "9.8 с. Разгон до 100 км/ч",
//             fuelConsumption: "8.1 л/100км Расход в смешанном цикле"
//         },
//         {
//             image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1445615fccba6d71e80ecf94c266040e1171bba080df7dee8c071b40b270ee80?apiKey=cc5bec9b519e49cc969df3e32a6ea878&",
//             name: "Chery Tiggo 7 Pro Max 1.5 CVT, 2023",
//             power: "147 л.с. Мощность при 5500 об/мин",
//             acceleration: "9.8 с. Разгон до 100 км/ч",
//             fuelConsumption: "8.2 л/100км Расход в смешанном цикле"
//         },
//         {
//             image: "https://cdn.builder.io/api/v1/image/assets/TEMP/38d6f5f8b9479ea54515f4892376822f9c6d0b5359cd6dd05a6c25548b6ffe2b?apiKey=cc5bec9b519e49cc969df3e32a6ea878&",
//             name: "Toyota RAV4 2.0 CVT, 2023",
//             power: "171 л.с. Мощность при 6600 об/мин",
//             acceleration: "10.7 с. Разгон до 100 км/ч",
//             fuelConsumption: "5.6 л/100км Расход в смешанном цикле"
//         }
//     ];

//     return (
//         <section className="car-showcase">
//             {/* <div className='car-showcase-container'> */}
//             {carData.map((car, index) => (
//                 <CarCard key={index} {...car} />
//             ))}
//             {/* </div> */}
//         </section>
//     );
// }

// export default CardList;
// import PropTypes from 'prop-types';
// const CarCard = ({ image, name, power, acceleration, fuelConsumption }) => (
//     <article className="car-card">
//         <div className="car-image-wrapper">
//             <img loading="lazy" src={image} alt={name} className="car-image" />
//         </div>
//         <h2 className="car-name">{name}</h2>
//         <div className="car-specs">
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eee8d970547e7c8192597c12d735a9cdb2f31b8fc74f076e9b2916b7d36fdaa?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{power}</p>
//             </div>
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2395e4f94c14a22a0832027e89ae69dfc1042616bdb4932e35ce97c8a67a0724?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{acceleration}</p>
//             </div>
//             <div className="spec-item">
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76d779cd2abe3182d483fca3abceaef29f1f696fda380aed75853ac7daf58f31?apiKey=cc5bec9b519e49cc969df3e32a6ea878&" alt="" className="spec-icon" />
//                 <p className="spec-text">{fuelConsumption}</p>
//             </div>
//         </div>
//         <button className="price-button">Узнать цену</button>
//     </article>
// );

// CarCard.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     power: PropTypes.string.isRequired,
//     acceleration: PropTypes.string.isRequired,
//     fuelConsumption: PropTypes.string.isRequired,
// };

// const CardList = ({ carData }) => {
//     return (
//         <section className="car-showcase">
//             {carData.map((car, index) => (
//                 <CarCard key={index} {...car} />
//             ))}
//         </section>
//     );
// };

// CardList.propTypes = {
//     carData: PropTypes.arrayOf(
//         PropTypes.shape({
//             image: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             power: PropTypes.string.isRequired,
//             acceleration: PropTypes.string.isRequired,
//             fuelConsumption: PropTypes.string.isRequired
//         })
//     ).isRequired
// };

// export default CardList;


const CardList = ({ carData }) => {
    return (
        <div className="card-list">
            {carData.map((car, index) => (
                <div key={index} className="card">
                    <img src={car.image} alt={car.name} />
                    <h2>{car.name}</h2>
                    <p>Мощность: {car.power}</p>
                    <p>Разгон: {car.acceleration}</p>
                    <p>Расход топлива: {car.fuelConsumption}</p>
                </div>
            ))}
        </div>
    );
};

export default CardList;