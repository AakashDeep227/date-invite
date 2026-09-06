import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PrimaryButton from '../components/PrimaryButton'

const dateIdeas = ['Coffee', 'Dinner', 'A walk', 'Dessert', 'Bookstore', 'Surprise me']

export default function Preferences() {
  const navigate = useNavigate()
  const [place, setPlace] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const saved = JSON.parse(localStorage.getItem('dateInviteResponse') || '{}')
    localStorage.setItem('dateInviteResponse', JSON.stringify({ ...saved, place }))
    navigate('/message')
  }

  return (
    <PageShell step={3}>
      <div className="eyebrow">Okay, this is going well</div>
      <h1>Where should we go?</h1>
      <p className="subtitle">Pick a vibe, write your own, or leave it mysterious like a menu with secrets.</p>
      <form className="form" onSubmit={submit}>
        <div className="choice-grid" aria-label="Date ideas">
          {dateIdeas.map((idea) => (
            <button
              className={place === idea ? 'choice-chip choice-chip-selected' : 'choice-chip'}
              key={idea}
              onClick={() => setPlace(idea)}
              type="button"
            >
              {idea}
            </button>
          ))}
        </div>
        <label>
          Your ideal plan
          <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Cafe, dinner, drive, mildly dramatic sunset..." />
        </label>
        <PrimaryButton type="submit">Next</PrimaryButton>
      </form>
    </PageShell>
  )
}
