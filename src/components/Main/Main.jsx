// import Header from './components/Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx';

// import { useState, useEffect } from 'react';

import VideoCarousel from '../Carousel/VideoCarousel.jsx';
// import PhotoCarousel from './components/Carousel/PhotoCarousel.jsx';
import BrandGrid from '../BrandCard/BrandCard.jsx';
import '../Carousel/Carousel.css';
import CardList from '../CardList/CardList.jsx';
import TradeInForm from '../TradeInForm/TradeInForm.jsx';
import './Main.css'




const Main = () => {
  // Замените VideoCarousel на PhotoCarousel для сравнения
  const CarouselComponent = VideoCarousel;
  // const CarouselComponent = PhotoCarousel;
  // const [posts, setPosts] = useState([]);
  // const [probegs, setProbegs] = useState([])

  // useEffect(() => {
  //   // Замените URL на URL вашего WordPress REST API
  //   axios.get('https://omotorsword/wp-json/wp/v2/posts')
  //     .then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);
  // fetch('http://omotors.beget.tech/wp-json/wp/v2/pages?slug=avto-s-probegom')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     if (data.length === 0) {
  //       console.log('No page found with this slug');
  //     } else {
  //       console.log(data[0]); // первая страница с данным слагом
  //     }
  //   })
  //   .catch(error => console.error('Error:', error));
  // useEffect(() => {
  //   // Замените URL на URL вашего WordPress REST API
  //   fetch('https://omotorsword/wp-json/wp/v2/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       setPosts(data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);
  // useEffect(() => {
  //   // Замените URL на URL вашего WordPress REST API
  //   const fetchData = async () => {
  //     try {
  //       console.log('Запуск запроса к API...');
  //       const response = await fetch('https://omotorsword/wp-json/wp/v2/posts');

  //       if (!response.ok) {
  //         throw new Error(`Ошибка HTTP: ${response.status}`);
  //       }

  //       console.log('Данные успешно получены');
  //       const data = await response.json();
  //       console.log('Данные:', data);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Произошла ошибка при получении данных:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // fetch('https://omotorsword/wp-json/wp/v2/posts', {
  //   mode: 'no-cors'
  // })
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  // fetch('https://omotorsword/wp-json/wp/v2/posts')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     // Предполагается, что setPosts - это функция из React, которая обновляет состояние компонента.
  //     // Убедитесь, что она определена в вашем компоненте или передана как пропс.
  //     setPosts(data);
  //   })
  //   .catch(error => {
  //     console.error('There was an error fetching the data!', error);
  //   });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://omotorsword/wp-json/wp/v2/posts');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log(data); // Проверьте данные
  //       // ... дальнейшая обработка данных
  //     } catch (error) {
  //       console.error('There was an error fetching the data!', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      {/* <MyComponent /> */}
      {/* <img src="/images/tel-modal.png" alt="Photo 1" */}
      {/* // style={{ width: '100%', height: 'auto' }} */}
      {/* className="modal-image" */}
      {/* /> */}
      {/* <h1>WordPress Posts:</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul> */}



      <main className="catalog-section">
        <section className="catalog-container">
          <h2 className="catalog-text">Автоцентр - OMOTORS</h2>
          <button className="catalog-button catalog-button__details">Подробнее</button>
          <CarouselComponent />
        </section>

        <BrandGrid />

        <h2 className="card-list-text">Горячие предложения</h2>

        <CardList />
        <CardList />


        <button className="catalog-button">ПЕРЕЙТИ К КАТАЛОГУ НОВЫХ АВТОМОБИЛЕЙ</button>

        <TradeInForm />

        <Footer />
      </main>
    </>
  )
}
export default Main;