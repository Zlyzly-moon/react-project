import React, { Component } from 'react'

export default class Counter extends Component {
     // 加
 increment = ()=>{
    const {seleted_number} = this.refs
    this.props.increment(seleted_number.value*1)
  }
  // 减法
  decrement = ()=>{
    const {seleted_number} = this.refs
    this.props.decrement(seleted_number.value*1)
  }
  // 奇数
  incrementAdd = ()=>{
    const {seleted_number} = this.refs
    const {count} = this.props
    if(count % 2 === 1){
        this.props.increment(seleted_number.value*1)
    }
    
  }
  // 延迟加
  decrementAnsyc = ()=>{
    const {seleted_number} = this.refs
    
    setTimeout(()=>{
        this.props.increment(seleted_number.value*1)
    },1000)
  }
  render(){
    return (
      <div>
  <span>count is {this.props.count}</span>
        <hr/>
        <select ref="seleted_number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementAdd}>increment if add</button>&nbsp;
        <button onClick={this.decrementAnsyc}>decrement if async</button>
      </div>
    )
  }
}
