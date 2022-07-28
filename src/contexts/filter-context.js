import { useReducer, createContext, useContext } from "react";
import { useSelector } from 'react-redux';

const filterContext = createContext(null);

const FilterProvider = ({ children }) => {

    const { posts } = useSelector((store) => store.post);

    const initialState = {
        filteredTags: []
    };

    const filterReducer = (state, action) => {
        switch (action.type) {
            case "FILTER_TAGS":
                return {
                    ...state,
                    filteredTags: state.filteredTags.includes(action.payload) ?
                        state.filteredTags.filter((tag) => tag !== action.payload) :
                        [...state.filteredTags, action.payload]
                }
            case "CLEAR_ALL_FILTERS":
                return {
                    ...state,
                    filteredTags: []
                }
            default:
                return state
        }
    }

    const [stateOfFilter, dispatchOfFilter] = useReducer(filterReducer, initialState);

    const postsArrFiltersReducer = (acc, post) => {
        return post.tags.reduce((prev, tag) => {
            return prev.includes(tag) ? prev : [...prev, tag]
        }, acc)
    }

    const allFiltersArr = posts.reduce(postsArrFiltersReducer, []);

    return <filterContext.Provider
        value={{
            stateOfFilter,
            dispatchOfFilter,
            allFiltersArr
        }}>
        {children}
    </filterContext.Provider>
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };