const stateDefault = {
  commentInfo: {
    name: 'adf',
    content: 'haha',
  },
  arrComment: [
    { name: 'nguyễn văn a', content: 'like like like' },
    { name: 'nguyễn văn b', content: 'like like like' },
    { name: 'nguyễn văn c', content: 'hehe hehe' },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE': {
      //b1: lấy dữ liệu từ action gửi lên
      const { id, value } = action.payload;
      // b2: đối với state là obj or arr => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      //b3: thay đổi state
      commentInfoUpdate[id] = value;
      //b4: gán state cũ = state mới
      state.commentInfo = commentInfoUpdate;
      return { ...state }; // immutable (tính bất biến)
    }
    default:
      return state;
  }
};
