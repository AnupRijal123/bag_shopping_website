import '../styles/Footer.css';
import { useEffect, useState } from 'react';
import SocialMediaSection from './SocialMediaSection.js';
import { supabase } from '../supabase.js';

function Footer() {

    const currentYear = new Date().getFullYear();
    const [companyDetails, setCompanyDetails] = useState({});

    useEffect(() => {

        async function getFooterInformation() {
            const { data, error } = await supabase
                .from("company_information")
                .select("email,location,contact");

            if (data) {
                setCompanyDetails(data[0]);
            }

            if (error) {
                console.error("Error fetching data", error)
            }
        }

        getFooterInformation();

    }, []);

    return (
        <div className="footer">

            <div className="footer-first-row">
                <img className="brand-logo" src={require('../assets/logos/bb_logo.png')} alt="logo" />

                <div className="footer-column" >
                    <h2 className="white-text">For queries</h2>
                    <p className="white-text">{companyDetails?.email}</p>
                </div>

                <div className="footer-column">
                    <h2 className="white-text">Links</h2>

                    <div>
                        <p className="white-text">location</p>
                        <p className="white-text">{companyDetails?.location}</p>
                    </div>


                    <div>
                        <p className="white-text">social media</p>
                        <SocialMediaSection />
                    </div>


                    <div>
                        <p className="white-text">contact</p>
                        <p className="white-text">{companyDetails?.contact}</p>

                    </div>

                </div>
            </div>

            <div className="footer-second-row">
                <p className="white-text">All Rights Reserved,{currentYear}</p>
                <p className="white-text">Estd : 2011</p>
            </div>
            <p className="small-text light-gray-text center-aligned-text ">Website designed and coded by Anup Rijal</p>



        </div>
    )
}

export default Footer;