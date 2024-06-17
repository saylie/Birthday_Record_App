const initalState = {
    birthdays: [],
    sortBy: '',
    sortOrder: ''
}

const BirthdayReducer = (state = initalState, action) => {
    switch(action.type){
        case 'ADD_BIRTHDAY':
            return{
                ...state,
                birthdays:[ ...state.birthdays, action.payload]
            }
        case 'DELETE_BIRTHDAY': 
            return{
                ...state,
                birthdays: state.birthdays.filter((birthday) => birthday.id !== action.payload)
            }
        case 'SORT_BIRTHDAY':
            return{
                ...state,
                sortBy: state.birthdays.sortBy,
                sortOrder: action.payload.sortOrder
            }
        default:
            return state
    }
}

export default BirthdayReducer

