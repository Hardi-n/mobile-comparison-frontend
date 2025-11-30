import React from "react";

export default function Contact() {
  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <p style={{ marginBottom: "10px" }}>
        If you have any questions or inquiries, feel free to reach out to us:
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem" }}>
        {/* Email */}
        <p>
          📧 Email:{" "}
          <a href="mailto:support@example.com" style={{ color: "#1d4ed8", textDecoration: "none" }}>
            subhagya.chhabra@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p>
          📞 Phone:{" "}
          <a href="tel:+911234567890" style={{ color: "#1d4ed8", textDecoration: "none" }}>
            +91 7658007883
          </a>
        </p>

        {/* Address */}
        <p>
          🏠 Address: CSE Department SLIET, longowal sangrur punjab India
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
          How to Reach Us
        </h2>
        <p>
          You can call us directly, send us an email, or visit our College at the address above.  
          We are available Monday to Friday, 9:00 AM to 3:00 PM.
        </p>
      </div>
    </div>
  );
}
