import { createContext, useState, useCallback, useEffect } from "react";

export const ProfileContext = createContext({
  users: [],
  isDataFetching: null,
  newProfileData: {},
  newProfileFieldChange: () => {},
  newProfileAddressChange: () => {},
  newProfileCompanyChange: () => {},
  newProfileSubmit: () => {},
  deleteProfile: () => {},
  selectedProfileForEdit: null,
  updateProfile: () => {},
  modalOpen: () => {},
  modalClose: () => {},
  modalIsOpen: null,
  addModal: null,
  deleteModal: null,
  editModal: null,
});

const INITIAL_FORM_DATA = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "0",
      lng: "0",
    },
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};
export default function ProfileContextProvider({ children }) {
  // ---> Read data
  const [data, setData] = useState({
    users: [],
  });
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setData({ users: jsonData });
    } catch (error) {
      console.log(`Error fetching data -> ${error}`);
    }
    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ---> Add data
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        [name]: value,
      },
    }));
  };

  const handleCompanyChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      company: {
        ...prevFormData.company,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.id = data.users.length + 1;
    console.log(formData);
    setData({ users: [formData, ...data.users] });
    setFormData(INITIAL_FORM_DATA);
  };

  // ---> Delete data
  const [selectForDelete, setSelectForDelete] = useState(null);
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${selectForDelete.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updatedData = await data.users.filter(
          (user) => user.id !== selectForDelete.id
        );
        setData({ users: updatedData });
        setModalIsOpen(false);
        setOpenDeleteModal(false);
        setSelectForDelete(null);
      } else {
        alert("Delete Failed");
      }
    } catch (error) {
      alert(`Error fetching data -> ${error}`);
    }
  };

  // ---> Edit data
  const [selectForEdit, setSelectForEdit] = useState(null);

  const handleUpdateProfile = (updatedProfile) => {
    data.users[updatedProfile.key] = updatedProfile;
    setSelectForEdit(null);
    setModalIsOpen(false);
    setOpenEditModal(false);
  };

  // ---> Modal control
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleModalOpen = (selectedUser, index, type) => {
    setModalIsOpen(true);
    if (type === "delete") {
      setOpenDeleteModal(true);
      setSelectForDelete(selectedUser);
    } else if (type === "edit") {
      setOpenEditModal(true);
      setSelectForEdit({ key: index, data: selectedUser });
    } else {
      setOpenAddModal(true);
    }
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
    setOpenAddModal(false);
    setOpenDeleteModal(false);
    setSelectForDelete(null);
    setOpenEditModal(false);
    setSelectForEdit(null);
  };

  const ctxValue = {
    users: data.users,
    isDataFetching: isFetching,
    newProfileData: formData,
    newProfileFieldChange: handleChange,
    newProfileAddressChange: handleAddressChange,
    newProfileCompanyChange: handleCompanyChange,
    newProfileSubmit: handleSubmit,
    deleteProfile: handleDelete,
    selectedProfileForEdit: selectForEdit,
    updateProfile: handleUpdateProfile,
    modalOpen: handleModalOpen,
    modalClose: handleModalClose,
    modalIsOpen: modalIsOpen,
    addModal: openAddModal,
    deleteModal: openDeleteModal,
    editModal: openEditModal,
  };

  return (
    <ProfileContext.Provider value={ctxValue}>
      {children}
    </ProfileContext.Provider>
  );
}
