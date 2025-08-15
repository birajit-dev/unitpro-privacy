// src/app/privacy/page.tsx
export default function PrivacyPolicy() {
    return (
      <main style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> August 15, 2025
        </p>
  
        <p>
          This Privacy Policy describes how <strong>myUnitPro</strong> (&quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;) handles your information when you use our mobile
          application. We respect your privacy and are committed to protecting it.
        </p>
  
        <h2>1. Information We Do Not Collect</h2>
        <p>
          myUnitPro is designed to work primarily <strong>offline</strong>. We do
          not collect, store, or share any personal information such as your
          name, email address, location, or contacts.
        </p>
  
        <h2>2. Currency Conversion Data</h2>
        <p>
          If you enable the optional currency update feature, the app will
          connect to a public exchange rate API (<code>exchangerate.host</code>)
          to download the latest rates. This request does not include any
          personally identifiable information.
        </p>
        <p>
          The downloaded rates are stored locally on your device for offline use
          and are never sent to us or any third party.
        </p>
  
        <h2>3. Offline Operation</h2>
        <p>
          All other conversions (length, weight, temperature, etc.) are processed
          entirely on your device without any internet connection.
        </p>
  
        <h2>4. Permissions</h2>
        <p>
          myUnitPro requests the <strong>INTERNET</strong> permission only if you
          enable online currency updates in the app settings. If you keep this
          feature disabled, the app does not access the internet at all.
        </p>
  
        <h2>5. Third-Party Services</h2>
        <p>We do not integrate with analytics, advertising networks, or tracking services.</p>
  
        <h2>6. Data Security</h2>
        <p>
          All data used by the app (including cached currency rates and settings)
          is stored locally on your device. You can clear this data at any time
          through the app’s settings.
        </p>
  
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected in this page with an updated effective date.
        </p>
  
        <h2>8. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:thegodsdevesay@gmail.com">thegodsdevesay@gmail.com</a>
          </p>
      </main>
    );
  }
  

