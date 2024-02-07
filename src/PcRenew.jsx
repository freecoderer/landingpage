import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './logo.svg';
import styles from './PcRenew.module.css';
import hookimg from './Group 33.svg';
import highlight from './highlight.png';
import mockup from './mockup.svg';
import mockup2 from './mockup2.svg';
import mockups from './mockups.svg';

function Renew() {
    const [language, setLanguage] = useState('ko'); // default language is English
    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'ko' : 'en'); // toggle between English and Korean
    };

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        // Get the checkbox element
        const checkbox = document.getElementById('agree');

        // Check if the checkbox is not checked
        if (!checkbox.checked) {
            // If the checkbox is not checked, show an alert and stop the function
            alert('Please agree to the terms and conditions before submitting.');
            return;
        }

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={styles.root}>
            <div className={styles.backgrounds}>
                <div className={styles.navnav}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <button onClick={toggleLanguage}
                            className={styles.btnfirst}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"
                             className={styles.btnlogo}>
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
                        <div><p className={styles.btntxt}>{language === 'en' ? '한국어' : 'English'}</p></div>
                    </button>
                </div>
                <div className={styles.firsthook}>
                    <div className={styles.firsthook1}>
                        <p className={styles.texto}>{language === 'en' ? 'The place where I can find my music taste mylist' : '나만의 음악 취향이'}</p>
                        <p className={styles.texto}>{language === 'en' ? '' : '완성되는 공간, 마이리스트'}</p>
                        <p className={styles.texto2}>Create and Share Your Playlist!</p>
                    </div>
                    <div className={styles.hookimg}>
                        <img src={hookimg} alt="Logo" className={styles.hookimg}/>
                    </div>
                </div>

                <div className={styles.secondhook}>
                    <div className={styles.subsecond}>
                        <p className={styles.texto21}>{language === 'en' ? 'If you share each others music taste' : '서로의 음악 취향이 궁금할 때'}</p>
                        <div className={styles.subsubsecond}>
                            <p className={styles.texto22}>{language === 'en' ? 'You can easily share them with just a link in your PROFILE' : '프로필 링크 하나로 간편하게'}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgs}>
                    <img src={mockup} alt="mockup" className={styles.mockup}/>
                    <img src={mockup2} alt="mockup2" className={styles.mockup2}/>
                </div>
                <div className={styles.thirdhook}>
                    <div className={styles.thirdfirsthook}>
                        <p className={styles.texto31}>{language === 'en' ? 'Express yourself with playlist!' : '나만의 플레이리스트를 자유롭게 표현해봐!'}</p>
                    </div>
                    <div className={styles.thirdsecondhook}>
                        <p className={styles.texto32}>{language === 'en' ? 'You can only do this with mylist' : '오직 마이리스트에서만 가능하니까'}</p>
                    </div>
                    <div className={styles.wrapper}><img src={mockups} alt="mockups" className={styles.mockups}/>
                        <img src={mockups} alt="mockups" className={styles.mockups}/>
                        <img src={mockups} alt="mockups" className={styles.mockups}/></div>
                    <div className={styles.description}>
                        <div className={styles.descs}>
                            <div className={styles.bar}>
                            </div>
                            <p className={styles.descnumber}>01.</p>
                            <p className={styles.descname}>서비스로 얻을 수 있는 것</p>
                            <p className={styles.descdesc}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                        </div>
                        <div className={styles.descs}>
                            <div className={styles.bar}>
                            </div>
                            <p className={styles.descnumber}>01.</p>
                            <p className={styles.descname}>서비스로 얻을 수 있는 것</p>
                            <p className={styles.descdesc}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                        </div>
                        <div className={styles.descs}>
                            <div className={styles.bar}>
                            </div>
                            <p className={styles.descnumber}>01.</p>
                            <p className={styles.descname}>서비스로 얻을 수 있는 것</p>
                            <p className={styles.descdesc}>음악에서 시작하여 나만의 브랜드를 만들고 싶다는 꿈을 이룬 클레어님의 스토리를 지금 만나보세요!</p>
                        </div>
                    </div>
                </div>

                <div className={styles.fourthhook}>
                    <div className={styles.fourthsubtit}>
                        <p className={styles.fourthname}>{language === 'en' ? 'Please Join on Waitlist' : '대기 명단 등록'}</p>
                    </div>
                    <br></br>
                    <div className={styles.fourthmaintit}>
                        <img src={highlight} alt="highlight" className={styles.highlight}/>
                        <p className={styles.fourthdesc}>{language === 'en' ? 'If you want to join in mylist' : '가장 먼저 마이리스트를'}</p>
                        <p className={styles.fourthdesc}>{language === 'en' ? 'First on the earth' : '사용하고 싶다면?'}</p>
                    </div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className={styles.inputbtncon}>
                                <input className={styles.input_button_container} type="email" id="email" name="email"
                                       placeholder={language === 'en' ? 'Write down your own email' : '이메일 입력하기'}
                                />
                                <button type="submit" onClick={() => console.log('btn clicked')}
                                        className={styles.email_input_button}>{language === 'en' ? 'Send' : '보내기'}</button>
                            </div>
                            <div>
                                <input type="checkbox" id="agree" name="agree"/>
                                <label className={styles.agree} htmlFor="agree">
                                    <span
                                        className={styles.underline}>{language === 'en' ? 'terms and conditions' : '개인정보 수집이용'}</span>
                                    {language === 'en' ? 'I agree to the ' : '에 동의합니다'}
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className={styles.barbar}></div>
                    <div className={styles.firstinfo}><p className={styles.infoo}>문의 : mylist.company@gmail.com</p></div>
                    <div className={styles.secondinfo}><p className={styles.infoo}>MyList Copyright ⓒ TEAM CRUSH. All Rights
                        Reserved</p></div>
                </div>
            </div>
        </div>
    );
}

export default Renew;