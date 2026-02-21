export default function Privacy() {
  return (
    <main style={{ maxWidth: '800px', margin: '32px auto', padding: '0 16px' }}>
      <div style={{ background: 'white', borderRadius: '10px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>Last updated: January 1, 2025</p>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>1. Information We Collect</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            WhoCalledUs.net collects information you voluntarily provide when submitting reports, including your name (optional) and comments about phone numbers. We also collect standard web analytics data such as pages visited, browser type, and IP address for site operation purposes.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>2. How We Use Information</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            We use collected information to operate and improve the website, display user-submitted reports, and serve relevant advertisements through Google AdSense. We do not sell your personal information to third parties.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>3. Google AdSense & Cookies</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website and other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>4. FCRA Disclaimer</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            WhoCalledUs.net is NOT a Consumer Reporting Agency as defined by the Fair Credit Reporting Act (FCRA). The information on this site must not be used for any FCRA-regulated purpose, including but not limited to: evaluating a person for employment, credit, insurance, housing, or any other purpose regulated by the FCRA.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>5. Data Removal</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            If you believe information about you has been posted without your consent, please contact us via our DMCA page to request removal. We will respond within 30 days.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>6. Contact</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            For privacy-related questions, please visit our <a href="/dmca" style={{ color: '#1d4ed8' }}>DMCA & Contact</a> page.
          </p>
        </section>
      </div>
    </main>
  )
}
