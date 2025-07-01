import '../styles/Banner.css';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

function Banner() {

    const [videoUrl, setVideoUrl] = useState('');


    useEffect(() => {

        async function getVideoUrl() {
            const { data, error } = await supabase.from('homepage_video')
                .select('video_url');

            if (data) {
                setVideoUrl(data[0].video_url);
            }
            if (error) {
                console.error("Error fetching video", error);
            }
        }
        getVideoUrl();
    }, []);


    function handleScrollDown() {
        window.scrollBy({
            top: window.innerHeight - 120,
            behavior: 'smooth'
        });
    }


    return (
        <div className="banner-container">

            {videoUrl.length !== 0 &&
                <video className="banner-video" autoPlay muted loop playsInline>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            }

            <div className="fade-container"></div>
            <div className="banner-content">
                <p className="white-text">Get all types of bags,</p>
                <p className="white-text">Or order bag with your own design</p>
                <h2 className="white-text">From us</h2>

                <div onClick={handleScrollDown} className="button-layout button-transparent-background button-white-border">
                    <div className="button-background-container button-white-background">
                        <p className="button-text white-text">scroll down</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner;