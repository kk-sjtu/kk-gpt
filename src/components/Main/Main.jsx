import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { Context } from '../../context/Context';
const Main = () => {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


    const handleCardClick = (promptText) => {
        setInput(promptText);
    };
return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.yoki} alt="" />
        </div>
        <div className="main-container">
            {!showResult ? (
                <>
                    <div className="greet">
                        <p>
                            <span>Hello , Yoki </span>
                        </p>
                        <p>How Can i Help You Today?</p>
                    </div>
                    <div className="cards">
                        <div
                            className="card"
                            onClick={() =>
                                handleCardClick("Suggest Some Place To Visit In India.")
                            }
                        >
                            <p>Suggest Some Place To Visit In India.</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div
                            className="card"
                            onClick={() =>
                                handleCardClick(
                                    "Explain the process of photosynthesis in simple terms"
                                )
                            }
                        >
                            <p>Explain the process of photosynthesis in simple terms </p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div
                            className="card"
                            onClick={() =>
                                handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")
                            }
                        >
                            <p>How do you create a responsive navbar using CSS and JavaScript?</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div
                            className="card"
                            onClick={() => {
                                handleCardClick(
                                    "What are some essential skills for becoming a front-end developer?"
                                );
                            }}
                        >
                            <p>What are some essential skills for becoming a front-end developer?</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </>
            ) : (
                <div className="result">
                    <div className="result-title">
                        <img src={assets.yoki} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? (
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        )}
                    </div>
                </div>
            )}

        

<div className="main-bottom">
    <div className="search-box">
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"placeholder='Enter a prompt here' />
            <div>
            <img src={assets.gallery_icon} alt=''/>
            <img src={assets.mic_icon} alt=''/>
            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt=''/>:null}
            </div>
            </div>
        <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its risk
        </p>

</div>
      </div>
    </div>
  )
}

export default Main
