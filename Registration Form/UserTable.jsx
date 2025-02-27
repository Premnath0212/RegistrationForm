function UserTable({list,onEdit,onDelete }) {
  return (
    <table
      style={{
        width:"800px",
        border:"solid 1px black",
        textAlign:"center",
        marginTop:"20px",
      }}
    >
      <thead>
        <tr>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Username</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Full Name</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Address</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Phone Number</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Email Address</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Educational Background</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Preferred Coding Language(s)</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Experience Level</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Reason for Participating</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Additional Information</th>
          <th style={{ padding: "15px", border: "solid 1px black" }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {list.map((val, ind) => (
          <tr key={ind}>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.username}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.fullName}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.address}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.phoneNumber}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.email}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.educationalBackground}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.codingLanguages}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.experienceLevel}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.reasonForParticipating}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>{val.additionalInfo}</td>
            <td style={{ padding: "15px", border: "solid 1px black" }}>
              <button onClick={() => onEdit(ind)} style={{ marginRight: "5px" }}>Edit</button>
              <button onClick={() => onDelete(ind)} style={{ backgroundColor: "red", color: "white" }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
