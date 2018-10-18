import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
  state = {
    data: {
      mail: '',
      pass: ''
    }
  };

  handleChange = event => {
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;

    this.setState({
      data: data
    });

    console.log(data);
  };

  render() {
    return (
      <Loginwrap>
        <Logintitle>ログインフォーム</Logintitle>
        <Inputwrap>
          <Id>
            <Input type="input" id="mail" name="mail" placeholder="メールアドレス" value={this.state.data.mail} onChange={this.handleChange}></Input>
          </Id>
          <Pass>
            <Input type="password" id="pass" name="pass" placeholder="パスワード" value={this.state.data.pass} onChange={this.handleChange}></Input>
          </Pass>
          <Log>
            <Logbutton type="submit" value="ログイン"></Logbutton>
          </Log>
        </Inputwrap>
      </Loginwrap>
    );
  }
}

export default Login;

const Loginwrap = styled.div`
`
const Logintitle = styled.h1`
  text-align: center;
`
const Inputwrap = styled.div`
  text-align: center;
`
const Id = styled.div`
`
const Pass = styled.div`
`
const Log = styled.div`
`
const Input = styled.input`
`
const Logbutton = styled.input`
`