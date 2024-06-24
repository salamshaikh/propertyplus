import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

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
    const [images, setImages] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(prevImages => [...prevImages, ...selectedImages]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        images.forEach(image => {
            data.append('images', image);
        });

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            setUploadStatus('Uploading...');
            const response = await axios.post('http://localhost:5000/postproperty', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setUploadStatus('Upload successful');
            console.log('Server response:', response.data);
            
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
            setImages([]);
           
            toast.success("Form submitted successfully!", { theme: "colored" });
        } catch (error) {
            toast.error("Error submitting the form", { theme: "colored" });
            setUploadStatus('Upload failed');
            console.error('There was an error!', error);
        }
    };

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
                                    <input 
                                        name="title" 
                                        type="text" 
                                        className="common-input" 
                                        id="title" 
                                        placeholder="Property Title" 
                                        value={formData.title}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Description" className="form-label">Description</label>
                                    <textarea 
                                        name="description" 
                                        className="common-input" 
                                        id="description" 
                                        value={formData.description}
                                        onChange={handleChange} 
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <label htmlFor="Status" className="form-label">Status</label>
                                    <div className="select-has-icon icon-black">
                                        <select 
                                            name="status"  
                                            className="select common-input" 
                                            id="status"  
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Status</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sell">Sell</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <label htmlFor="Type" className="form-label">Type</label>
                                    <div className="select-has-icon icon-black">
                                        <select 
                                            name="type" 
                                            className="select common-input" 
                                            id="type"  
                                            value={formData.type}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Type</option>
                                            <option value="1 BHK">1 BHK</option>
                                            <option value="2 BHK">2 BHK</option>
                                            <option value="3 BHK">3 BHK</option>                                            
                                            <option value="4 BHK">4 BHK</option>
                                            <option value="Shop">Shop</option>
                                            <option value="Office">Office</option>
                                            <option value="Plot">Plot</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <label htmlFor="Price" className="form-label">Price</label>
                                    <input 
                                        name="price" 
                                        type="number" 
                                        className="common-input" 
                                        id="price" 
                                        placeholder="Price" 
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <label htmlFor="Area" className="form-label">Area</label>
                                    <input 
                                        name="area" 
                                        type="number" 
                                        className="common-input" 
                                        id="area" 
                                        placeholder="Area" 
                                        value={formData.area}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-12">
                            <label htmlFor="Location" className="form-label">Location</label>
                            <div className="select-has-icon icon-black">
                                <select name="location" className="select common-input" id="location"  value={formData.location}
                                    onChange={handleChange}>
                                    <option value="">Select your area</option>
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
                            <div className="card-item" id="propertyGallery">
                            <div className="card common-card">
                                <div className="card-header">
                                    <h6 className="title mb-0">Property Gallery</h6>
                                </div>
                                <div className="card-body">
                                <div className="image-uploader">
                                    <label htmlFor="ImageUploadLabel" className="image-uploader__label">
                                        <span className="d-none">Upload Image</span>
                                    </label>
                                    <input
                                        //className="common-input" 
                                        multiple                                        
                                        type="file"
                                        className="image-uploader__input"
                                        id="ImageUploadLabel"
                                        onChange={handleImageChange}
                                    />
                                    {
                                        images.length > 0 ? (
                                            <div className="uploaded-images d-flex flex-wrap gap-3">
                                                {
                                                    images.map((image, index) => (
                                                        <div className="uploaded-image" key={index}>
                                                            <button type="button" className="uploaded-image__remove" onClick={() => handleRemoveImage(index)}>
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                                        </div>
                                                    ))
                                                }
                                                <button type="button" className="upload-button" >
                                                    Upload Images
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="upload-text">
                                                <span className="upload-text__icon">
                                                    <i className="fas fa-cloud-upload-alt"></i>
                                                </span>
                                                <span className="upload-text__text">Drag & Drop files here or click to browse</span>
                                            </div>
                                        )
                                    }
                                    {uploadStatus && <div className="upload-status">{uploadStatus}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>                                
                                <div className="col-12">
                                    <ul>
                                        {images.map((image, index) => (
                                            <li key={index}>
                                                {image.name}
                                                <button type="button" onClick={() => handleRemoveImage(index)}> Remove</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-main w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div>{uploadStatus}</div>
        </>
    );
};

export default ListingContactDetails;
