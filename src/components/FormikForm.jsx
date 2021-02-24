import React from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup';



const schema = Yup.object().shape({
 name: Yup.string()
    .min(4, "მინიმუმი 4 სიმბოლო")
    .max(255, 'სიმბოლოების რაოდენობის ლიმიტი ამოიწურა')
    .required('სახელი არის სავალდებულო'),

 email: Yup.string()
    .email("უნდა იყოს მეილი")
    .max(255, "სიმბოლოების რაოდენობის ლიმიტი ამოიწურა")
    .required('მეილი არის სავალდებულო')
})

const FormikForm = (props) => {
    return (
        <Formik 
        initialValues={{
            name: '',
            email: ''
        }}
        onSubmit={(values, {setSubmitting,resetForm}) => {
            setSubmitting(true)

            setTimeout(()=> {
                console.log(JSON.stringify(values));
                resetForm();
                setSubmitting(false)
            }, 2000)
        }}
        validationSchema={schema}>
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <h2>Formik form and Yup validationSchema</h2>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                placeholder="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? 'has-error' : ''}/>

                                <p>
                                    Message: {errors.name}
                                </p>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? 'has-error' : ''}/>
                                <p>
                                    Message: {errors.email}
                                </p>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikForm;