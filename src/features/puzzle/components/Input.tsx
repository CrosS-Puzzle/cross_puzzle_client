import { useState } from 'react'
import { usePuzzleStore } from '../redux/usePuzzleStore'
import { useModal } from '../../modal/redux/useModal'

interface InputProps {
  wordId: string
  length: number
  disabled?: boolean
}

function Input({ wordId, length, ...props }: InputProps) {
  const [value, setValue] = useState('')

  const { openModal } = useModal()
  const { addAnswer } = usePuzzleStore()

  function hanldeOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (e.target.value.trim().length > length) {
      setValue(value.slice(0, length))
      return
    }

    setValue(e.target.value)
  }

  const checkAnswer = async () => {
    if (value.length !== length) return

    const response = await fetch('/api/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: wordId,
        input: value,
      }),
    }).then((res) => res.json())

    if (response.data.success) {
      addAnswer(wordId, value)
    } else {
      openModal({
        component: () => {
          return (
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">틀렸습니다.</h1>
              <p className="mt-2">다시 시도해주세요.</p>
            </div>
          )
        },
      })
    }

    setValue('')
  }

  return (
    <div className='flex flex-row mt-6'>
      <input
        id={`input_${wordId}`}
        type="text"
        value={value}
        maxLength={length}
        onChange={hanldeOnChange}
        placeholder="정답을 입력해주세요."
        className="h-10 bg-transparent text-center text-lg border-b-2 pb-1 border-black disabled:cursor-not-allowed focus:outline-none"
        style={{
          width: `${length * 2}rem`,
          minWidth: '240px',
          letterSpacing: '0.25rem',
        }}
        disabled={props.disabled || !wordId}
      />
      <button
        disabled={props.disabled || length !== value.length}
        onClick={checkAnswer}
        className="ml-2 bg-neutral-700 border border-neutral-700 text-neutral-50 py-1 px-4 rounded-md disabled:bg-transparent disabled:cursor-not-allowed disabled:border disabled:border-neutral-400 disabled:text-neutral-400"
      >
        정답 확인하기
      </button>
    </div>
  )
}

export default Input
