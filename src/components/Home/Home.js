import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import classes from "./Home.module.css";

const DUMMY_TOURS = [
  {
    id: 1,
    date: "JUL 16",
    city: "DETROIT, MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL 19",
    city: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    city: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    city: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "AUG 7",
    city: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <>
      <h2 className={classes["heading"]}>Tours</h2>
      <div className={`${classes["cont"]}`}>
        <Table borderless responsive="lg" size="md">
          <tbody>
            {DUMMY_TOURS.map((eachrow) => {
              return (
                <tr key={eachrow.id} className={classes["bordered-row"]}>
                  <td className={classes["each-col"]}>{eachrow.date}</td>
                  <td
                    className={classes["bordered-row"]}
                    style={{ color: "#777" }}
                  >
                    {eachrow.city}
                  </td>

                  <td className={classes["each-col"]} style={{ color: "#777" }}>
                    {eachrow.place}
                  </td>
                  <td className={classes["each-col"]}>
                    <button className="text-white fw-bold">Buy Tickets</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
