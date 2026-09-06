import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PrimaryButton from '../components/PrimaryButton'

export default function Message() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const saved = JSON.parse(localStorage.getItem('dateInviteResponse') || '{}')
    localStorage.setItem('dateInviteResponse', JSON.stringify({ ...saved, message }))
    navigate('/final')
  }

  return (
    <PageShell step={4}>
      <div className="eyebrow">Last little detail</div>
      <h1>Want to leave me a note?</h1>
      <p className="subtitle">Optional, but dangerously cute if you do. I have prepared emotionally.</p>
      <form className="form" onSubmit={submit}>
        <label>
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="5"
            placeholder="Anything you want me to know..."
          />
        </label>
        <div className="button-row">
          <PrimaryButton type="submit">Confirm the date</PrimaryButton>
          <Link className="secondary-button link-button" to="/final">Skip note</Link>
        </div>
      </form>
    </PageShell>
  )
}
