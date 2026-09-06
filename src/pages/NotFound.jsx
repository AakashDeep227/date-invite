import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <h1>Oops.</h1>
      <p className="subtitle">This page got lost somewhere between the plans.</p>
      <Link className="primary-button link-button" to="/">Go home</Link>
    </PageShell>
  )
}
