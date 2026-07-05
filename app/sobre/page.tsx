import Link from 'next/link'

export default function About() {
  return (
    <main>
      {/* Header */}
      <header style={{ background: '#1a2540', padding: '20px 40px', borderBottom: '2px solid #00d4ff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link href="/" style={{ color: '#00d4ff', fontSize: '20px', fontWeight: 'bold' }}>← Voltar</Link>
          <h1 style={{ fontSize: '28px', marginBottom: '0' }}>Sobre o CLCA</h1>
        </div>
      </header>

      {/* Content */}
      <section style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto', flex: 1 }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#00d4ff' }}>Quem Somos</h2>
        
        <p style={{ marginBottom: '20px', color: '#b0b0b0', lineHeight: '1.8' }}>
          A CLCA é uma empresa especializada em soluções de automação com inteligência artificial. 
          Nos dedicamos a transformar processos manuais em fluxos automatizados e inteligentes.
        </p>

        <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#00d4ff' }}>Nossa Missão</h3>
        <p style={{ marginBottom: '30px', color: '#b0b0b0', lineHeight: '1.8' }}>
          Simplificar e automatizar os processos empresariais através de tecnologias de IA, 
          ajudando empresas a crescer com mais eficiência e produtividade.
        </p>

        <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#00d4ff' }}>Serviços</h3>
        <ul style={{ marginBottom: '30px', color: '#b0b0b0', lineHeight: '1.8' }}>
          <li>🤖 Chatbots e Assistentes com IA</li>
          <li>⚙️ Automação de Processos RPA</li>
          <li>📊 Análise de Dados com Machine Learning</li>
          <li>🔗 Integração de Sistemas</li>
          <li>🛠️ Consultoria em Transformação Digital</li>
        </ul>

        <div style={{ background: '#1a2540', padding: '30px', borderRadius: '8px', border: '1px solid #00d4ff', marginTop: '40px' }}>
          <h3 style={{ marginBottom: '15px', color: '#00d4ff' }}>Interessado em Nossos Serviços?</h3>
          <p style={{ marginBottom: '20px', color: '#b0b0b0' }}>
            Entre em contato conosco e vamos conversar sobre como podemos ajudar sua empresa.
          </p>
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
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #1a2540', marginTop: 'auto' }}>
        <p style={{ color: '#666', marginBottom: '10px' }}>© 2024 CLCA - Automações com IA. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
