import React, { useEffect } from 'react';
import kakaotalk from '../img/kakaotalk.svg';
import '../routes/Result.css';

function KakaoShareButton({ description, image, url }) {
    useEffect(() => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
        window.Kakao.Link.createDefaultButton({
            container: '#share__button',
            objectType: 'feed',
            content: {
              title: "코알라 테스트",
              description: description,
              imageUrl: image,
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
              {
                title: '테스트 해보기',
                link: {
                  mobileWebUrl: "https://c0alatest.com",
                },
              },
            ]
          });
    }, [description, image, url])
    return (
        <div className="share__kakao" id="share__button">
            <img alt="kakaotalk" src={kakaotalk} id="share"/>
        </div>
    )
}

export default KakaoShareButton
