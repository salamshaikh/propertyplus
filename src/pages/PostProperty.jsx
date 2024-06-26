import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import AddListingSection from '../components/AddListingSection';
import PageTitle from '../common/PageTitle';

import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const PostProperty = () => {
    return (
        <>
        <PageTitle title="Property Plus - Post Property" />

        <OffCanvas/>
        <MobileMenu/>

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
                pageTitle="Sell or Add New Property"
                pageName="Sell or Add New Property"
            />

            {/* Add Listing */}
            <AddListingSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default PostProperty;