import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 40px;
  color: red;
`

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = { thing: 0 }

        this.increaseThing = this.increaseThing.bind(this);
    }

    increaseThing() {
        this.setState({ thing: this.state.thing + 1 });
    }

    render() {
        return (
            <StyledWrapper>
                <p>I write stuff here</p>
                {this.state.thing}
                <button onClick={this.increaseThing}>
                    Increase thing
                </button>
            </StyledWrapper>
        )
    }
}

export default Test