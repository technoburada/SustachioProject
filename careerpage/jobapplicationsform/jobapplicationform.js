import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowCircleLeft, HiArrowCircleRight, HiUser, HiMail, HiPhone, HiCalendar, HiCurrencyDollar, HiSearch, HiUserGroup, HiDocumentText, HiPaperClip, HiUserCircle,HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';
import './jobapplicationform.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    jobtitle: '',
    surname: '',
    email: '',
    telephone: '',
    availableFrom: '',
    salaryRequirement: '',
    foundOutAboutUs: '',
    talentPool: '',
    cv: null,
    coverLetter: null,
    employmentReference: null,
    other: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setFormData({
      firstname: '',
      jobtitle: '',
      surname: '',
      email: '',
      telephone: '',
      availableFrom: '',
      salaryRequirement: '',
      foundOutAboutUs: '',
      talentPool: '',
      cv: null,
      coverLetter: null,
      employmentReference: null,
      other: null,
    });
  };

  const handleSeeAllJobs = () => {
    console.log('Redirecting to all jobs...');
  };

  return (
    <div className="job-application-container">
      <Link to="/careers">
        <button className="see-all-jobs-button" onClick={handleSeeAllJobs}>
          <HiArrowCircleLeft size={24} style={{ marginRight: '10px' }} /> Back to all job offers
        </button>
      </Link>

      <div className="job-application-form">
        {isSubmitted ? (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>Your application has been submitted successfully.</p>
            <p>We will review your application and get back to you shortly.</p>
          </div>
        ) : (
          <>
            <p>Welcome to the application portal of the Sustachio GmbH</p>
            <p>Apply in just a few steps. Please fill out the following form and upload your application documents at the end. Immediately after submitting the form, you will receive a confirmation of receipt.</p>
            <p>We look forward to receiving your application!</p>

            <form onSubmit={handleSubmit}>
              {/* Job Title Dropdown */}
              <div className="jobapplicationform-group">
                <label>In which Position are you applying to? *</label>
                <div className="input-with-icon">
                  <HiSearch size={20} />
                  <select
                    name="foundOutAboutUs"
                    value={formData.foundOutAboutUs}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="LinkedIn">Product Designer</option>
                    <option value="Job Board">Java Developer</option>
                    <option value="Referral">IT Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Name and Surname */}
              <div className="jobapplicationform-row1">
                <div className="jobapplicationform-group">
                  <label>NAME *</label>
                  <div className="input-with-icon" style={{width:"350px"}}>
                    <HiUser size={20} />
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="jobapplicationform-group">
                  <label>SURNAME *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiUser size={20} />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email and Telephone */}
              <div className="jobapplicationform-row2">
                <div className="jobapplicationform-group">
                  <label>EMAIL *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiMail size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="yourmail@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="jobapplicationform-group">
                  <label>TELEPHONE *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiPhone size={20} />
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="+"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

                            {/* Street and City */}
                            <div className="jobapplicationform-row5">
                <div className="jobapplicationform-group">
                  <label>Street *</label>
                  <div className="input-with-icon" style={{width:"350px"}}>
                    <HiLocationMarker  size={20} />
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="jobapplicationform-group">
                  <label>City *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiOfficeBuilding size={20} />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Available From and Salary Requirement */}
              <div className="jobapplicationform-row3">
                <div className="jobapplicationform-group">
                  <label>AVAILABLE FROM *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiCalendar size={20} />
                    <input
                      type="date"
                      name="availableFrom"
                      value={formData.availableFrom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="jobapplicationform-group">
                  <label>Expected Salary *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiCurrencyDollar size={20} />
                    <input
                      type="text"
                      name="salaryRequirement"
                      value={formData.salaryRequirement}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* How Did You Find Out About Us? and Talent Pool */}
              <div className="jobapplicationform-row4">
                <div className="jobapplicationform-group">
                  <label>How did you find about us? *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiSearch size={20} />
                    <select
                      name="foundOutAboutUs"
                      value={formData.foundOutAboutUs}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Job Board">Job Board</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="jobapplicationform-group">
                  <label>Would like to be included in our talent pool? *</label>
                  <div className="input-with-icon"style={{width:"350px"}}>
                    <HiUserGroup size={20} />
                    <select
                      name="talentPool"
                      value={formData.talentPool}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="jobapplicationform-group">
                <label>DOCUMENTS</label>
                <p>Please upload your CV, current certificates, and a cover letter (max. 20 MB in total).</p>
                <div className="jobapplicationform-grid">
                  <div className="jobapplicationformfile-upload-group">
                    <label><HiDocumentText size={20} /> Curriculum Vitae *</label>
                    <input type="file" name="cv" onChange={handleChange} required />
                  </div>
                  <div className="jobapplicationformfile-upload-group">
                    <label><HiDocumentText size={20} /> Cover Letter *</label>
                    <input type="file" name="coverLetter" onChange={handleChange} required />
                  </div>
                  <div className="jobapplicationformfile-upload-group">
                    <label><HiUserCircle size={20} /> Employment Reference</label>
                    <input type="file" name="employmentReference" onChange={handleChange} />
                  </div>
                  <div className="jobapplicationformfile-upload-group">
                    <label><HiPaperClip size={20} /> Other</label>
                    <input type="file" name="other" onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="jobapplicationformbutton">
                Submit application <HiArrowCircleRight size={24} style={{ marginLeft: '10px' }} />
              </button>

              {/* Footer Links */}
              <div className="jobapplicationformcookiefooter">
                <a href="/imprint">
                  <i className="fas fa-file-contract"></i> Data Protection Policy
                </a>
                <a href="/privacy-policy">
                  <i className="fas fa-user-shield"></i> Privacy Policy
                </a>
                <a href="/settings">
                  <i className="fas fa-cog"></i> Cookie Settings
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default JobApplicationForm;