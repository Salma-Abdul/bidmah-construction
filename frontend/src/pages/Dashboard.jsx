function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f7",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#173b39",
                fontSize: "30px",
              }}
            >
              Dashboard
            </h1>

            <p
              style={{
                color: "#71807f",
                marginTop: "8px",
              }}
            >
              Welcome back. Here's your site overview.
            </p>
          </div>

          <div
            style={{
              background: "#159a8c",
              color: "white",
              padding: "10px 18px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            ● Online
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>Projects</p>
            <h2 style={{ color: "#173b39", fontSize: "30px" }}>12</h2>
            <span style={{ color: "#159a8c" }}>Active projects</span>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>Workers</p>
            <h2 style={{ color: "#173b39", fontSize: "30px" }}>86</h2>
            <span style={{ color: "#159a8c" }}>Registered workers</span>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>Materials</p>
            <h2 style={{ color: "#173b39", fontSize: "30px" }}>24</h2>
            <span style={{ color: "#159a8c" }}>Items in stock</span>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>Pending</p>
            <h2 style={{ color: "#173b39", fontSize: "30px" }}>7</h2>
            <span style={{ color: "#159a8c" }}>Approvals</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "14px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ color: "#173b39", marginTop: 0 }}>
              Recent Site Reports
            </h2>

            <div style={{ borderTop: "1px solid #e5eeee" }}>
              <p>
                <strong>Westlands Project</strong>
                <br />
                Foundation work completed
              </p>

              <p>
                <strong>Karen Project</strong>
                <br />
                Materials received on site
              </p>

              <p>
                <strong>Ruiru Project</strong>
                <br />
                Daily attendance submitted
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#173b39",
              color: "white",
              padding: "25px",
              borderRadius: "14px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Quick Actions</h2>

            <button
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                border: "none",
                borderRadius: "8px",
                background: "#159a8c",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add Site Report
            </button>

            <button
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                border: "none",
                borderRadius: "8px",
                background: "white",
                color: "#173b39",
                cursor: "pointer",
              }}
            >
              Add Material
            </button>

            <button
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                background: "white",
                color: "#173b39",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;