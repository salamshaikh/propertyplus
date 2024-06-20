import React, { useContext } from 'react';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const PropertyFilterForm = () => {

    const {dataStatus, handleDataStatusChange, dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    return (
        <>
            <form action="#">
                <div className="row gy-4">

                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataStatusChange} value={dataStatus}>
                                <option value="Status" disabled defaultValue>Status</option>
                                <option value="All">All</option>
                                <option value="Sell">Sell</option>
                                <option value="Buy">Buy</option>
                                <option value="Rent">Rent</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/status.svg" alt=""/>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataTypeChange} value={dataType}>
                                <option value="Type" disabled defaultValue>Type</option>
                                <option value="All">All</option>
                                <option value="1 BHK">1 BHK</option>
                                <option value="2 BHK">2 BHK</option>
                                <option value="3 BHK">3 BHK</option>
                                <option value="Office">Office</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/type.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataLocationChange} value={dataLocation}>
                                <option value="Location" disabled defaultValue>Location</option>
                                    <option value="All"> All</option>
                                    <option value="Nerul / Seawoods" data-location="Nerul / Seawoods">Nerul / Seawoods</option>
                                    <option value="Ulwe" data-location="Ulwe">Ulwe</option>
                                    <option value="Vashi" data-location="Vashi">Vashi</option>
                                    <option value="Koper Khairane" data-location="Koper Khairane">Koper Khairane</option>
                                    <option value="CBD Belapur" data-location="Thailand">CBD Belapur</option>
                                    <option value="Airoli" data-location="Airoli">Airoli</option>
                                    <option value="Ghansoli" data-location="Ghansoli">Ghansoli</option>
                                    <option value="Rabale" data-location="Rabale">Rabale</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/location.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="position-relative">
                            <input type="text" className="common-input common-input--withLeftIcon pill text-gray-800" placeholder="Advanced Filter"/>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/filter.svg" alt=""/>
                            </span>
                        </div>
                    </div> */}
                </div>
            </form>   
        </>
    );
};

export default PropertyFilterForm;