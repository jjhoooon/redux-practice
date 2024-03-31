let initialState = {
    count: 0,
    id: "",
    password: ""
}

function reducer(state = initialState, action) {
    console.log("action은 뭘까 : ", action)
    // if (action.type === "INCREMENT") {
    //     return { ...state, count: state.count + action.payload.num }
    // }
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num }
        case "DECREMENT":
            return { ...state, count: state.count - action.payload.num }
        case "LOGIN":
            return {
                ...state,
                id: state.id = action.payload.id,
                password: state.password = action.payload.password
            }
        default:
            return { ...state }
    }
    return { ...state }
}

export default reducer;