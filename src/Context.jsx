import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = "http://bluedev/index.php";

const AppProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [diploma, setDiploma] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [yoex, setYoex] = useState("");
  const [about, setAbout] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        url,
        { id, fullName, phone, email, diploma, specialty, yoex, about },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(fullName);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        handelSubmit,
        setEmail,
        setFullName,
        setPhone,
        setId,
        setDiploma,
        setYoex,
        setAbout,
        setSpecialty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };

export const useGlobalContext = () => useContext(AppContext);
