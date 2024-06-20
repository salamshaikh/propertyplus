// import React from 'react';

// const SubscribeBox = () => {
//     return (
//         <>
//             <form action="#" className="mt-4 subscribe-box">
//                 <div className="input-group">
//                     <input type="text" className="form-control common-input common-input--md text-white" placeholder="Your mail address"/>
//                     <button type="submit" className="px-4 input-group-text bg--gradient border-0 text-white"><i className="fas fa-paper-plane"></i></button>
//                 </div>
//             </form>   
//         </>
//     );
// };

// export default SubscribeBox;

import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const SubscribeBox = (props) => {

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Your Email is not valid! Provide valid email").required(),
        }),
    
        onSubmit: async (values, { resetForm }) => {
          try {
            const response = await axios.post('http://localhost:5000/subscribe', values);
            console.log(response.data);
            toast.success("Congratulations! You Have Submitted Successfully.", {
              theme: "colored",
            });
            resetForm();
          } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.', {
              theme: "colored",
            });
          }
        },
    });

    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span className="text-danger text-start d-block">{formik.errors.email}</span>
    );
    
    return (
        <>
            <ToastContainer/>
            <form action="#" onSubmit={formik.handleSubmit} className={`newsletter-content__form  d-flex align-items-start gap-2 ${props.formClass}`}>
                <div className="w-100">
                    <div className="position-relative w-100">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name='email'
                            id='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`className="form-control common-input--md text-white common-input common-input--withLeftIcon w-100 ${props.inputClass}  ${
                                formik.touched.email && formik.errors.email ? "is-invalid" : ""
                            }`}
                        />
                        <span className={`input-icon input-icon--left text-white font-20 line-height-1 ${props.iconClass}`}><i className="far fa-envelope"></i></span>
                    </div>
                    {renderEmailError}
                </div>
                <button type="submit" className="btn btn-main text-uppercase flex-shrink-0">
                <i className="fas fa-paper-plane"></i>
                </button>
            </form>   
        </>
    );
};

export default SubscribeBox;