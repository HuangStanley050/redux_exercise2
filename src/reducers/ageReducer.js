//Math.floor((Math.random() * 10) + 1);  1 to 10 random numbers



const initialState = {
    age: 32,
    result: []
};

// results: state.results.concat({ id: new Date(), value: action.result })
// const updatedArray = state.results.filter(result => result.id !== action.id);

const reducer = (state = initialState, action) => {
    if (action.type === "RANDOM") {
        const newAge = Math.floor((Math.random() * 99) + 1);
        //console.log(newAge);

        return {
            ...state,
            age: newAge,
            result: state.result.concat({ age: newAge, id: new Date() })
        };
    }
    if (action.type === "DELETE") {
        const newResult = state.result.filter(result => result.id !== action.id);
        //const test = [1, 1];
        return {
            ...state,
            result: newResult,

        };
    }
    return state;
};

export default reducer;
