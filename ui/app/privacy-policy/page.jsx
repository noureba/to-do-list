import React from "react";

function page() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy for To-Do List App
        </h1>
        <p className="text-gray-600 mb-4">Effective Date: 02/02/2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to the To-Do List App! We value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Personal Information:</strong> When you sign up, we may
              collect your name, email address, and login credentials.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect data on how you use
              the app, such as task creation and completion activities.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provide and improve the app’s functionality.</li>
            <li>Personalize your experience.</li>
            <li>Send important updates or notifications.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your
            data. However, no method of transmission or storage is 100% secure,
            so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Third-Party Services
          </h2>
          <p className="text-gray-700">
            We may use third-party services to enhance our app. These services
            have their own privacy policies, and we encourage you to review
            them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal
            information. Contact us to make any
            requests.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes
            will be posted within the app, and your continued use of the app
            constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy,
            please contact us.
          </p>
        </section>
      </div>
    </>
  );
}

export default page;
