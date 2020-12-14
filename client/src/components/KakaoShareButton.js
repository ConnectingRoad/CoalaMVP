import React, { useEffect } from 'react';
import kakaotalk from '../img/kakaotalk.svg';
import '../routes/Result.css';

function KakaoShareButton({ title, description, index, url }) {
  const images = ['/img/coala_1.png', '/img/coala_2.png', '/img/coala_3.png', '/img/coala_4.png', 
  '/img/coala_5.png', '/img/coala_6.png', '/img/coala_7.png', '/img/coala_8.png']

  useEffect(() => {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      window.Kakao.Link.createDefaultButton({
          container: '#share__button',
          objectType: 'feed',
          content: {
            title: title,
            description: description,
            imageUrl: "https://c0alatest.com" + images[index],
            link: {
              mobileWebUrl: url,
            },
          },
          buttons: [
            {
              title: '결과 확인하기',
              link: {
                mobileWebUrl: url,
              },
            },
          ]
        });
  }, [description, index, url])
  return (
      <div className="share__kakao" id="share__button">
          <img alt="kakaotalk" src={kakaotalk} id="share"/>
      </div>
  )
}

export default KakaoShareButton
