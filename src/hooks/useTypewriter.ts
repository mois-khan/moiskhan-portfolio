// src/hooks/useTypewriter.ts
// Cycles through an array of strings with a typing/deleting effect

import { useEffect, useState, useRef } from 'react'

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const currentWord = words[wordIndex]

    const tick = () => {
      if (!isDeleting) {
        // Typing
        const next = currentWord.slice(0, text.length + 1)
        setText(next)
        if (next === currentWord) {
          // Pause at end of word
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration)
          return
        }
      } else {
        // Deleting
        const next = currentWord.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
          return
        }
      }

      timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    }

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}
