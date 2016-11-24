import appDispatcher from './dispatcher';
import EventEmitter from 'events';

var _items = [];

class Store extends EventEmitter{
    constructor(){
        super();
    }

    getItems(){
        return _items;
    }

    addChangeListener (callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    emitChange() {
        this.emit('change');
    }
}

const store = new Store();

appDispatcher.register(payload => {
    const type = payload.type;

    switch (type){
        case "ADD_ITEM":
            _items.push(payload.item);
            break;
        default:
            return true;
    }

    store.emitChange();

    return true;

});

export default store;