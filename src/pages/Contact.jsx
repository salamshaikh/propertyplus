import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';
import PageTitle from '../common/PageTitle';
import { HelmetProvider } from 'react-helmet-async';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

import TopHeader from '../common/TopHeader';
const Contact = () => {
    return (
        <>
            <PageTitle title="Property Plus - Contact" />

            <OffCanvas/>
            <MobileMenu/>
            {/* Top header */}
            <TopHeader/>
            <main className="body-bg">
                
                {/* Header */}
                <Header 
                    headerClass="dark-header has-border" 
                    logoBlack={false}
                    logoWhite={true}
                    headerMenusClass="mx-auto"
                    btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                    btnLink="/post-property"
                    btnText="Post Property"
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* BreadCrumb */}
                <Breadcrumb 
                    pageTitle="Contact Us"
                    pageName="Contact Us"
                />

                {/* Contact Top */}
                <ContactTop/>

                <div className="contact-map address-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.096143556266!2d73.00979625108992!3d19.02967626464345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d7015c072b%3A0xb71badecb7100155!2sSeawood%20Corner%20Building!5e0!3m2!1sen!2sin!4v1718777816309!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Contact Us Section */}
                <ContactUsSection/>

                {/* Cta */}
                <Cta ctaClass=""/>

                {/* Footer */}
                <Footer/>

            </main>   
        </>
    );
};

export default Contact;
