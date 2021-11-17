const initiState = {
    bal: 10000
}
const reducer = (state = initiState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                bal: state.bal + action.value
            }
        case "WITHDRAW":
            return {
                ...state,
                bal: state.bal - action.value
            }
        default:
            return state;
    }
};

export default reducer;