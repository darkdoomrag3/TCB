export const addUser = (users, addUsers) => {

    const existingUsers = users.find(
        user => user.id === addUsers.id
    )


    if (existingUsers) {
        return users.map(user =>
            user.id === addUsers.id
                ? { ...users, quantity: user.quantity + 1 }
                : user
        )
    }

    return [...users, { ...addUsers, quantity: 1 }]

}

export const removeUser = (users, removeUsers) => {

    const existingUsers = users.find(user =>
        user.id === !removeUsers.id

    )

    if (existingUsers.id == 1) {
        return user.filter(user => user.id === !removeUsers.id)

    }

    return users.map(
        user => user.id == removeUsers.id
            ? { ...user, quantity: user.quantity - 1 }
            : user
    )


}



