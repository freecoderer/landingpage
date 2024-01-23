import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './logo.svg';
import './PcRenew.css';
import hookimg from './Group 33.svg';
import highlight from './highlight.png';
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
                <button  onClick={toggleLanguage} className="w-[6rem] h-[2.7rem] ml-1 bg-neutral-700 rounded-[0.5rem] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"
                         className={"ml-1"}>
                        <g clip-path="url(#clip0_1_10)">
                            <path
                                d="M1.91667 11.5C1.91667 16.7929 6.20713 21.0833 11.5 21.0833C16.7929 21.0833 21.0833 16.7929 21.0833 11.5C21.0833 6.20712 16.7929 1.91666 11.5 1.91666C6.20713 1.91666 1.91667 6.20712 1.91667 11.5Z"
                                stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M12.4583 1.96457C12.4583 1.96457 15.3333 5.74999 15.3333 11.5C15.3333 17.25 12.4583 21.0354 12.4583 21.0354M10.5417 21.0354C10.5417 21.0354 7.66667 17.25 7.66667 11.5C7.66667 5.74999 10.5417 1.96457 10.5417 1.96457M2.52042 14.8542H20.4796M2.52042 8.14582H20.4796"
                                stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_10">
                                <rect width="23" height="23" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={"w-[0.7rem]"}></div>
                    <div><p className={"text-amber-50"}>{language === 'en' ? '한국어' : 'English'}</p></div>
                </button>
            </div>
            <div className={"firsthook"}>
                <div className={"firsthook1"}>
                    <p className={"texto"}>{language === 'en' ? 'The place where I can find my music taste mylist' : '나만의 음악 취향이'}</p>
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
                    <div className={"subsubsecond"}>
                        <p className={"texto22"}>{language === 'en' ? 'You can easily share them with just a link in your PROFILE' : '프로필 링크 하나로 간편하게'}</p>
                    </div>
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
                <br></br>
                <div className={"fourthmaintit"}>
                    <img src={highlight} alt="highlight" className={"highlight"}/>
                    <p className={"fourthdesc"}>{language === 'en' ? 'If you want to join in mylist' : '가장 먼저 마이리스트를'}</p>
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
                <div className={"barbar"}></div>
                <div className={"firstinfo"}><p className={"infoo"}>문의 : mylist.company@gmail.com</p></div>
                <div className={"secondinfo"}><p className={"infoo"}>MyList Copyright ⓒ TEAM CRUSH. All Rights Reserved</p> </div>
            </div>
        </div>
        </div>
    );
}

export default Renew;