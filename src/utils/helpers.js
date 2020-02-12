const helpers = {
  formatQuestion: (question, users) => {
    const { id, author, optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = users[author];
  
    return {
      id,
      name,
      timestamp,
      avatar: avatarURL,
      optionOneText: optionOne.text,
      optionTwoText: optionTwo.text,
    }
  },

  questionAnswered: (question, user) => {
    return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)
  },

  questionNotAnswered: (question, user) => {
    return !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user)
  }
}

export default helpers;
