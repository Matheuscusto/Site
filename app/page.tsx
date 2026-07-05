import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header style={{ background: '#1a2540', padding: '20px 40px', borderBottom: '2px solid #00d4ff' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '0' }}>CLCA</h1>
        <p style={{ fontSize: '14px', color: '#00d4ff', marginBottom: '0' }}>Automações com IA</p>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '60px 40px', textAlign: 'center', flex: 1 }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Bem-vindo ao CLCA</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', color: '#b0b0b0' }}>
          Soluções inovadoras de automação com inteligência artificial
        </p>
        <p style={{ marginBottom: '40px', color: '#b0b0b0' }}>
          Site inicial em Next.js
        </p>

        {/* CTA Button */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://wa.me/5500000000000" 
            style={{
              background: '#25D366',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '5px',
              fontWeight: 'bold',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1ea852'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
          >
            📱 Fale no WhatsApp
          </a>
          <Link 
            href="/sobre"
            style={{
              background: '#00d4ff',
              color: '#0b1020',
              padding: '12px 30px',
              borderRadius: '5px',
              fontWeight: 'bold',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#00a8cc'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#00d4ff'}
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 40px', background: '#1a2540' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px' }}>O que oferecemos</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ background: '#0b1020', padding: '30px', borderRadius: '8px', border: '1px solid #00d4ff' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '15px' }}>🤖 Automação Inteligente</h3>
            <p style={{ color: '#b0b0b0' }}>Processos automatizados com IA para aumentar produtividade</p>
          </div>
          <div style={{ background: '#0b1020', padding: '30px', borderRadius: '8px', border: '1px solid #00d4ff' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '15px' }}>⚡ Tecnologia de Ponta</h3>
            <p style={{ color: '#b0b0b0' }}>Utilizamos as mais recentes tecnologias em IA e automação</p>
          </div>
          <div style={{ background: '#0b1020', padding: '30px', borderRadius: '8px', border: '1px solid #00d4ff' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '15px' }}>💼 Soluções Personalizadas</h3>
            <p style={{ color: '#b0b0b0' }}>Desenvolvemos soluções adaptadas às suas necessidades</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #1a2540', marginTop: 'auto' }}>
        <p style={{ color: '#666', marginBottom: '10px' }}>© 2024 CLCA - Automações com IA. Todos os direitos reservados.</p>
        <p style={{ color: '#666', fontSize: '14px' }}>
          <a href="https://wa.me/5500000000000" style={{ color: '#00d4ff' }}>Entre em contato</a>
        </p>
      </footer>
    </main>
  )
}
