import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ProjectSection from '../components/ProjectSection';
import PageTitle from '../common/PageTitle';
import TopHeader from '../common/TopHeader';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const Project = () => {
    return (
        <>
        <PageTitle title="Property Plus - Project" />
            {/* Top header */}
            <TopHeader/>
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
                pageTitle="Project"
                pageName="Project"
            />

            {/* Project Section */}
            <ProjectSection/>     

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Project;