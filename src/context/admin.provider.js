import React, { useContext, useEffect, useState, createContext } from 'react';


export const AdminContext = createContext({
    category: [],
    id: [],
    name: ''

})


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

