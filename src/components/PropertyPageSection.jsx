import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyItem from './items/PropertyItem';
// import { properties } from '../data/HomeOneData/HomeOneData';
import Pagination from '../common/Pagination';
import PropertyFilterBottom from './PropertyFilterBottom';
import PropertyFilterForm from './PropertyFilterForm';

const PropertyPageSection = () => {
    const [properties, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/properties')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <>
            <section className="property bg-gray-100 padding-y-120">
                <div className="container container-two">

                   {/* Property Filter */}
                    <div className="property-filter">
                        <PropertyFilterForm/>
                        <PropertyFilterBottom/>
                    </div>  

                    <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
                        {
                            properties.map((property, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <PropertyItem 
                                            itemClass="property-item style-two style-shaped"
                                            btnClass="text-gradient fw-semibold"
                                            property={property}
                                            badgeText={property.category}
                                            badgeClass="property-item__badge"
                                            iconsClass="text-gradient"
                                            btnRenderBottom={true}
                                            btnRenderRight={false}
                                        />
                                    </div> 
                                )
                            })
                        }
                    </div>
                    

                    {/* Pagination */}
                    <Pagination/>

                </div>
            </section>   
        </>
    );
};

export default PropertyPageSection;


