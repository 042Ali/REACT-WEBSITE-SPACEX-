import "./CardImage.css";

export default function CardImage() {
  return (
    <>
      <img
        style={{ marginTop: "200px", marginLeft: "1000px" }}
        src="./image 3.png"
        alt=""
      />
      <div
        style={{
          color: "white",
          marginTop: "-1500px",
          marginLeft: "149px",
          fontSize: "32px",
        }}
      >
        <h1>Falcon Heavy </h1>
        <h1>Overview</h1>
      </div>
      <div className="h2__h2">
        <h2 className="h2__1">HEIGHT</h2>
        <p>70 m / 229.6 ft</p>
        <h2 className="h2__2">DIAMETER</h2>
        <p>12.2 m / 39.9 ft</p>
        <h2 className="h2__3">MASS</h2>
        <p>1,420,788 kg / 3,125,735 lb</p>
        <h2 className="h2__4">PAYLOAD TO LEO</h2>
        <p>63,800 kg / 140,660 lb</p>
        <h2 className="h2__5">PAYLOAD TO GTO </h2>
        <p>26,700 kg / 58,860 lb</p>
        <h2 className="h2__6">PAYLOAD TO MARS</h2>
        <p>16,800 kg / 37,040 lb</p>
      </div>
      <div className="UNMATCHED">
        <h1>UNMATCHED </h1>
        <h1>PERFORMANCE</h1>
        <p>
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is{" "}
          <br />
          the most capable rocket flying. By comparison, the liftoff thrust of{" "}
          <br />
          the Falcon Heavy equals approximately eighteen 747 aircraft at full{" "}
          <br />
          power. Falcon Heavy can lift the equivalent of a fully loaded 737{" "}
          <br />
          jetliner—complete with passengers, luggage and fuel—to orbit. <br />
        </p>
      </div>
    </>
  );
}
