import appDispatcher from './dispatcher';

const actions = {
    addItem: item => {
        appDispatcher.dispatch({
            type: "ADD_ITEM",
            item
        })
    }
};

export default actions;