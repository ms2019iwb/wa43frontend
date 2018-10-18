import React, { Component } from 'react';
import styled from 'styled-components';

class Signup extends Component {
  state = {
    data: {
      id: '',
      pass: '',
      name: ''
    }
  };
  txtChange = event =>{
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;
    this.setState({
      data:data
    });
    console.log(data);
  };
  render() {
    return(
      <Root>
      <Form>
        <Title>ようこそ!</Title>
        <Text>アカウントを作成して始めましょう。</Text>
          <Input type="text" placeholder="IDを入力" value={this.state.data.id} onChange={this.txtChange} name="id" ></Input>
          <Input type="password" placeholder="パスワード" value={this.state.data.pass} onChange={this.txtChange} name="pass" ></Input>
          <Input type="text" placeholder="表示名" value={this.state.data.name} onChange={this.txtChange} name="name" ></Input>
          <Button href="" onClick={this._onClickHandler}>はじめる</Button>
      </Form>
      </Root>
    );
  }
}

export default Signup;

const Root = styled.div`
  display: flex;
`

const Form = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`

const Input = styled.input`
  width: 80%;
  height: 50px;

`

const Title = styled.h1`
  font-size: 150%;
  height: 70px;
`

const Text = styled.p`
  margin-bottom:10px;
`

const Button = styled.a`
 text-align: center;
 background-color: crimson;
 margin-top:10px;
 width: 30%;
 color:#fff;
`