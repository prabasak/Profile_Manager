import React, { useContext } from "react";
import styled from "styled-components";
import { ProfileContext } from "../../../store/profile.context";

const Form = styled.form`
  background: #f9f9f9;
  padding: 30px;
  font-size: 13px;
  color: #1f1c2e;

  & h3 {
    display: block;
    font-size: 24px;
    margin: 10px 0;
  }

  & h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 16px;
  }

  & .address-info {
    width: 46%;
    display: inline-block;
    margin: 0 2% 15px;
  }

  & fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;

    legend {
      text-transform: uppercase;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 600;
    }

    label {
      margin-bottom: 10px;
    }
  }

  & input {
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
    box-sizing: border-box;
    color: #1f1c2e;
  }

  & button {
    cursor: pointer;
    width: 100%;
    border: 2px solid transparent;
    background: #4caf50;
    color: #fff;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;

    &:hover {
      background: #43a047;
      -webkit-transition: background 0.3s ease-in-out;
      -moz-transition: background 0.3s ease-in-out;
      transition: background-color 0.3s ease-in-out;
    }

    &:active {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    &#contact-reset {
      background: #fff;
      border: 2px solid #4caf50;
      color: #1f1c24;
    }
  }
`;

// const INITIAL_FORM_DATA = {
//   name: "",
//   username: "",
//   email: "",
//   phone: "",
//   website: "",
//   address: {
//     street: "",
//     suite: "",
//     city: "",
//     zipcode: "",
//     geo: {
//       lat: "0",
//       lng: "0",
//     },
//   },
//   company: {
//     name: "",
//     catchPhrase: "",
//     bs: "",
//   },
// };

function AddProfile() {
  // const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleAddressChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     address: {
  //       ...prevFormData.address,
  //       [name]: value,
  //     },
  //   }));
  // };

  // const handleCompanyChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     company: {
  //       ...prevFormData.company,
  //       [name]: value,
  //     },
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   formData.id = Math.floor(Math.random() * 10)
  //   console.log(formData);
  //   setFormData(INITIAL_FORM_DATA);
  // };

  const {
    newProfileData,
    newProfileFieldChange,
    newProfileAddressChange,
    newProfileCompanyChange,
    newProfileSubmit,
  } = useContext(ProfileContext);

  return (
    <Form id="contact" onSubmit={newProfileSubmit}>
      <h3>Add Profile</h3>
      <h4>Enter details of a USER to create a profile</h4>
      <div className="address-info">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoFocus
          value={newProfileData.name}
          onChange={newProfileFieldChange}
        />
      </div>
      <div className="address-info">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          required
          value={newProfileData.username}
          onChange={newProfileFieldChange}
        />
      </div>
      <div className="address-info">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={newProfileData.email}
          onChange={newProfileFieldChange}
        />
      </div>
      <div className="address-info">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={newProfileData.phone}
          onChange={newProfileFieldChange}
        />
      </div>
      <fieldset>
        <legend>Address</legend>
        <div className="address-info">
          <label htmlFor="street">Street name</label>
          <input
            id="street"
            type="text"
            name="street"
            value={newProfileData.address.street}
            onChange={newProfileAddressChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="suite">Suite/House No.</label>
          <input
            id="suite"
            type="text"
            name="suite"
            value={newProfileData.address.suite}
            onChange={newProfileAddressChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={newProfileData.address.city}
            onChange={newProfileAddressChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="zipcode">Zip/Pincode</label>
          <input
            id="zipcode"
            type="text"
            name="zipcode"
            value={newProfileData.address.zipcode}
            onChange={newProfileAddressChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Company</legend>
        <div className="address-info">
          <label htmlFor="website">Website (optional)</label>
          <input
            id="website"
            type="url"
            name="website"
            value={newProfileData.website}
            onChange={newProfileFieldChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="coName">Company Name</label>
          <input
            id="coName"
            type="text"
            name="name"
            value={newProfileData.company.name}
            onChange={newProfileCompanyChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="catchphrase">Catchphrase</label>
          <input
            id="catchphrase"
            type="text"
            name="catchPhrase"
            value={newProfileData.company.catchPhrase}
            onChange={newProfileCompanyChange}
          />
        </div>
        <div className="address-info">
          <label htmlFor="bs">Business Slogan</label>
          <input
            id="bs"
            type="text"
            name="bs"
            value={newProfileData.company.bs}
            onChange={newProfileCompanyChange}
          />
        </div>
      </fieldset>
      <div className="address-info">
        <button name="reset" type="reset" id="contact-reset">
          Reset
        </button>
      </div>
      <div className="address-info">
        <button name="submit" type="submit" id="contact-submit">
          Submit
        </button>
      </div>
    </Form>
  );
}

export default AddProfile;
