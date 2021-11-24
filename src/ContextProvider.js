import React, {useState} from "react";

export const MyContext = React.createContext();

export const MyContextProvider = props => {
    const {children} = props;
    const [data, setData] = useState([]);
    return (
        <MyContext.Provider value={{
            data,
            setData,
        }}>
            {children}
        </MyContext.Provider>
    );
}