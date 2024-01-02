import soundbar from './Group 10.svg';
import mesg from './Group 9.svg';
import mesglv from './Group 7.svg';
import phonepic1 from './phonepic1.svg';
import phonepic2 from './phonepic2.svg';
import './App.css';
import Navbar from "./nav";
import mylistlogo from "./Mylist 1.svg";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
function App() {
    const [language, setLanguage] = useState('en'); // default language is English

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'ko' : 'en'); // toggle between English and Korean
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
      <>
          <div className={"first"}>
              <Navbar onLanguageToggle={toggleLanguage} language={language}/>
              <div className={"firsthook"}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg1" width="138" height="81" viewBox="0 0 138 81" fill="none">
                      <path
                          d="M128.143 0.366608H98.5714L78.8571 32.2688V80.1222H138V32.2688H108.429L128.143 0.366608ZM49.2857 0.366608H19.7143L0 32.2688V80.1222H59.1429V32.2688H29.5714L49.2857 0.366608Z"
                          fill="#2B2B2B"/>
                  </svg>
                  <p className={"texto"}>{language === 'en' ? 'What song are you listening to?' : '실례지만 어떤 노래들으세요?'}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg2"  width="138" height="80" viewBox="0 0 138 80" fill="none">
                      <path
                          d="M9.85714 79.7556L39.4286 79.7556L59.1429 47.8534L59.1429 1.01251e-05L4.2759e-06 5.91727e-06L-8.64562e-07 47.8534L29.5714 47.8534L9.85714 79.7556ZM88.7143 79.7556L118.286 79.7556L138 47.8534L138 1.57356e-05L78.8571 1.15278e-05L78.8571 47.8534L108.429 47.8534L88.7143 79.7556Z"
                          fill="#2B2B2B"/>
                  </svg>
              </div>
              <img src={soundbar} className="soundbar" alt="logo" />
              <div className={"scrollin"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="30" viewBox="0 0 98 30" fill="none">
                      <path d="M3 3L48.5756 26.6149" stroke="#505050" stroke-width="5" stroke-linecap="round"/>
                      <path d="M94.5756 3L49 26.6149" stroke="#505050" stroke-width="5" stroke-linecap="round"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="30" viewBox="0 0 98 30" fill="none">
                      <path d="M3 3L48.5756 26.6149" stroke="#C2C2C2" stroke-width="5" stroke-linecap="round"/>
                      <path d="M94.5756 3L49 26.6149" stroke="#C2C2C2" stroke-width="5" stroke-linecap="round"/>
                  </svg>
              </div>
          </div>
          <div className={"maincontainer"}>
          <div className={"second"}>
              <div className={"imgcontainer"}>
              <img src={mesg} className={"mesg"} alt="logo"/>
              <img src={mesglv} className={"mesglv"} alt="logo"/>
              </div>
              <div className={"texto3"}>
                  <p className={"texto2"}>{language === 'en' ? 'With the Social Network Services' : 'SNS가 필수인 시대에서'}</p>
                  <br></br>
                  <p className={"texto1"}>{language === 'en' ? 'You can express yourself with the music' : '음악 플레이리스트는 나의 취향과 나 자체를 드러내는'}</p>
                  <p className={"texto1"}>{language === 'en' ? 'that You are listen to' : '중요한 요소가 되었습니다'}</p>
              </div>
              <div className={"empty"}></div>
          </div>
              <img src={phonepic1} className={"phonepic1"}></img>
          <div className={"subsecond"}>
            <p className={"texto21"}>{language === 'en' ? 'With the playlists which are consisted of the music that you like' : '저희는 ‘나’를 드러내는 수단으로 플레이리스트를 활용해'}</p>
              <img src={phonepic2} className={"phonepic2"}></img>
            <p className={"texto22"}>{language === 'en' ? 'You can more easily connect with others' : '다른 사람들과 공유하고 싶은 음악을 찾아주는 서비스를 제공합니다'}</p>
          </div>
              <div className={"btm"}>
                  <p className={"btmhook1"}>{language === 'en' ? 'Share your playlist with ohters' : 'Mylist를 통해 나의 플레이리스트를 공유해 보세요'}</p>
                  <p className={"btmhook2"}>{language === 'en' ? 'Get the early access, news & updates with email ' : '하단에 이메일을 입력하시면 가장 먼저 서비스에 대해서 알려드립니다!'}</p>
                  <img src={mylistlogo} className={"mylistlogo"}></img>
                  <div className={"input-button-container"}>
                      <form ref={form} onSubmit={sendEmail}>
                          <input type="email" id="email" name="email"
                                 placeholder={language === 'en' ? 'Write down your own email' : '이메일 입력하기'}
                                 className="email-input"/>
                          <button type="submit" onClick={() => console.log('submitted')}
                                  className="submit-button">{language === 'en' ? 'Send' : '보내기'}</button>
                      </form>
                  </div>
              </div>
          </div>
      </>
);
}

export default App;
