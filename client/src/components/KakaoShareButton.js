import React, { useEffect } from 'react'
import kakaotalk from '../img/kakaotalk.svg';
import './KakaoShareButton.css'

const KakaoShareButton = ({ title, description, image, url }) => {
  useEffect(() => {
    createKakaoButton()
  })

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '.kakao-link-btn',
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: image, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '링크',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      })
    }
  }

  return (
    <button className="kakao-link-btn" id="share__button">
        <img alt="kakaotalk" src={kakaotalk} id="share"/>
    </button>
  )
}

export default KakaoShareButton