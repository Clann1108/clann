export default function PageHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--primary) 100%)', padding: '7rem 0 4rem' }}>
      <div className="container mx-auto px-4 text-center">
        <span className="section-label" style={{ color: 'rgba(255,117,31,0.9)' }}>{label}</span>
        <h1 className="text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{title}</h1>
        {description && (
          <p className="text-white/50 mx-auto" style={{ maxWidth: 600, fontSize: '1.05rem' }}>{description}</p>
        )}
      </div>
    </section>
  );
}
