import { HIT_SERVER, CATCH_ERROR_RESPONSE, CATCH_POSITIVE_RESPONSE } from "../types/ProductsTypes";
const initialState = {
    loading: false,
    products: [],
    err: " ",
}
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIT_SERVER:
        case CATCH_POSITIVE_RESPONSE:
        case CATCH_ERROR_RESPONSE:
            return {
                ...state,
                loading: action.loading,
                err : action.err,
                products: action.value
            }
        default:
            return state;
    }
};
export default ProductReducer;