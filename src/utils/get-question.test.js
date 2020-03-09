import { getQuestion } from './get-question'

describe(`Tests whether getQuestion returns the element from the array supplied
  as the first parameter whose question number matches the second parameter`, () => {

    const arr = [
      {a: 1, url: "question/4"},
      {a: 12, url: "question/24"},
      {a: 13, url: "question/45"},
      {a: 14, url: "question/7"},
    ]

    it('returns {a: 1, url: "question/4"}', () => {
        expect(JSON.stringify(getQuestion(arr, 4))).toEqual(JSON.stringify({a: 1, url: "question/4"}))
    })

  })
