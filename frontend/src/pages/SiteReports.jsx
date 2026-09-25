function SiteReports() {
  const reports = [
    {
      site: "Westlands Commercial Site",
      date: "24 Sep 2026",
      workers: 28,
      work: "Foundation work completed",
      status: "Submitted",
    },
    {
      site: "Karen Residential Project",
      date: "23 Sep 2026",
      workers: 19,
      work: "Wall construction in progress",
      status: "Submitted",
    },
    {
      site: "Ruiru Housing Project",
      date: "22 Sep 2026",
      workers: 15,
      work: "Site preparation and excavation",
      status: "Pending",
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
              Site Reports
            </h1>

            <p style={{ color: "#71807f" }}>
              Record and monitor daily construction site activities.
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
            + Add Report
          </button>
        </div>

        {/* Reports */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "24px",
            boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b39",
              fontSize: "20px",
            }}
          >
            Daily Reports
          </h2>

          {reports.map((report, index) => (
            <div
              key={index}
              style={{
                borderBottom:
                  index !== reports.length - 1
                    ? "1px solid #e8eeee"
                    : "none",
                padding: "20px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      color: "#173b39",
                      fontSize: "17px",
                    }}
                  >
                    {report.site}
                  </h3>

                  <p
                    style={{
                      margin: "5px 0",
                      color: "#71807f",
                      fontSize: "14px",
                    }}
                  >
                    📅 {report.date}
                  </p>

                  <p
                    style={{
                      margin: "5px 0",
                      color: "#71807f",
                      fontSize: "14px",
                    }}
                  >
                    👷 Workers present: {report.workers}
                  </p>

                  <p
                    style={{
                      margin: "10px 0 0",
                      color: "#4f5f5d",
                      fontSize: "14px",
                    }}
                  >
                    {report.work}
                  </p>
                </div>

                <div
                  style={{
                    padding: "7px 14px",
                    borderRadius: "20px",
                    background:
                      report.status === "Pending"
                        ? "#fff3d6"
                        : "#dff3f0",
                    color:
                      report.status === "Pending"
                        ? "#9a6a00"
                        : "#087c70",
                    fontSize: "12px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  {report.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SiteReports;