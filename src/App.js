import React from 'react';
import Img from 'react-cool-img';

import AvatarWebp from './images/avatar.webp';
import AvatarPng from './images/avatar.png';

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
]

const App = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Img
          style={{
            backgroundColor: '#1C2329',
            width: '120',
            height: '120'
          }}
          src={AvatarWebp}
          srcSet={AvatarPng}
          height={120}
          width={120}
          className='avatar'
          alt='React Cool Img'
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
            <li className='data-list--item'>
              <button
                key={index}
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
  );
}

export default App;
