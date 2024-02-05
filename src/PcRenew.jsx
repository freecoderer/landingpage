import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './logo.svg';
import './PcRenew.css';
import hookimg from './Group 33.svg';
import highlight from './highlight.png';
import mockup from './mockup.svg';
import mockup2 from './mockup2.svg';
import mockups from './mockups.svg';
import materials from './materials.svg';
function Renew() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState('ko'); // default language is English
    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'ko' : 'en'); // toggle between English and Korean
    };

    const form = useRef();

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsModalOpen(true);

        // Get the email input element
        const emailInput = document.getElementById('email');

        // Validate the email
        if (!validateEmail(emailInput.value)) {
            // If the email is not valid, show an alert and stop the function
            alert('Please enter a valid email address.');
            return;
        }

        // Get the checkbox element
        const checkbox = document.getElementById('agree');

        // Check if the checkbox is not checked
        if (!checkbox.checked) {
            // If the checkbox is not checked, show an alert and stop the function
            alert('개인정보 수집 이용에 동의 해 주세요\nPlease agree to the terms and conditions before submitting.');

            return;
        }

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('이메일 전송 완료\nEmail sent successfully!');
            }, (error) => {
                console.log(error.text);
            });
    };

    const confirmAndSendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setIsModalOpen(false);
    };

    return (
        <div className={"root"}>
            <div className={"backgrounds"}>
                <div className={"navnav"}>
                    <img src={logo} alt="Logo" className={"logo"}/>
                    <button onClick={toggleLanguage}
                            className="w-[6rem] h-[2.7rem] ml-1 bg-neutral-700 rounded-[0.5rem] flex items-center">
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
                        <img src={materials} alt="meterials" className={"meterials"}/>
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
                <div className={"imgs"}>
                    <img src={mockup} alt="mockup" className={"mockup"}/>
                    <img src={mockup2} alt="mockup2" className={"mockup2"}/>
                </div>
                <div className={"thirdhook"}>
                    <div className={"thirdfirsthook"}>
                        <p className={"texto31"}>{language === 'en' ? 'Express yourself with playlist!' : '나만의 플레이리스트를 자유롭게 표현해봐!'}</p>
                    </div>
                    <div className={"thirdsecondhook"}>
                        <p className={"texto32"}>{language === 'en' ? 'You can only do this with mylist' : '오직 마이리스트에서만 가능하니까'}</p>
                    </div>
                    <div className={"h-10"}></div>
                    <div className={"description"}>
                        <div className={"descs"}>
                            <div className={"bar"}>
                            </div>
                            <p className={"descnumber"}>01.</p>
                            <p className={"descname"}>{language === 'en' ? 'Whenever I want to tell the music that I like' : '내가 좋아하는 음악을 주변에 알려주고 싶을 때'}</p>
                            <p className={"descdesc"}>{language === 'en' ? 'You can easily share them with my list!' : '나만 아는 명곡을 주변에 꼭 알려주고 싶었던 적 있나요? 마이리스트를 만들고 프로필 링크를 공유해보세요!'}</p>
                        </div>
                        <div className={"descs"}>
                            <div className={"bar"}>
                            </div>
                            <p className={"descnumber"}>02.</p>
                            <p className={"descname"}>{language === 'en' ? 'Whenever I want to express my emotion with music and pics' : '추억이 담긴 사진과 음악으로 나만의 감성을 담고 싶을 때'}</p>
                            <p className={"descdesc"}>{language === 'en' ? 'Share precious moment with mylist' : '음악을 들으면 그때의 추억이 떠오르곤 하죠. 친구, 가족, 연인과 함께한 소중한 순간들을 마이리스트로 기록해봐요!'}!</p>
                        </div>
                        <div className={"descs"}>
                            <div className={"bar"}>
                            </div>
                            <p className={"descnumber"}>03.</p>
                            <p className={"descname"}>{language === 'en' ? 'Whenever I want to share my favorite artists' : '내가 좋아하는 아티스트를 마음 껏 티내고 싶을 때'}</p>
                            <p className={"descdesc"}>{language === 'en' ? 'Make mylist with muisc and picture of your favorite artist and share your link!' : '내가 좋아하는 음악을 주변에 알려주고 싶을 때'}</p>
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
                                <button type="submit" onClick={() => console.log('btn clicked')}
                                        className="email-input-button">{language === 'en' ? 'Send' : '보내기'}</button>
                            </div>
                            <br></br>
                            <div>
                                <input type="checkbox" id="agree" name="agree"/>
                                <label className={"agree"} htmlFor="agree">
                                    <span
                                    className="underline white">{language === 'en' ? 'I agree to the terms and conditions' : '개인정보 수집이용에 동의합니다'}</span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className={"barbar"}></div>
                    <div className={"firstinfo"}><p className={"infoo"}>{language === 'en' ? 'Inquire' : '문의'} : mylist.company@gmail.com</p></div>
                    <div className={"secondinfo"}><p className={"infoo"}>MyList Copyright ⓒ TEAM CRUSH. All Rights
                        Reserved</p></div>
                </div>
                <br></br>
            </div>
        </div>
    );
}

export default Renew;



























