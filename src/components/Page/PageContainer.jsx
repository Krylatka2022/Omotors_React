import { useState, useEffect } from "react";
import Page from "./Page";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";

const parseCarDataFromHTML = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Выведем HTML-содержимое на консоль для анализа
  console.log("HTML content:", doc.body.innerHTML);

  // Изменим парсинг на основе предоставленного HTML-контента
  const carElements = doc.querySelectorAll(
    ".elementor-widget-wrap .elementor-widget"
  );

  const carData = Array.from(carElements).map((carElement, index) => {
    const image = carElement.querySelector("img")?.src;
    const name = carElement.querySelector(
      ".elementor-heading-title"
    )?.textContent;
    const power = carElement.querySelector(".car-power")?.textContent;
    const acceleration =
      carElement.querySelector(".car-acceleration")?.textContent;
    const fuelConsumption = carElement.querySelector(
      ".car-fuel-consumption"
    )?.textContent;

    const carDetails = { image, name, power, acceleration, fuelConsumption };
    console.log(`Car ${index + 1} details:`, carDetails);

    return carDetails;
  });

  return carData;
};

// const PageContainer = ({ slug }) => {
//   const [carData, setCarData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://omotors.beget.tech/wp-json/wp/v2/pages?slug=${slug}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.length === 0) {
//           setError("No page found with this slug");
//         } else {
//           const pageData = data[0];
//           const carData = parseCarDataFromHTML(pageData.content.rendered);
//           if (carData.length > 0) {
//             setCarData(carData);
//           } else {
//             setError("No car data found on this page");
//           }
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, [slug]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <CardList carData={carData} />;
// };

// export default PageContainer;

const PageContainer = ({ slug }) => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://omotors.beget.tech/wp-json/wp/v2/pages?slug=${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          setError("No page found with this slug");
        } else {
          const pageData = data[0];
          console.log("Page data:", pageData);
          const carData = parseCarDataFromHTML(pageData.content.rendered);
          if (carData.length > 0) {
            setCarData(carData);
          } else {
            setError("No car data found on this page");
          }
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return <CardList carData={carData} />;
};

export default PageContainer;
