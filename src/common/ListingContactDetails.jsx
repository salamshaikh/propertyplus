import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const ListingContactDetails = () => {
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        email: '',
        phone: '',
        title: '',
        description: '',
        status: '',
        type: '',
        price: '',
        area: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/postproperty', formData);
            toast.success("Form submitted successfully!", { theme: "colored" });
            console.log(response)
            setFormData({
                role: '',
                name: '',
                email: '',
                phone: '',
                title: '',
                description: '',
                status: '',
                type: '',
                price: '',
                area: '',
                location: ''
            });
        } catch (error) {
            toast.error("Error submitting the form", { theme: "colored" });
            console.error('There was an error!', error);
        }
    };
    // const renderEmailError = formik.touched.email && formik.errors.email && (
    //     <span className="text-danger text-start d-block">{formik.errors.email}</span>
    // );

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
            <div className="card-item" id="personalDetails">
                <div className="card common-card">
                    <div className="card-header">
                        <h6 className="title mb-0">Personal Details</h6>
                    </div>
                    <div className="card-body">
                        
                            <div className="row gy-4">
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <h6 className="title mb-4">You are</h6>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="payment-method">
                                        <div className="common-radio">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="role" 
                                                id="owner" 
                                                value="Owner" 
                                                checked={formData.role === 'Owner'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="owner">Owner</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="payment-method">
                                        <div className="common-radio">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="role" 
                                                id="agent" 
                                                value="Agent" 
                                                checked={formData.role === 'Agent'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="agent">Agent</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="payment-method">
                                        <div className="common-radio">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="role" 
                                                id="builder" 
                                                value="Builder" 
                                                checked={formData.role === 'Builder'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="builder">Builder</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row gy-4">
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="common-input" 
                                        placeholder="Your Name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <label htmlFor="email" className="form-label">Your E-mail</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className="common-input" 
                                        placeholder="Your E-Mail" 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        className="common-input" 
                                        placeholder="Phone Number" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <br />
                    </div>
                </div>
            </div>
            
            <div className="card-item" id="propertyInformation">
            <div className="card common-card">
                <div className="card-header">
                    <h6 className="title mb-0">Property Information</h6>
                </div>
                <div className="card-body">
                    <div className="row gy-4">
                        <div className="col-sm-12">
                            <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                            <input name="title" type="text" className="common-input" id="title" placeholder="Property Title" value={formData.title}
                                        onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <textarea name="description" className="common-input" id="description" value={formData.description}
                                        onChange={handleChange} placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Status" className="form-label">Status</label>
                            <div className="select-has-icon icon-black">
                                <select name="status"  className="select common-input" id="status"  value={formData.name}
    onChange={handleChange}>
                                    <option value="1" disabled="">Status</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Sell">Sell</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Type" className="form-label">Type</label>
                            <div className="select-has-icon icon-black">
                                <select name="type" className="select common-input" id="type"  value={formData.name}
    onChange={handleChange}>
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
                            <input type="number" name="price" className="common-input" value={formData.price}
                                        onChange={handleChange} id="price" placeholder="INR" />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Area" className="form-label">Area</label>
                            <input type="text" name="area" className="common-input" id="area" value={formData.area}
                                        onChange={handleChange} placeholder="Sector" />
                        </div>
                        <div className="col-sm-12">
                            <label htmlFor="Location" className="form-label">Location</label>
                            <div className="select-has-icon icon-black">
                                <select name="location" className="select common-input" id="location"  value={formData.name}
    onChange={handleChange}>
                                    <option value="Nerul / Seawoods">Select your area</option>
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
                        <br/>
                        <button type="submit" className="btn btn-main w-100">Submit Property</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ListingContactDetails;