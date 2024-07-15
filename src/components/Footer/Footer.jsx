import { React, useState } from 'react'
import { makeAPIcall } from "../../services/api"


function Footer() {
    const [feedBackText, setFeedBackText] = useState('');
    const handleChange = (e) => {
        let elem = e.target;
        setFeedBackText(elem.value);
    };
    const sendFeedback = async (reqTxt) => {
        Notific.Loading.Dots("Loading..");
        if (feedBackText.length === 0 && !reqTxt) {
            Notific.Notify.Warning("Please enter your valuable feedback!");
            Notific.Loading.Remove();
            return;
        }
        let req = {
            feedBackText: feedBackText || reqTxt
        }
        try {
            let response = await makeAPIcall('POST', '/feedBack/create', req);
            if (response.status === "success") {
                Notific.Confirm.Show("Ezy Scrap!", "Thank you for your valuable feedback! 🎉. We're committed to improving and appreciate your input.")
                setFeedBackText('');
            } else {
                Notific.Confirm.Show("Something went wrong!", response.error, "Okay");
            }
        } catch (error) {
            console.log(error);
        }
        Notific.Loading.Remove();
    }
    const sendHappyFeedback = async () => {
        Notific.Loading.Dots("Loading..");
        Notific.Confirm.Ask("Ezy scrap!", "We'd love to hear from you!😊. Please share your positive feedback with us", '', "Ok", "Cancel", async () => {
            let value = document.getElementById('NXConfirmValidationInput').value;
            await sendFeedback(value);
        })
        let value = '';
        let reqData = {
            "Name": name,
            "Feedback": value
        }
        await Notific.Confirm.Ask("Ezy scrap!", "We'd love to hear from you!😊. Please share your positive feedback with us", '', "Ok", "Cancel", async () => {
            debugger
            value = document.getElementById('NXConfirmValidationInput').value;
            reqData = {
                "Name": '',
                "Feedback": value
            }
        })
        await Notific.Confirm.Ask("shaheer scrap!", "Thank you for your valuable feedback! 🎉. Your good name ?.", '', "Ok", "Cancel", async () => {
            let name = document.getElementById('NXConfirmValidationInput').value;
            reqData.Name = name;
            console.log(reqData);
            // await sendFeedback(value);
        });
        Notific.Loading.Remove();
    }
    const sendUnHappyFeedback = async () => {
        Notific.Loading.Dots("Loading..");
        Notific.Confirm.Ask("Ezy scrap!", "We value your opinion!😊. Please let us know if there's anything you're unhappy with or feel could be improved.", '', "Ok", "Cancel", async () => {
            let value = document.getElementById('NXConfirmValidationInput').value;
            await sendFeedback(value);
        })
        Notific.Loading.Remove();
    }
    return (
        <div className='h-auto lg:h-[50vh] w-full lg:w-screen bg-[#FFFBF4] flex flex-col items-center justify-between lg:justify-center relative bottom-0'>
            <div className='flex items-center lg:flex-row flex-col justify-between w-5/6 lg:pt-[10px]'>
                <div className='flex flex-col-reverse lg:flex-col items-center justify-between'>
                    <div className='flex'>
                        <a className='flex flex-col items-center m-5 cursor-pointer hover:opacity-20' href='https://www.facebook.com/profile.php?id=61561131252315&mibextid=ZbWKwL' target='_blank'>
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                            <p className='text-[#153E67]'>FaceBook</p>
                        </a>
                        <a className='flex flex-col items-center m-5 cursor-pointer hover:opacity-20' href='https://www.instagram.com/ezyscrap' target='_blank'>
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <p className='text-[#153E67]'>Instagram</p>
                        </a>
                    </div>
                    <p className='text-[#5DA1E4] pt-4 text-xl'>Follow Us</p>
                </div>
                <div className='flex flex-col items-center justify-between p-[15px]'>
                    <p className='text-center text-[#5DA1E4] pt-4 text-xl'>Contact US</p>
                    <div className='pt-4'>
                        <div className='flex items-center p-2'>
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <p className='pl-4 text-[#153E67]'>infoezyscrap@gmail.com</p>
                        </div>
                        <div className='flex items-center p-2'>
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <p className='pl-4 text-[#153E67]'>+91 9902220210</p>
                        </div>
                    </div>
                </div>
                <div className='pt-8 lg:pt-0'>
                    <div className="bg-white border border-[#5DA1E4] grid grid-cols-6 gap-2 rounded-xl p-2 text-sm h-fit">
                        <h1 className="text-center text-[#5DA1E4] text-xl font-bold col-span-6">Send Feedback</h1>
                        <textarea onChange={handleChange} placeholder="Your feedback..." className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-[#5DA1E4] col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600" value={feedBackText} ></textarea>
                        <button onClick={sendHappyFeedback} className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                            </svg>
                        </button>
                        <button onClick={sendUnHappyFeedback} className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                        </button>
                        <span className="col-span-2"></span>
                        <button onClick={sendFeedback.bind(null, undefined)} className="bg-slate-100 stroke-slate-600 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                            <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlnsXlink="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-around h-full'>
                <div className='w-full border-[2px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderBottom: '3px' }}></div>
                <p className='text-[#5DA1E4] p-2'>&#169; 2024 EzyScrap | All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer