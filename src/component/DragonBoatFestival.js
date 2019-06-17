import React from "react";
import zongziImg from "../zongzi.png";

const Title = ({ number, action }) => {
  return (
    <h2>
      Level {number} {action}吧！粽子
    </h2>
  );
};

const onClick = () => {
  console.log("組建內的callback需要處理，會以 handleCallback 這個模式命名");
};

const MyButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

class DragonBoatFestival extends React.Component {
  state = {
    value: 0,
    eat: true,
    click: 10
  };
  handleIncrease = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handleReduce = () => {
    if (this.state.value <= 0) {
      alert("外面沒有粽子了！");
    } else {
      this.setState({
        value: this.state.value - 1
      });
    }
  };
  handleReturn = () => {
    this.setState({
      value: 0
    });
  };
  handleTransform = () => {
    this.setState({
      eat: !this.state.eat
    });
  };
  handleClicked = () => {
    this.setState({
      click: this.state.click - 1,
      value: this.state.value + 1
    });
  };
  render() {
    return (
      <div>
        <h1>
          端午節快樂，
          {this.state.eat ? (
            "粽子"
          ) : (
            <img style={{ width: "100px", height: "auto" }} src={zongziImg} />
          )}{" "}
          ：{this.state.value}
        </h1>
        <Title number="1" action=": 去" />
        {/* <button onClick={this.handleIncrease}>去吧！</button> */}
        <MyButton onClick={this.handleIncrease}> 去吧！ </MyButton>

        <Title number="2" action=": 回來" />
        {/* <button onClick={this.handleReduce}>回來吧！</button> */}
        <MyButton onClick={this.handleReduce}> 回來吧！ </MyButton>

        <Title number="3" action=": 消失" />
        {/* <button onClick={this.handleReturn}>消失吧！</button> */}
        <MyButton onClick={this.handleReturn}> 消失吧！ </MyButton>

        <Title number="4" action=": 變形" />
        {/* <button onClick={this.handleTransform}>變形吧！</button> */}
        <MyButton onClick={this.handleTransform}> 變形吧！ </MyButton>

        <Title number="5" action=": 點爆" />
        {/* {this.state.click === 0 ? "粽子爆了" : <button onClick={this.clicked}>點爆吧！還有{this.state.click}次</button>} */}
        {this.state.click === 0 ? (
          "粽子爆了"
        ) : (
          <MyButton onClick={this.handleClicked}>
            {" "}
            點爆吧！還有{this.state.click}次{" "}
          </MyButton>
        )}
      </div>
    );
  }
}

export default DragonBoatFestival;
