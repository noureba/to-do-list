import React from "react";

function page() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Terms of Service for To-Do List App
        </h1>
        <p className="text-gray-600 mb-4">Effective Date: 02/02/2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By using the To-Do List App, you agree to be bound by these Terms of
            Service. If you do not agree, please do not use the app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provide accurate information during registration.</li>
            <li>Keep your login credentials secure.</li>
            <li>Use the app only for lawful purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Content Ownership</h2>
          <p className="text-gray-700">
            You retain ownership of the tasks and data you create. However, we
            may access this data to provide better services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            We are not liable for any damages resulting from app usage,
            including data loss or service interruptions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to update these terms at any time. Continued
            use of the app after changes means you accept the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, please contact us.
          </p>
        </section>
      </div>
    </>
  );
}

export default page;
