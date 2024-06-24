import React from 'react';

//import ListingBasicInformation from '../common/ListingBasicInformation';
// import ListingPropertyGallery from '../common/ListingPropertyGallery';
//import ListingPropertyInformation from './ListingPropertyInformation';
import ListingContactDetails from '../common/ListingContactDetails';
import { ToastContainer, toast } from 'react-toastify';

const AddListingForm = () => {
    return (
        
        <>
                <ToastContainer />
                <ListingContactDetails/>
                {/* <ListingBasicInformation/> */}
                {/* <ListingPropertyGallery/> */}
                {/* <ListingPropertyInformation/> */}
        </>
    );
};

export default AddListingForm;