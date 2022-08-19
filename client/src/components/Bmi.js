import { useState } from "react";
import "../Stylebmi.css";
export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [color, setColor] = useState("");

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleSubmit = (e) => {
    var obj = JSON.stringify({
      weight: weight,
      height: height,
    });
    console.log(obj);
    fetch("http://localhost:3000/bmi", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: obj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBmi(data.bmi);

        handleBmiRange(data.bmi);
      });
    e.preventDefault();
  };

  const handleBmiRange = (bmi) => {
    if (bmi < 18.5) {
      setColor("yellow");
      //   return (
      //     <div className="yellow">
      //       <p>{bmi}</p>
      //     </div>
      //   );
    } else if (bmi >= 18.5 && bmi <= 25) {
      setColor("green");
      //   return (
      //     <div className="green">
      //       <p>{bmi}</p>
      //     </div>
      //   );
    } else if (bmi > 25 && bmi <= 30) {
      setColor("orange");
      //   return (
      //     <div className="orange">
      //       <p>{bmi}</p>
      //     </div>
      //   );
    } else {
      setColor("maroon");
      //   return (
      //     <div className="maroon">
      //       <p>{bmi}</p>
      //     </div>
      //   );
    }
  };

  return (
    <div className="border">
      <h1 className="head">BMI Calculator</h1>
      <div className="back center">
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>Weight</td>
              <td>
                <input
                  className="bord"
                  onChange={handleChangeWeight}
                  value={weight}
                  name="weight"
                  type="number"
                />
              </td>
              <td>Kg</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>
                <input
                  className="bord"
                  onChange={handleChangeHeight}
                  value={height}
                  name="height"
                  type="number"
                />
              </td>
              <td>m</td>
            </tr>
          </table>
          <button type="submit">Submit</button>
        </form>
      </div>
      <table>
        <tr>
          <td className="back">Your Bmi:</td>
          <td className={color}>{bmi}</td>
        </tr>
      </table>
      <table>
        <tr>
          <td className="yellow">
            <p>
              Underweight
              <br />
              &lt;18.5
            </p>
          </td>
          <td className="green">
            <p>
              Normal Weight
              <br />
              18.5 - 25
            </p>
          </td>
          <td className="orange">
            <p>
              Overweight
              <br />
              25 - 30
            </p>
          </td>
          <td className="maroon">
            <p>
              Obese
              <br />
              &gt;30
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
