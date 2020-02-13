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
      optionOneVotes: optionOne.votes,
      optionTwoText: optionTwo.text,
      optionTwoVotes: optionTwo.votes,
    }
  },

  questionAnswered: (question, user) => {
    return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)
  },

  questionNotAnswered: (question, user) => {
    return !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user)
  },

  calcPercentage: (count, total) => {
    const countInt = parseInt(count);
    const totalInt = parseInt(total);

    return Math.round((countInt / totalInt) * 100);
  },
}

export default helpers;
