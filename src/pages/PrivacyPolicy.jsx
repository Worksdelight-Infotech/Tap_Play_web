import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy for Tap Play</h1>
        <p className="effective-date">
          <strong>Effective Date:</strong> 27 February 2026
        </p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Worksdelight built the mobile game <strong>Tap Play</strong> as a
            free-to-play application. This Privacy Policy explains how we handle
            information when you use our app.
          </p>
          <p>
            By using Tap Play, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            Tap Play does not require users to create an account and does not
            directly collect personal information such as name, email address,
            or phone number.
          </p>
          <p>
            However, the app uses third-party advertising services that may
            collect certain information automatically.
          </p>
        </section>

        <section>
          <h2>3. Advertising</h2>
          <p>
            Tap Play uses <strong>Google AdMob</strong> to display
            advertisements.
          </p>
          <p>AdMob may automatically collect and process certain information, including:</p>
          <ul>
            <li>Device information (model, operating system version)</li>
            <li>Advertising ID</li>
            <li>IP address</li>
            <li>App usage data</li>
            <li>Cookies and similar technologies</li>
          </ul>
          <p>This information is used to:</p>
          <ul>
            <li>Display relevant advertisements</li>
            <li>Improve ad performance</li>
            <li>Prevent fraudulent activity</li>
          </ul>
          <p>
            For more information on how Google handles data, please review
            Google's Privacy Policy:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2>4. Children's Privacy</h2>
          <p>
            Tap Play does not knowingly collect personal data from children.
          </p>
          <p>
            If you believe that a child has provided personal information,
            please contact us and we will take appropriate steps to remove such
            information from our records.
          </p>
        </section>

        <section>
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            <strong>Worksdelight Infotech</strong>
            <br />
            Email:{' '}
            <a href="mailto:support@worksdelight.com">
              support@worksdelight.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
