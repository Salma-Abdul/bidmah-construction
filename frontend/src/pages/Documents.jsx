function Documents() {
  const documents = [
    {
      name: "Westlands Site Report.pdf",
      type: "Site Report",
      project: "Westlands Commercial Site",
      date: "24 Sep 2026",
      status: "Available",
    },
    {
      name: "Material Delivery.pdf",
      type: "Material Record",
      project: "Karen Residential Project",
      date: "23 Sep 2026",
      status: "Available",
    },
    {
      name: "Project Budget.pdf",
      type: "Financial",
      project: "Ruiru Housing Project",
      date: "22 Sep 2026",
      status: "Available",
    },
    {
      name: "Safety Inspection.pdf",
      type: "Safety",
      project: "Westlands Commercial Site",
      date: "20 Sep 2026",
      status: "Available",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f7",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, color: "#173b39" }}>
              Documents
            </h1>

            <p style={{ color: "#71807f" }}>
              Store and manage important project documents.
            </p>
          </div>

          <button
            style={{
              background: "#159a8c",
              color: "white",
              border: "none",
              borderRadius: "9px",
              padding: "13px 20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            + Upload Document
          </button>
        </div>

        {/* Document Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {documents.map((document, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                padding: "22px",
                boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "#dff3f0",
                    color: "#159a8c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  📄
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#173b39",
                      fontSize: "16px",
                    }}
                  >
                    {document.name}
                  </h3>

                  <p
                    style={{
                      margin: "5px 0 0",
                      color: "#71807f",
                      fontSize: "13px",
                    }}
                  >
                    {document.type}
                  </p>
                </div>
              </div>

              <p
                style={{
                  color: "#71807f",
                  fontSize: "14px",
                  margin: "8px 0",
                }}
              >
                <strong>Project:</strong> {document.project}
              </p>

              <p
                style={{
                  color: "#71807f",
                  fontSize: "14px",
                  margin: "8px 0",
                }}
              >
                <strong>Date:</strong> {document.date}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "18px",
                }}
              >
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    background: "#dff3f0",
                    color: "#087c70",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {document.status}
                </span>

                <button
                  style={{
                    background: "white",
                    color: "#159a8c",
                    border: "1px solid #159a8c",
                    borderRadius: "7px",
                    padding: "7px 14px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;