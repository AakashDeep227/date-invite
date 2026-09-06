export default function PageShell({ children, step, tone = 'warm' }) {
  return (
    <main className={`page-shell page-shell-${tone}`}>
      <div className="paper-texture" />
      <section className="invite-panel">
        {step ? (
          <div className="step-indicator" aria-label={`Step ${step} of 4`}>
            {[1, 2, 3, 4].map((item) => (
              <span
                className={item <= step ? 'step-dot step-dot-active' : 'step-dot'}
                key={item}
              />
            ))}
          </div>
        ) : null}
        {children}
      </section>
    </main>
  )
}
