import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './logo.svg';
import './PcRenew.css';
import hookimg from './Group 33.svg';
function Renew() {
    const [language, setLanguage] = useState('ko'); // default language is English
    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'ko' : 'en'); // toggle between English and Korean
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={"root"}>
        <div  className={"backgrounds"}>
            <div className={"navnav"}>
                <img src={logo} alt="Logo" className={"logo"}/>
                <button className={"btn"} onClick={toggleLanguage}>
                    {language === 'en' ? 'Change language to Korean' : 'Change language to English'}
                </button>
            </div>
            <div className={"firsthook"}>
                <div className={"firsthook1"}>
                <p className={"texto"}>{language === 'en' ? 'The place where I can find my music taste, mylist' : '나만의 음악 취향이'}</p>
                <p className={"texto"}>{language === 'en' ? '' : '완성되는 공간, 마이리스트'}</p>
                <p className={"texto2"}>Create and Share Your Playlist!</p>
                </div>
                <div className={"hookimg"}>
                    <img src={hookimg} alt="Logo" className={"hookimg"}/>
                </div>
            </div>

            <div className={"secondhook"}>
                <div className={"subsecond"}>
                    <p className={"texto21"}>{language === 'en' ? 'If you share each others music taste' : '서로의 음악 취향이 궁금할 때'}</p>
                    <p className={"texto22"}>{language === 'en' ? 'You can easily share them with just a link in your profile' : '프로필 링크 하나로 간편하게'}</p>
                </div>
            </div>

            <div className={"thirdhook"}>
                <div className={"thirdfirsthook"}>
                    <p className={"texto31"}>{language === 'en' ? 'Express yourself with playlist!' : '나만의 플레이리스트를 자유롭게 표현해봐!'}</p>
                </div>
                <div className={"thirdsecondhook"}>
                <p className={"texto32"}>{language === 'en' ? 'You can only do this with mylist' : '오직 마이리스트에서만 가능하니까'}</p>
                </div>
                <div className={"description"}>
                    <div className={"descs"}>
                        <div className={"bar"}>
                        </div>
                    <p className={"descnumber"}>01.</p>
                    <p className={"descname"}>서비스로 얻을 수 있는 것</p>
                    <p className={"descdesc"}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                    </div>
                    <div className={"descs"}>
                        <div className={"bar"}>
                        </div>
                        <p className={"descnumber"}>01.</p>
                        <p className={"descname"}>서비스로 얻을 수 있는 것</p>
                        <p className={"descdesc"}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                    </div>
                    <div className={"descs"}>
                        <div className={"bar"}>
                        </div>
                        <p className={"descnumber"}>01.</p>
                        <p className={"descname"}>서비스로 얻을 수 있는 것</p>
                        <p className={"descdesc"}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                    </div>
                </div>
            </div>

            <div className={"fourthhook"}>
                <div className={"fourthsubtit"}>
                    <p className={"fourthname"}>{language === 'en' ? 'Please Join on Waitlist' : '대기 명단 등록'}</p>
                </div>
                <div className={"fourthmaintit"}>
                    <p className={"fourthdesc"}>{language === 'en' ? 'If you want to use our product' : '가장 먼저 마이리스트를'}</p>
                    <p className={"fourthdesc"}>{language === 'en' ? 'First on the earth' : '사용하고 싶다면?'}</p>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={"inputbtncon"}>
                        <input className={"input-button-container"} type="email" id="email" name="email"
                               placeholder={language === 'en' ? 'Write down your own email' : '이메일 입력하기'}
                               />
                        <button type="submit" onClick={() => console.log('submitted')}
                                className="email-input-button">{language === 'en' ? 'Send' : '보내기'}</button></div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Renew;