import React from 'react';
import logo from './logo.svg';
import zongziImg from './zongzi.png';
import './App.css';

const App = () => {
  return (
    <div>
      <MyClassButton></MyClassButton>
    </div>
  );  
}

const Title = ({ number, action }) => {
  return (
    <h2>Level {number} {action}吧！粽子</h2>
  )
}

const onClick = () => {
  console.log('組建內的callback需要處理，會以 handleCallback 這個模式命名');
};

const MyButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

class MyClassButton extends React.Component {
  state = {
    value: 0,
    eat: true,
    click: 10,
  };
  increase = () => {
    this.setState({
        value: this.state.value + 1,
    })
  };
  reduce = () => {
    if (this.state.value <= 0) {
      alert("外面沒有粽子了！");
    } else {
      this.setState({
        value: this.state.value - 1,
      })
    }
  }
  return = () => {
    this.setState({
      value : 0,
    })
  }
  transform = () => {
    this.setState({
      eat: !this.state.eat,
    })
  }
  clicked = () => {
    this.setState({
      click: this.state.click - 1,
      value: this.state.value + 1,      
    })
  }
  render() {
    const style = {
      width: '100px',
      height: 'auto',
    };
    return (
      <div>
        <h1>端午節快樂，{this.state.eat ? "粽子" : <img style={style} src={zongziImg} />} ：{this.state.value}</h1>
        <Title number="1" action=": 去" />
        {/* <button onClick={this.increase}>去吧！</button> */}
        <MyButton onClick={this.increase}> 去吧！ </MyButton>

        <Title number="2" action=": 回來" />
        {/* <button onClick={this.reduce}>回來吧！</button> */}
        <MyButton onClick={this.reduce}> 回來吧！ </MyButton>

        <Title number="3" action=": 消失" />
        {/* <button onClick={this.return}>消失吧！</button> */}
        <MyButton onClick={this.return}> 消失吧！ </MyButton>

        <Title number="4" action=": 變形" />
        {/* <button onClick={this.transform}>變形吧！</button> */}
        <MyButton onClick={this.transform}> 變形吧！ </MyButton>

        <Title number="5" action=": 點爆" />
        {/* {this.state.click === 0 ? "粽子爆了" : <button onClick={this.clicked}>點爆吧！還有{this.state.click}次</button>} */}
        {this.state.click === 0 ? "粽子爆了" : <MyButton onClick={this.clicked}> 點爆吧！還有{this.state.click}次 </MyButton>}
        
      </div>
    )
  }
}




export default App;
