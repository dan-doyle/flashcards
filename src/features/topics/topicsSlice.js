import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { name, id, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },
        addQuizIdForTopic: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
// Always export as default the slice's reducer
export default topicsSlice.reducer;