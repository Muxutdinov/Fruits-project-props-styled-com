import React from "react";
import { Bottom, Top, Details, Main, Rasm ,Data} from "./FruitStyle";


export const Fruit = (props) => {
  return (
    <Main>
      <Rasm>
        <img src={props.data.img}width="100%" height="100%"/>
      </Rasm>
      <Details>
        <Top>
          <h1>{props.data.title}</h1>
          <button>Add</button>
        </Top>
        <Bottom>
          <Data>
              <p>UOM</p>
              <h1>02</h1>
          </Data>
          <Data>
          <p>Pack Size</p>
              <h1>{props.data.size}</h1>
          </Data>
          <Data>
          <p>Per Unit</p>
              <h1>{props.data.unit}</h1>
          </Data>
          <Data>
          <p>Total</p>
              <h1>{props.data.total}</h1>
          </Data>
        </Bottom>
      </Details>
    </Main>
  );
};
