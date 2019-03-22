const initState = {
  posts: [
    {id: '4', title: 'First steps with React.js', body: "Hello"},
    {id: '3', title: 'New website design', body: 'Testing!'},
    {id: '2', title: 'Title 2', body: 'Testing testing 1234'},
    {id: '1', title: 'Title 3', body: 'Testing testing 12345'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
