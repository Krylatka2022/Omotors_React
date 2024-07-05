import { useState, useEffect } from 'react';
import Page from './Page';
import CardList from '../CardList/CardList';


// const PageContainer = ({ slug }) => {
//     // const [page, setPage] = useState(null);
//     // const [error, setError] = useState(null);
//     const [carData, setCarData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`http://omotors.beget.tech/wp-json/wp/v2/pages?slug=${slug}`)
//             // fetch(`https://omotorsword/wp-json/wp/v2/pages?slug=${slug}`)

//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Received data:", data); // Добавлен лог для проверки данных

//                 if (data.length === 0) {
//                     setError('No page found with this slug');
//                 } else {
//                     const pageData = data[0];
//                     console.log("Page data:", pageData); // Лог данных страницы

//                     if (pageData.acf && pageData.acf.cars) {
//                         setCarData(pageData.acf.cars);
//                     } else {
//                         setError('No car data found on this page');
//                     }
//                 }
//             })
//             .catch(error => setError(error.message));
//     }, [slug]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return <CardList carData={carData} />;
// };

// export default PageContainer;
// Функция для парсинга HTML содержимого страницы и извлечения данных автомобилей

// const parseCarDataFromHTML = (htmlContent) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, 'text/html');

//     const carElements = doc.querySelectorAll('.car-item'); // предположим, что данные автомобилей находятся в элементах с классом 'car-item'
//     const carData = Array.from(carElements).map(carElement => {
//         const image = carElement.querySelector('.car-image').src;
//         const name = carElement.querySelector('.car-name').textContent;
//         const power = carElement.querySelector('.car-power').textContent;
//         const acceleration = carElement.querySelector('.car-acceleration').textContent;
//         const fuelConsumption = carElement.querySelector('.car-fuel-consumption').textContent;

//         return { image, name, power, acceleration, fuelConsumption };
//     });

//     return carData;
// };

// const PageContainer = ({ slug }) => {
//     const [carData, setCarData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`http://omotors.beget.tech/wp-json/wp/v2/pages?slug=${slug}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Received data:", data); // Лог для проверки данных
//                 if (data.length === 0) {
//                     setError('No page found with this slug');
//                 } else {
//                     const pageData = data[0];
//                     console.log("Page data:", pageData); // Лог данных страницы
//                     const carData = parseCarDataFromHTML(pageData.content.rendered);
//                     if (carData.length > 0) {
//                         setCarData(carData);
//                     } else {
//                         setError('No car data found on this page');
//                     }
//                 }
//             })
//             .catch(error => {
//                 console.error('Fetch error:', error);
//                 setError(error.message);
//             });
//     }, [slug]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return <CardList carData={carData} />;
// };

// export default PageContainer;
const parseCarDataFromHTML = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // Выведем HTML-содержимое на консоль для анализа
    console.log('HTML content:', doc.body.innerHTML);

    // Предполагается, что данные автомобилей находятся в элементах с классом 'car-item'
    const carElements = doc.querySelectorAll('.car-item');
    const carData = Array.from(carElements).map(carElement => {
        const image = carElement.querySelector('.car-image')?.src;
        const name = carElement.querySelector('.car-name')?.textContent;
        const power = carElement.querySelector('.car-power')?.textContent;
        const acceleration = carElement.querySelector('.car-acceleration')?.textContent;
        const fuelConsumption = carElement.querySelector('.car-fuel-consumption')?.textContent;

        return { image, name, power, acceleration, fuelConsumption };
    });

    return carData;
};

const PageContainer = ({ slug }) => {
    const [carData, setCarData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://omotors.beget.tech/wp-json/wp/v2/pages?slug=${slug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Received data:", data);
                if (data.length === 0) {
                    setError('No page found with this slug');
                } else {
                    const pageData = data[0];
                    console.log("Page data:", pageData);
                    const carData = parseCarDataFromHTML(pageData.content.rendered);
                    if (carData.length > 0) {
                        setCarData(carData);
                    } else {
                        setError('No car data found on this page');
                    }
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error.message);
            });
    }, [slug]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <CardList carData={carData} />;
};

export default PageContainer;