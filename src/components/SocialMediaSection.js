import '../styles/SocialMediaSection.css';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

function SocialMediaSection() {
    const [socialMediaLinks, setSocialMediaLinks] = useState({});

    useEffect(() => {
        async function getSocialMediaLinks() {
            const { data, error } = await supabase
                .from("company_information")
                .select("facebook_link,instagram_link,whatsapp_link");

            if (data) {
                setSocialMediaLinks(data[0]);
            }
            if (error) {
                console.error("Error fetching data", error)
            }
        }

        getSocialMediaLinks();
    }, []);

    return (
        <div className="social-media-icon-container">
            <a href={socialMediaLinks?.facebook_link}>
                <img className="social-media-icon" src={require('../assets/logos/facebooklogo.jpg')} alt="fb-logo" />
            </a>

            <a href={socialMediaLinks?.instagram_link}>
                <img className="social-media-icon" src={require('../assets/logos/instagramlogo.jpg')} alt="insta-logo" />
            </a>

            <a href={socialMediaLinks?.whatsapp_link}>
                <img className="social-media-icon" src={require('../assets/logos/whatsapplogo.png')} alt="whatsapp-logo" />
            </a>

        </div>
    )
}

export default SocialMediaSection;