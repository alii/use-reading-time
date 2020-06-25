import { useState, useEffect } from 'react'

export default function useReadingTime(ref, wpm = 250) {
  const [readingTime, setReadingTime] = useState(1)
  const [wordsCount, setWordsCount] = useState(1)
  const wordsPerMinute = wpm

  useEffect(() => {
    const elem = ref.current
    const words = elem.innerText.match(/\w+/g).length
    const readingTimeCalc = Math.ceil(words / wordsPerMinute)
    setReadingTime(readingTimeCalc)
    setWordsCount(words)
  }, [ref])

  return [readingTime, wordsCount]
}
