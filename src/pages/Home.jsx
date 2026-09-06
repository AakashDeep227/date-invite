import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

export default function Home() {
  const dateImage = `${import.meta.env.BASE_URL}date-table.png`

  return (
    <PageShell step={1}>
      <div className="hero-photo-wrap">
        <img className="hero-photo" src={dateImage} alt="" />
      </div>
      <div className="eyebrow">A tiny website for one important person</div>
      <h1>Hey, I have a little question for you.</h1>
      <p className="subtitle">
        Nothing complicated. Just a few thoughtful clicks, a little honesty, and one website trying very hard to act casual.
      </p>
      <Link className="primary-button link-button" to="/question">Okay, ask me</Link>
    </PageShell>
  )
}
