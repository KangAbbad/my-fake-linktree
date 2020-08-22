import React from 'react';
import Img from 'react-cool-img';

import AvatarWebp from './images/avatar.webp';
import AvatarPng from './images/avatar.png';
import BackgroundWebp from './images/background.webp';
// import BackgroundJpg from './images/background.jpg';

const dataLink = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kang-abbad/'
  },
  {
    label: 'Personal Site',
    url: 'https://kangabbad.netlify.app'
  },
  {
    label: 'Telegram',
    url: 'https://t.me/kangabbad'
  },
  {
    label: 'WhatsApp',
    url: "https://api.whatsapp.com/send?phone=87739999776&text=Samlekom%20mhamanx..."
  },
];

const App = () => {
  return (
    <div className='container'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Img
          style={{
            backgroundColor: '#1C2329',
            width: '100%',
            height: '100%'
          }}
          src={BackgroundWebp}
          alt="React Cool Background"
        />
      </div>
      <div className='content' style={{ zIndex: 2 }}>
        <ImgWithFallback
          src={AvatarWebp}
          fallback={AvatarPng}
          alt="My Avatar"
          className='avatar'
          height='120'
          width='120'
        />
        <p className='username'>
          @kangabbad
        </p>
        <p className='username'>
          Muhammad Naufal Abbad
        </p>
        <p className='bio'>
          Tamvan dan Berani | Javascript Enthusiast | Frontend Developer
        </p>
        <ul className='data-list'>
          {dataLink.map((item, index) => (
            <li key={index} className='data-list--item'>
              <button
                className='button-link'
                onClick={() => {
                  setTimeout(() => {
                    window.open(item.url)
                  }, 500)
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default App;

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={delegated.alt} {...delegated} />
    </picture>
  );
};