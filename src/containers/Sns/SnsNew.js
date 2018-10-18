import React, { Component } from 'react';
import styled from 'styled-components';

class SnsNew extends Component {
  render() {
    return(
      <form>
        <FormArea>
          <TxtInput>
            <textarea name="" cols="35" rows="5" maxLength="140" ></textarea>
          </TxtInput>
          <FileInput>
            <input type="file" name="" />
          </FileInput>
        </FormArea>
      </form>
    );
  }
}

export default SnsNew;

/* constエリア */
const FormArea = styled.div``

const TxtInput = styled.div``

const FileInput = styled.div``
