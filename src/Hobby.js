import garden_microsoft from "../src/images/garden-microsoft.jpg"

function Hobby() {
  return (
    <div style={{backgroundColor: "#961a36", width: "100%"}}>
      <div className="content">
        <table>
          <tr className="flexbox-column">
            <td>
              <div className="section-50">
                <h1>Photography</h1>
                <img className="flex-image" src={garden_microsoft}></img>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Hobby;

