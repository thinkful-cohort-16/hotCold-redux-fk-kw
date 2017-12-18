export const SHOW_FEEDBACK = 'SHOW_FEEDBACK'; //hotter/colder etc.
export const ADD_GUESS = 'ADD_GUESS'; //tracking last guess
export const RANDOM_ANSWER = 'RANDOM_ANSWER'; //random number generated at game start


export const showFeedback = (feedback) => ({
    type: SHOW_FEEDBACK,
    text: ''
});

export const addGuess = number => ({
    type: ADD_GUESS,
    number: null
});

export const randomAnswer = number => ({
    type: RANDOM_ANSWER,
    number: null
});