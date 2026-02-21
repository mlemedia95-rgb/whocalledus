export default function DMCA() {
  return (
    <main style={{ maxWidth: '800px', margin: '32px auto', padding: '0 16px' }}>
      <div style={{ background: 'white', borderRadius: '10px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>DMCA & Content Removal</h1>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>Last updated: January 1, 2025</p>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Content Removal Requests</h2>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '12px' }}>
            If you believe that content posted on WhoCalledUs.net infringes your rights or contains inaccurate information about you, you may request its removal.
          </p>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            To submit a removal request, please provide the following information:
          </p>
          <ul style={{ color: '#374151', lineHeight: '1.7', paddingLeft: '20px', marginTop: '8px', marginBottom: '12px' }}>
            <li>The specific URL of the content you want removed</li>
            <li>Your name and contact information</li>
            <li>A description of why the content should be removed</li>
            <li>A statement that you have a good faith belief the information is inaccurate or infringes your rights</li>
          </ul>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>DMCA Copyright Notices</h2>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            For DMCA copyright takedown notices, please include all required elements as specified in 17 U.S.C. § 512(c)(3). We will respond to valid DMCA notices within 14 business days.
          </p>
        </section>

        <section style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Contact</h2>
          <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '20px' }}>
            <p style={{ color: '#374151', lineHeight: '1.7' }}>
              To submit a removal request or DMCA notice, please email us at:<br />
              <strong>contact@whocalledus.net</strong>
            </p>
            <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '8px' }}>
              We aim to respond to all requests within 30 days.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
