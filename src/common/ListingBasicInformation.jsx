import React from 'react';

const ListingBasicInformation = () => {
    return (
        <div className="card-item" id="propertyInformation">
            <div className="card common-card">
                <div className="card-header">
                    <h6 className="title mb-0">Property Information</h6>
                </div>
                <div className="card-body">
                    <div className="row gy-4">
                        <div className="col-sm-12">
                            <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                            <input type="text" className="common-input" id="propertyTitle" placeholder="Property Title" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <textarea className="common-input" id="Description" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Status" className="form-label">Status</label>
                            <div className="select-has-icon icon-black">
                                <select className="select common-input" id="Status">
                                    <option value="1" disabled="">Status</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Sell">Sell</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Type" className="form-label">Type</label>
                            <div className="select-has-icon icon-black">
                                <select className="select common-input" id="Type">
                                    <option value="1" disabled="">Type</option>
                                    <option value="1 BHK">1 BHK</option>
                                    <option value="2 BHK">2 BHK</option>
                                    <option value="3 BHK">3 BHK</option>
                                    <option value="Shop">Shop</option>
                                    <option value="Office">Office</option>
                                    <option value="Plot">Plot</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Price" className="form-label">Price</label>
                            <input type="number" className="common-input" id="Price" placeholder="INR" />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Area" className="form-label">Area</label>
                            <input type="text" className="common-input" id="Area" placeholder="Sector" />
                        </div>
                        <div className="col-sm-12">
                            <label htmlFor="Location" className="form-label">Location</label>
                            <div className="select-has-icon icon-black">
                                <select className="select common-input" id="Location">
                                    <option value="Nerul / Seawoods">Nerul / Seawoods</option>
                                    <option value="Ulwe">Ulwe</option>
                                    <option value="Vashi">Vashi</option>
                                    <option value="Koper Khairane">Koper Khairane</option>
                                    <option value="CBD Belapur">CBD Belapur</option>
                                    <option value="Airoli">Airoli</option>
                                    <option value="Ghansoli">Ghansoli</option>
                                    <option value="Rabale">Rabale</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingBasicInformation;

// import React from 'react';

// const ListingBasicInformation = () => {
//     return (
//         <>
//             <div className="card-item" id="propertyInformation">
//                 <div className="card common-card">
//                     <div className="card-header">
//                         <h6 className="title mb-0">Property Information</h6>
//                     </div>
//                     <div className="card-body">
//                         <div className="row gy-4">
//                             <div className="col-sm-12">
//                                 <label htmlFor="propertyTitle" className="form-label">Property Title</label>
//                                 <input type="text" className="common-input" id="propertyTitle" placeholder="Property Title"/>
//                             </div>
//                             <div className="col-12">
//                                 <label htmlFor="Description" className="form-label">Description</label>
//                                 <textarea className="common-input" id="Description" placeholder="Your Message"></textarea>
//                             </div>
//                             <div className="col-sm-6 col-xs-6">
//                                 <label htmlFor="Status" className="form-label">Status</label>
//                                 <div className="select-has-icon icon-black">
//                                     <select className="select common-input" id="Status">
//                                         <option value="1" disabled="">Status</option>
//                                         <option value="Rent">Rent</option>
//                                         <option value="Sell">Sell</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 col-xs-6">
//                                 <label htmlFor="Type" className="form-label">Status</label>
//                                 <div className="select-has-icon icon-black">
//                                     <select className="select common-input" id="Type">
//                                         <option value="1" disabled=""> Type</option>
//                                         <option value="1 BHK">1 BHK</option>
//                                         <option value="2 BHK">2 BHK</option>
//                                         <option value="3 BHK">3 BHK</option>
//                                         <option value="Shop">Shop</option>
//                                         <option value="Office">Office</option>
//                                         <option value="Plot">Plot</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 col-xs-6">
//                                 <label htmlFor="Price" className="form-label">Price</label>
//                                 <input type="number" className="common-input" id="Price" placeholder="INR"/>
//                             </div>
//                             <div className="col-sm-6 col-xs-6">
//                                 <label htmlFor="Area" className="form-label">Area</label>
//                                 <input type="text" className="common-input" id="Area" placeholder="Sector"/>
//                             </div>
//                             <div className="col-sm-12">
//                                 <label htmlFor="Location" className="form-label">Location</label>
//                                 <div className="select-has-icon icon-black">
//                                     <select className="select common-input" id="Location">
//                                         <option value="Nerul / Seawoods">Nerul / Seawoods</option>
//                                         <option value="Ulwe">Ulwe</option>
//                                         <option value="Vashi">Vashi</option>
//                                         <option value="Koper Khairane">Koper Khairane</option>
//                                         <option value="CBD Belapur">CBD Belapur</option>
//                                         <option value="Airoli">Airoli</option>
//                                         <option value="Ghansoli">Ghansoli</option>
//                                         <option value="Rabale">Rabale</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>   
//         </>
//     );
// };

// export default ListingBasicInformation;