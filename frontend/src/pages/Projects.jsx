 function Projects() {
  const projects = [
    {
      name: "Westlands Commercial Site",
      location: "Westlands, Nairobi",
      status: "In Progress",
      progress: "72%",
    },
    {
      name: "Karen Residential Project",
      location: "Karen, Nairobi",
      status: "In Progress",
      progress: "48%",
    },
    {
      name: "Ruiru Housing Project",
      location: "Ruiru, Kiambu",
      status: "Planning",
      progress: "20%",
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
              }}
            >
              Projects
            </h1>

            <p style={{ color: "#71807f" }}>
              Manage and monitor your construction projects.
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
            + New Project
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                background: "white",
                borderRadius: "15px",
                padding: "24px",
                boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "10px",
                  background: "#dff3f0",
                  color: "#159a8c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "18px",
                }}
              >
                P
              </div>

              <h2
                style={{
                  color: "#173b39",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                {project.name}
              </h2>

              <p
                style={{
                  color: "#71807f",
                  fontSize: "14px",
                }}
              >
                📍 {project.location}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "22px",
                  marginBottom: "8px",
                  fontSize: "13px",
                }}
              >
                <span style={{ color: "#71807f" }}>Progress</span>
                <strong style={{ color: "#159a8c" }}>
                  {project.progress}
                </strong>
              </div>

              <div
                style={{
                  height: "8px",
                  background: "#e5eeee",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: project.progress,
                    height: "100%",
                    background: "#159a8c",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "20px",
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background:
                    project.status === "Planning"
                      ? "#fff3d6"
                      : "#dff3f0",
                  color:
                    project.status === "Planning"
                      ? "#9a6a00"
                      : "#087c70",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;