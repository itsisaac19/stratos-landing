# Privacy Policy

**Effective date:** March 22, 2026  
**Last updated:** March 22, 2026

This Privacy Policy describes how **Isaac Tsai** (“**we**,” “**us**,” or “**our**”) collects, uses, discloses, and protects information when you use the Stratos mobile application and related services (collectively, the “**Service**”).

By using the Service, you agree to this Privacy Policy. If you do not agree, please do not use the Service.

---

## 1. Summary

- Stratos is **local-first**: much of your data stays on your device.
- If you **sign in** and use **optional cloud backup**, we sync certain team, roster, and **finished-game** data to our cloud provider so it can be stored under your account.
- **Live game tracking** is designed to work **without** relying on the network; cloud upload typically occurs **after** a game is finished (and may retry when you are back online).
- **Optional features** (such as assisted roster import from text or images) may send the content you submit to our servers for processing.
- We use service providers (for example, **Supabase**) to host authentication, databases, and server-side functions.

For details, read the sections below.

---

## 2. Information we collect

### 2.1 Information you provide

- **Account information** — If you create an account: email address, authentication credentials (managed by our auth provider), and profile-related data the Service requests.
- **Team and roster data** — Team names, player names, jersey numbers, positions, and similar roster fields you enter or import.
- **Game data** — Games you create (for example, opponent, tournament labels, game type), live tracking events (passes, goals, turnovers, line changes, timers, pull metadata, etc.), and derived summaries or insights computed in the app.
- **Import content** — If you use assisted import, **text or images** you choose to submit for parsing.

### 2.2 Information collected automatically

- **Device and app data** — Such as device type, operating system version, app version, and diagnostic logs **if** we enable crash or error reporting (we will describe any such tools in an update to this Policy if we turn them on).
- **Usage data** — We may collect limited usage or performance metrics **if** we implement analytics in the future; this Policy will be updated to describe what is collected and how to opt out where required.

*As of the effective date above, core product analytics in the codebase are computed **on-device** from your game data and are not described here as transmitted to us unless you use cloud sync or optional server features.*

### 2.3 Information from others

If someone on your team enters information about you (for example, your name on a roster), that information is **their responsibility** to handle lawfully; we process it as part of providing the Service to that account.

---

## 3. How we use information

We use information to:

- Provide, maintain, and improve the Service (including sync, backups, and authentication).
- Process optional server-assisted features you request (for example, roster parsing).
- Secure the Service, prevent fraud and abuse, and troubleshoot issues.
- Comply with law and respond to lawful requests.
- Communicate with you about the Service (for example, account or security notices).

We do **not** sell your personal information as that term is defined under the **California Consumer Privacy Act (CCPA/CPRA)**.

---

## 4. How we share information

We share information only as described here:

- **Service providers** — We use vendors that process data on our behalf (for example, cloud hosting, authentication, database, and serverless functions). They are bound by contract to use data only for the services they provide to us.
- **Legal and safety** — We may disclose information if we believe in good faith that disclosure is required by law, legal process, or to protect rights, safety, or security.
- **Business transfers** — If we are involved in a merger, acquisition, or asset sale, information may be transferred as part of that transaction, subject to appropriate safeguards.

**Supabase** (or successor infrastructure) may process account, roster, game, and event data you sync, and may process content you submit to **Edge Functions** (such as roster parsing), according to their documentation and our configuration.

---

## 5. Local storage and optional cloud sync

- **On your device** — The Service stores game and roster data locally (for example, in an on-device database) for performance and offline use.
- **Cloud sync** — When you are signed in, the Service may upload **team**, **player**, **game**, and **game event** records associated with your account, typically **after** games are completed, and may **retry** uploads when connectivity returns.

If you do not sign in, cloud sync for that data generally does not occur; your data remains on the device subject to your device backup settings.

---

## 6. Assisted roster import (optional)

If you use a feature that parses rosters from **text or images**, that content is sent to our **server-side function** for processing. Please **do not** submit sensitive personal data beyond what is needed for a roster (for example, avoid government IDs, health information, or financial data in images or pasted text).

Outputs are returned to your app for you to review before saving.

---

## 7. Sharing summaries and exports

The Service may let you **copy or share** summaries (for example, post-game text). When you share to another app (messages, email, social platforms), that sharing is controlled by **you** and the **third-party app’s** privacy practices.

---

## 8. Data retention

- **Cloud** — We retain synced data associated with your account for as long as your account is active and as needed to provide the Service, unless a longer period is required by law.
- **Device** — Data remains on your device until you delete it or uninstall the app, subject to your device backups.
- **Deletion** — You may request deletion of cloud-held data or your account by contacting us (see **Contact**). Some residual copies may persist for a limited time in backups or logs.

---

## 9. Security

We use reasonable technical and organizational measures designed to protect information. No method of transmission or storage is 100% secure.

You should protect your device, use a strong password, and sign out on shared devices where appropriate.

---

## 10. International transfers

If you are outside the country where our service providers operate, your information may be **transferred to** and **processed in** other countries (including the United States), where privacy laws may differ. We use appropriate safeguards where required (such as standard contractual clauses).

---

## 11. Your rights and choices

Depending on where you live, you may have rights to:

- Access, correct, or delete certain personal information.
- Object to or restrict certain processing.
- Port data to another service where technically feasible.
- Withdraw consent where processing is based on consent.
- Lodge a complaint with a supervisory authority (for example, in the **EEA** or **UK**).

**California residents** may have additional rights under the CCPA/CPRA (including to know, delete, and correct, and to opt out of “sale” or certain “sharing” — we do not sell personal information as defined above).

To exercise rights, contact us at **[your-privacy-email@example.com]**. We may need to verify your request.

You can also control some data by editing or deleting it in the app, signing out, or deleting your account where the Service provides that option.

---

## 12. Children

The Service is not directed to children under **13**, and we do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us and we will take appropriate steps to delete it.

---

## 13. Third-party links and services

The Service may reference or link to third-party sites or services. This Policy does not apply to them. Review their privacy policies before use.

App stores (Apple, Google) may collect information according to their own policies when you download or pay for the app.

---

## 14. Changes to this Policy

We may update this Privacy Policy from time to time. We will post the new version and update the “Last updated” date. If changes are material, we will provide additional notice as appropriate (for example, in-app notice or email).

---

## 15. Contact

**Isaac Tsai**  
Privacy inquiries: **[your-privacy-email@example.com]**  
San Luis Obispo, CA, United States  

Data controller / representative (if required in the EU/UK): **[Add if applicable]**

---

## 16. Important notice

This Privacy Policy is a **practical template** aligned with Stratos’s described architecture (local-first storage, optional Supabase auth and sync, optional server-side roster parsing). It is **not legal advice**. Have qualified counsel review it for your jurisdictions, subprocessors, analytics, and app store requirements.
