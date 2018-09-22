const state = {
  notes: [],
  timestamps: []
};

const mutations = {
  ADD_NOTES( state, payload ) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP( state, payload ) {
    let newTimeStamp = payload;
    state.notes.push(newTimeStamp);
  },
};

const actions = {
  addNote( context, payload ) {
    context.commit( 'ADD_NOTE', payload );
  },
  addTimeStamp( context, payload ){
    context.commit( 'ADD_TIMETSAMP', payload );
  },
}

const getters = {
  getNotes: state => state.notes,
  getTimeStamps: state => state.timestamps,
  getNoteCount: state => state.notes.length,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});




new Vue({
  el: '#app',
  store,
  components: {
    'input-component': inputComponent
  }
})
