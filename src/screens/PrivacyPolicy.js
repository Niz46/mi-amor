// src/screens/PrivacyPolicy.js
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.sectionTitle}>Effective date</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy is effective as of August 16, 2025.
        </Text>

        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          Mi Amor ("we", "us", or "our") provides a social and monetization
          platform that enables users to connect, participate in activities, and
          receive payments. This Privacy Policy explains what information we
          collect, how we use and share it, and the choices you have regarding
          your information. By using our mobile application and services (the
          "Services"), you agree to the collection and use of information in
          accordance with this policy.
        </Text>

        <Text style={styles.sectionTitle}>Scope</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy applies to all information collected through our
          mobile applications, websites, and other online or offline services
          that link to this policy.
        </Text>

        <Text style={styles.sectionTitle}>Information we collect</Text>

        <Text style={styles.subSectionTitle}>Information you provide</Text>
        <Text style={styles.paragraph}>
          When you register for an account or contact us, we may collect
          personal data that you provide voluntarily, including: full name,
          username, email address (Gmail recommended), phone number, password
          (securely stored/hashed), profile details, and any other information
          you include when communicating with us or filling forms (for example,
          matchmaking/coupon codes).
        </Text>

        <Text style={styles.subSectionTitle}>Payment information</Text>
        <Text style={styles.paragraph}>
          If you make purchases or payments through the Services, we may collect
          payment-related information (such as bank account, transaction
          reference, or other payment identifiers). We do not store full card
          data; payment processing is handled by third-party payment processors
          in accordance with their terms and applicable law.
        </Text>

        <Text style={styles.subSectionTitle}>Automatically collected data</Text>
        <Text style={styles.paragraph}>
          We automatically collect certain information about your device and use
          of the Services, including IP address, device model, operating system,
          unique device identifiers, log information, usage statistics,
          performance data, and crash reports. We also collect analytics data to
          understand how users interact with our Services.
        </Text>

        <Text style={styles.subSectionTitle}>Content and media</Text>
        <Text style={styles.paragraph}>
          Content you create or upload (such as profile photos, messages,
          videos) is collected and processed in order to provide the Services.
          Please avoid uploading sensitive personal information.
        </Text>

        <Text style={styles.subSectionTitle}>
          Cookies and similar technologies
        </Text>
        <Text style={styles.paragraph}>
          We and our service providers use cookies and similar technologies to
          enable certain features, remember preferences, and collect analytics.
          You can control cookies through your device settings and, where
          applicable, through choices provided in the app.
        </Text>

        <Text style={styles.sectionTitle}>How we use information</Text>
        <Text style={styles.paragraph}>
          We use personal information for the following purposes:
        </Text>
        <Text style={styles.listItem}>
          • To create, maintain and secure your account.
        </Text>
        <Text style={styles.listItem}>
          • To process payments and transactions, and to prevent fraud.
        </Text>
        <Text style={styles.listItem}>
          • To provide, personalize and improve our Services, features, and
          content.
        </Text>
        <Text style={styles.listItem}>
          • To communicate with you (e.g., confirmations, updates, support).
        </Text>
        <Text style={styles.listItem}>
          • For research and analytics to understand usage and trends.
        </Text>
        <Text style={styles.listItem}>
          • To comply with legal obligations and enforce our terms of service.
        </Text>

        <Text style={styles.sectionTitle}>Sharing and disclosure</Text>
        <Text style={styles.paragraph}>
          We do not sell your personal information. We may share personal data
          in the following limited circumstances:
        </Text>
        <Text style={styles.listItem}>
          • Service providers: Third parties who perform services on our behalf
          (e.g., hosting, analytics, payment processors).
        </Text>
        <Text style={styles.listItem}>
          • Legal reasons: When required by law, court order, or to respond to
          legal process or government requests.
        </Text>
        <Text style={styles.listItem}>
          • Protection of rights: To protect the rights, property, or safety of
          Mi Amor, our users, or others.
        </Text>
        <Text style={styles.listItem}>
          • Business transfers: In connection with a merger, acquisition, or
          sale of assets, subject to appropriate protections for personal data.
        </Text>
        <Text style={styles.paragraph}>
          We may share aggregated or anonymized information that does not
          reasonably identify you.
        </Text>

        <Text style={styles.sectionTitle}>Third-party services</Text>
        <Text style={styles.paragraph}>
          The Services rely on third-party providers for functionality such as
          analytics, crash reporting, messaging, and payments. These providers
          may collect or receive data as necessary to perform their services.
          Their use of data is governed by their privacy policies. We encourage
          you to review the privacy policies of any third-party services used in
          connection with the app.
        </Text>

        <Text style={styles.sectionTitle}>International transfers</Text>
        <Text style={styles.paragraph}>
          Your information may be processed or stored in jurisdictions outside
          your country of residence. When we transfer personal data across
          borders, we apply appropriate safeguards required by applicable law.
        </Text>

        <Text style={styles.sectionTitle}>Data retention</Text>
        <Text style={styles.paragraph}>
          We retain personal information for as long as necessary to provide the
          Services, comply with legal obligations, resolve disputes, and enforce
          our agreements. If you delete your account, we will remove or
          anonymize personal data in accordance with applicable retention
          policies and legal requirements.
        </Text>

        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.paragraph}>
          We implement reasonable technical and organizational measures designed
          to protect personal information against unauthorized access,
          disclosure, alteration, and destruction. However, no method of
          transmission or storage is completely secure. Please protect your
          account credentials and notify us immediately if you suspect
          unauthorized access.
        </Text>

        <Text style={styles.sectionTitle}>Children's privacy</Text>
        <Text style={styles.paragraph}>
          Our Services are not directed to children under the age of 13 (or the
          minimum age required in your jurisdiction). We do not knowingly
          collect personal information from children. If we learn we have
          collected information from a child in violation of this policy, we
          will take steps to delete the information.
        </Text>

        <Text style={styles.sectionTitle}>Your rights and choices</Text>
        <Text style={styles.paragraph}>
          Depending on your jurisdiction, you may have the right to access,
          correct, update, or delete personal information we hold about you. You
          may also have rights to restrict or object to certain processing and
          to receive a copy of your data in a portable format. To exercise these
          rights, or to opt out of marketing communications, contact us using
          the details below. We may require verification before fulfilling
          certain requests to protect your privacy and security.
        </Text>

        <Text style={styles.sectionTitle}>Opting out of marketing</Text>
        <Text style={styles.paragraph}>
          You may opt out of promotional messages by following the unsubscribe
          link in those messages or by contacting us. Transactional or service
          messages (such as payment confirmations) may still be sent even if you
          opt out of marketing.
        </Text>

        <Text style={styles.sectionTitle}>How to contact us</Text>
        <Text style={styles.paragraph}>
          For questions, requests, or concerns about this Privacy Policy or our
          data practices, please contact:
        </Text>
        <Text style={styles.listItem}>• Email: support@miamorplatform.com</Text>
        <Text style={styles.listItem}>• Email: info@miamorplatform.com</Text>

        <Text style={styles.sectionTitle}>Complaints</Text>
        <Text style={styles.paragraph}>
          If you are not satisfied with our response to a privacy request, you
          may have the right to lodge a complaint with your local data
          protection authority.
        </Text>

        <Text style={styles.sectionTitle}>Changes to this policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will notify you by posting a prominent notice
          within the app or by other means. The "Effective date" at the top of
          this policy will indicate when the policy was last revised.
        </Text>

        <Text style={styles.sectionTitle}>Disclaimer</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy is provided for informational purposes only and
          does not constitute legal advice. Please consult a qualified attorney
          to ensure compliance with local laws and regulations applicable to
          your operations.
        </Text>

        <Text style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff", marginTop: 14 },
  content: { padding: 20, paddingBottom: 36 },
  title: { fontSize: 22, fontWeight: "900", marginBottom: 12 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    marginBottom: 6,
  },
  subSectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 6,
  },
  paragraph: { fontSize: 14, lineHeight: 20, color: "#333" },
  listItem: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    marginTop: 4,
  },
});
