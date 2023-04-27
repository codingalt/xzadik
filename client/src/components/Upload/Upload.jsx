import React, { useRef, useState } from "react";
import "./upload.css";
import * as hi from "react-icons/hi";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";

const toastHandle = (result, message) => {
    if (result) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 11000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

const Upload = () => {
  const imageRef = useRef();
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(null);

  const projectSchema = Yup.object({
    workType: Yup.string().required('Work Type is Required'),
    keyword: Yup.string().required('Keyword is Required'),
    liscense: Yup.string().required('Liscense type is Required'),
    projectImg: Yup.array().required('Please Select Project Image'),
  });

  const formik = useFormik({
    initialValues: {
        workType: '',
        liscense: '',
        keyword: '',
        projectImg: [],
    },
    validationSchema: projectSchema,
    onSubmit: (values) => {
        if(values.projectImg.length === 0){
            setError(true);
            return;
        }
        else{
            const postData = async () => {
                setLoader(true);
                const res = await fetch(`${process.env.REACT_APP_URI}/project`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: 'include',
                  body: JSON.stringify(values, null, 2),
                });
                const data = await res.json();
                toastHandle(true, 'Project Uploaded Successfully');
                setLoader(false);
                formik.resetForm();
                setImage(null)
              };
              postData();
        }
     
    },
  });

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImage(e.target.files[0].name)
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          formik.values.projectImg.push(reader.result);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="upload-wrap">
        <ToastContainer />
      <div className="u-container shadow-sm">
        <h3>Upload your Artworks</h3>
        <div className="inner-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="upload-box" onClick={() => imageRef.current.click()}>
            <input
              type="file"
              ref={imageRef}
              style={{display: 'none'}}
              onChange={(e)=> {setError(false); handleImage(e)}}
              accept='image/*'
              name="projectImg"
              className={formik.touched.projectImg && formik.errors.projectImg}
            />
            <div className="icon">
              <hi.HiOutlineUpload />
            </div>
            <h4>Click here to browse your file</h4>
            <span>File format JPEG,PNG and JPG</span>
            {
                image && <span className="mt-3">{image}</span>
            }
            {
            error &&
            <div className="input-error mt-3">Please select projecr image</div>
            }

          </div>

          <div className="project-props mt-2">
            
              <div className="form-group">
                <label htmlFor="worktype">Work Type</label>
                <select name="workType" value={formik.values.workType} onChange={formik.handleChange}>
                  <option value="logo">Logo</option>
                  <option value="mockups">Web Mockups</option>
                  <option value="photography">Photography</option>
                </select>
                {formik.touched.workType && formik.errors.workType ? (
            <div className='input-error'>{formik.errors.workType}</div>
          ) : null}

              </div>
              <div className="form-group">
                <label htmlFor="keyword">Keyword</label>
                <input
                  type="text"
                  name="keyword"
                  value={formik.values.keyword}
                  onChange={formik.handleChange}
                  placeholder="Eg: Buisness, nature, birds etc"
                />
                 {formik.touched.keyword && formik.errors.keyword ? (
            <div className='input-error'>{formik.errors.keyword}</div>
          ) : null}

              </div>
              <div className="form-group">
                <label htmlFor="worktype">Liscense Type</label>
                <select name="liscense" value={formik.values.liscense} onChange={formik.handleChange}>
                  <option value="creative">Creative Common</option>
                  <option value="commercial">Commercial & Others</option>
                </select>
                {formik.touched.liscense && formik.errors.liscense ? (
            <div className='input-error'>{formik.errors.liscense}</div>
          ) : null}

              </div>

              <div className="btn-div">
                <button disabled={formik.isSubmitting} style={loader ? {opacity: '.75'} : {opacity: '1'}} type="submit" className="submit-btn button">{loader ? 'Publishing...' : 'Upload Project'}</button>
              </div>
          </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Upload