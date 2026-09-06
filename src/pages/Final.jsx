import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import PageShell from '../components/PageShell'

const WHATSAPP_PHONE_NUMBER = '919670871078'

function buildReplyMessage({ place, message }) {
  const plan = place || 'to be decided together'
  const note = message ? `\n\nMy note: ${message}` : ''

  return `Yes, it is a date.\n\nPlan: ${plan}${note}\n\nPlease act normal when you receive this.`
}

export default function Final() {
  const response = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('dateInviteResponse') || '{}')
    } catch {
      return {}
    }
  }, [])
  const replyMessage = buildReplyMessage(response)
  const encodedReply = encodeURIComponent(replyMessage)
  const whatsappUrl = WHATSAPP_PHONE_NUMBER
    ? `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedReply}`
    : `https://wa.me/?text=${encodedReply}`
  const smsUrl = `sms:?&body=${encodedReply}`

  return (
    <PageShell tone="final">
      <div className="seal">YES</div>
      <div className="eyebrow">Officially confirmed</div>
      <h1>It's a date.</h1>
      <p className="subtitle">One tiny admin task remains: send me the official evidence.</p>
      <div className="summary-note">
        <span>Plan</span>
        <strong>{response.place || 'To be decided together'}</strong>
        {response.message ? <p>{response.message}</p> : null}
      </div>
      <div className="button-row">
        <a className="primary-button link-button" href={whatsappUrl} rel="noreferrer" target="_blank">
          Send on WhatsApp
        </a>
        <a className="secondary-button link-button" href={smsUrl}>
          Send by SMS
        </a>
      </div>
      <p className="tiny-note final-note">
        Nothing is sent automatically. She still gets to choose before the message leaves her phone.
      </p>
      <Link className="secondary-button link-button quiet-link" to="/">Read that again</Link>
    </PageShell>
  )
}
