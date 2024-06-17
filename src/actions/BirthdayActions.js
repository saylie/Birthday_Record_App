export const addBirthday = (birthday) => ({
    type: 'ADD_BIRTHDAY',
    payload: birthday
})

export const deleteBirthday = (id) => ({
    type: 'DELETE_BIRTHDAY',
    payload: id
})

export const sortBirthday = (sortBy, sortOrder) => ({
    type: 'DELETE_BIRTHDAY',
    payload: {
        sortBy,
        sortOrder
    }
})