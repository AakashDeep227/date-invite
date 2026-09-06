import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PageShell from '../components/PageShell'
import PrimaryButton from '../components/PrimaryButton'

const maybeMoments = [
  {
    eyebrow: 'Question #1',
    title: 'Would you go on a date with me?',
    subtitle: 'No pressure at all. This is an invitation, not a trap door.',
    button: 'Maybe another time',
    note: 'You can take your time. This website is very patient.'
  },
  {
    eyebrow: 'Tiny follow-up',
    title: 'Just confirming: maybe maybe?',
    subtitle: 'The button has requested legal representation, but I am asking anyway.',
    button: 'Still maybe',
    note: 'A bold choice. The suspense is now wearing a tiny suit.'
  },
  {
    eyebrow: 'Extremely official',
    title: 'Final-ish maybe inspection.',
    subtitle: 'Please review your answer carefully. The committee is just me and my overthinking.',
    button: 'I remain mysterious',
    note: 'Mysterious. Elegant. Mildly inconvenient.'
  },
  {
    eyebrow: 'The button is nervous',
    title: 'Are you sure sure?',
    subtitle: 'This is the part where the "maybe" button starts stretching before it runs away.',
    button: 'Catch me if you can',
    note: 'It has tiny sneakers on. Emotionally, not visually.'
  }
]

export default function Question() {
  const navigate = useNavigate()
  const [maybeStep, setMaybeStep] = useState(0)
  const [escaped, setEscaped] = useState(false)
  const moment = maybeMoments[Math.min(maybeStep, maybeMoments.length - 1)]

  const handleMaybe = () => {
    if (maybeStep >= maybeMoments.length - 1) {
      setEscaped(true)
      return
    }

    setMaybeStep((step) => step + 1)
  }

  return (
    <PageShell step={2}>
      <div className="eyebrow">{escaped ? 'Respectfully escaped' : moment.eyebrow}</div>
      <h1>{escaped ? 'Okay, I will stop asking.' : moment.title}</h1>
      <p className="subtitle">
        {escaped
          ? 'Thank you for being honest. The website has folded itself neatly and is walking away with dignity.'
          : moment.subtitle}
      </p>
      <div className={maybeStep >= 3 && !escaped ? 'button-row question-actions runaway-zone' : 'button-row question-actions'}>
        <PrimaryButton onClick={() => navigate('/preferences')}>Yes, I'd like that</PrimaryButton>
        {!escaped ? (
          <button
            className={maybeStep >= 3 ? 'secondary-button runaway-button' : 'secondary-button'}
            onClick={handleMaybe}
          >
            {moment.button}
          </button>
        ) : null}
      </div>
      {escaped ? (
        <div className="soft-response" role="status">
          <strong>Totally okay.</strong>
          <span>You still get full credit for visiting the tiny website. Snacks may be negotiated in a future version.</span>
        </div>
      ) : (
        <p className="tiny-note">{moment.note}</p>
      )}
    </PageShell>
  )
}
