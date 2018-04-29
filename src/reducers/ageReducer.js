//Math.floor((Math.random() * 10) + 1);  1 to 10 random numbers



const initialState = {
    age: 32
};

const reducer = (state = initialState, action) => {
    if (action.type === "RANDOM") {
        const newAge = Math.floor((Math.random() * 99) + 1);
        console.log(newAge);
        return {
            ...state,
            age: newAge
        }
    }
    return state;
}

export default reducer;
