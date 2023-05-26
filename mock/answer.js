module.exports = [
  // collect new questionnaire
  {
    url: '/api/answer',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  }
]