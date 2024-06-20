// HomeOneData.jsx

import React from 'react';

const HomeOneData = ({ bannerContent, filterTabs, aboutStatistics, aboutContent, properties, propertyTypes, counts, portfolios, testimonials, blogs }) => {
    return (
        <div>
            {/* Banner Content */}
            {/* <div>
                <h2>{bannerContent.subtitle}</h2>
                <h1>{bannerContent.title}</h1>
                <h3>{bannerContent.gradientTitle}</h3>
                <p>{bannerContent.desc}</p>
                <img src={bannerContent.thumb} alt="Banner" />
            </div> */}

            {/* Filter Tabs */}
            <div>
                {filterTabs.map(tab => (
                    <div key={tab.id}>{tab.text}</div>
                ))}
            </div>

            {/* About Statistics */}
            {/* <div>
                <i className="fas fa-users text-gradient"></i>
                <span>{aboutStatistics.number}</span>
                <p>{aboutStatistics.text}</p>
            </div> */}

            {/* About Content */}
            {/* <div>
                <img src={aboutContent.thumb} alt="About" />
                <img src={aboutContent.icon} alt="Icon" />
                <h2>{aboutContent.title}</h2>
                <p>{aboutContent.desc}</p>
            </div> */}

            {/* Properties */}
            <div>
                {properties.map(property => (
                    <div key={property.id}>
                        <img src={property.thumb} alt="Property" />
                        <p>{property.price} {property.day}</p>
                        <h2>{property.title}</h2>
                        <p>{property.desc}</p>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{property.location}</span>
                        {/* <div>
                            {property.amenities.map((amenity, index) => (
                                <div key={index}>
                                    {amenity.icon}
                                    <span>{amenity.text}</span>
                                </div>
                            ))}
                        </div> */}
                        <button>{property.btnText}</button>
                    </div>
                ))}
            </div>

            {/* Property Types */}
            <div>
                {propertyTypes.map((type, index) => (
                    <div key={index}>
                        <img src={type.icon} alt="Property Type" />
                        <h2>{type.title}</h2>
                        <p>{type.desc}</p>
                    </div>
                ))}
            </div>

            {/* Counts */}
            {/* <div>
                {counts.map((count, index) => (
                    <div key={index}>
                        <h2>{count.number}</h2>
                        <p>{count.text}</p>
                    </div>
                ))}
            </div> */}

            {/* Portfolios */}
            {/* <div>
                {portfolios.map((portfolio, index) => (
                    <div key={index}>
                        <img src={portfolio.thumb} alt="Portfolio" />
                        <h2>{portfolio.title}</h2>
                        <p>{portfolio.desc}</p>
                        <button>{portfolio.btnIcon}</button>
                    </div>
                ))}
            </div> */}

            {/* Testimonials */}
            {/* <div>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <h2>{testimonial.name}</h2>
                        <h3>{testimonial.designation}</h3>
                        <p>{testimonial.desc}</p>
                        <img src={testimonial.quote} alt="Quote" />
                    </div>
                ))}
            </div> */}

            {/* Blogs */}
            {/* <div>
                {blogs.map(blog => (
                    <div key={blog.id}>
                        <img src={blog.thumb} alt="Blog" />
                        <p>{blog.admin}</p>
                        <div>
                            {blog.meta.map((item, index) => (
                                <span key={index}>{item.icon} {item.text}</span>
                            ))}
                        </div>
                        <h2>{blog.title}</h2>
                        <p>{blog.desc}</p>
                        <button>{blog.linkText}</button>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default HomeOneData;
