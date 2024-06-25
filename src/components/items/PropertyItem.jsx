import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertyFilterContext } from '../../contextApi/PropertyFilterContext';
import { slugURL } from '../../utility/Utility';

const PropertyItem = ({ property, itemClass, iconsClass, btnClass, badgeText, badgeClass, btnRenderBottom, btnRenderRight }) => {
    //const [properties, setProperties] = useState([]);
    
    const { thumb, price, title, description, locationIcon, location, btnText, dataSort, dataStatuses, dataTypes, dataLocations, images } = property; 
    
    // Parse the images array from the JSON string
    const image = images ? JSON.parse(images) : [];
    
    // Details Slug
    const propertyURL = slugURL({url: 'property', slug: title}); 

    // For Random Badge
    const renderBadge = Math.random() < .5;

    // **************** Data Filter Search Code Start ****************
    const {selectedSort, dataStatus, dataType, dataLocation} = useContext(PropertyFilterContext); 

    const shouldHideSort = selectedSort !== 'All' && selectedSort !== property["dataSort"];
    const shouldHideStatus = dataStatus !== 'All' && dataStatus !== property["dataStatuses"];
    const shouldHideType = dataType !== 'All' && dataType !== property["dataTypes"];
    const shouldHideLocation = dataLocation !== 'All' && dataLocation !== property["dataLocations"];

    if (shouldHideSort || shouldHideStatus || shouldHideType || shouldHideLocation) {
        itemClass += " d-none";
    } 
    // **************** Data Filter Search Code End ****************
    
    return (
        <>
            <div className={`property-item ${itemClass}`} 
                datastatus={dataStatuses} 
                datatype={dataTypes} 
                datalocation={dataLocations}
                datasort={dataSort}
            >
                <div className="property-item__thumb">
                {images && images.length > 0 && (
                    <Link to={propertyURL} state={{ title, price }} className="link">
                        <img 
                            src={`https://propertyplus-73fd49e82310.herokuapp.com/uploads/${image[0]}`} 
                            alt={title} className="cover-img"
                            // style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                        />
                    </Link> 
                )}
                {   renderBadge && (
                    <span className={badgeClass}>{badgeText}</span>
                )}
                </div>
                <div className="property-item__content">    
                    <h6 className="property-item__price">{price}
                        <span className="day"></span> 
                    </h6>
                    <h6 className="property-item__title"> 
                        <Link to={propertyURL} state={{ title, description, price}} className="link">{title}</Link> 
                    </h6>
                    <p className="property-item__location d-flex gap-2"> 
                        <span className={`icon ${iconsClass}`}><i class="fas fa-map-marker-alt"></i> {locationIcon}</span>
                        {location}
                    </p>
                    <div className="property-item__bottom flx-between gap-2">
                        {/* <ul className="amenities-list flx-align">
                            {
                                amenities.map((amenity, amenityIndex) => {
                                    return (
                                        <li className="amenities-list__item flx-align" key={amenityIndex}>
                                            <span className={`icon ${iconsClass}`}>{amenity.icon}</span>
                                            <span className="text">{amenity.text}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul> */}
                        {
                            btnRenderRight && (
                                <Link to={propertyURL} state={{ thumb, title, description, price}} className={`simple-btn ${btnClass}`}>
                                    {btnText}
                                    <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
                                </Link>
                            )
                        }
                    </div>

                    {
                        btnRenderBottom &&
                        (
                            <Link to={propertyURL} state={{ thumb, title, description, price}} className={`simple-btn ${btnClass}`}>
                                {btnText}
                                <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
                            </Link>
                        )
                    }
                </div>
            </div>   
        </>
    );
};

export default PropertyItem;


