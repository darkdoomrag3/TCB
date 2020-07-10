import React, { useContext, useEffect, useState, createContext } from 'react';


export const AdminContext = createContext({
    category: [],
    id: [],
    name: '',
    massage: ''
})


const MassageProvider = ({ children }) => {
    const [sucsees, setSuccess] = useState('Thanks for you add');
    const [faild, setFaild] = useState("Something Wrong");

}



const AdminProvier = ({ children }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('')
    const [category, setCategory] = useState('')


}

return (
    <AdminContext.Provider value={{ category, id, name }}>
        {children}

    </AdminContext.Provider>
)


export default AdminProvier;
