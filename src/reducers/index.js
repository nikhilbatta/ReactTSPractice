const initialState = {
    score: 2
}
function rootReducer(state = initialState, action) {
    console.log("it got here")
    console.log(state)
    console.log(action.type)
    if(action.type === "ADD_SCORE") { 
        console.log("okayy")
        state.score++
    return state;
    }
  return state;
};

export default rootReducer;