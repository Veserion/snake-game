import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import styled from '@emotion/styled'

interface IState {
    color: string
    headPosition: { x: number, y: number },
    direction: string
}

export default class Canvas extends React.Component<{}, IState> {
    box = 20;
    state = {
        color: "green",
        headPosition: { x: 0 * this.box, y: 0 * this.box },
        direction: 'right'
    };

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    handleDirection(event: React.KeyboardEvent) {
        let dir = this.state.direction
        if (event.keyCode == 37 && dir != 'right') {
            console.log('right')
            this.setState({ direction: 'left' })
        }
        else if (event.keyCode == 38 && dir != 'down') {
            console.log(this.state.direction)
            this.setState({ direction: 'up' })
        }
        else if (event.keyCode == 39 && dir != 'left')
            this.setState({ direction: 'right' })
        else if (event.keyCode == 40 && dir != 'up')
            this.setState({ direction: 'down' })
        else console.log('press')
    }
    render() {
        return <Root onKeyDown={this.handleDirection}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try click on rect" />
                    <Rect
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={this.state.color}
                        shadowBlur={5}
                        onClick={this.handleClick}
                    />
                </Layer>
            </Stage>
        </Root>
    }
}

const Root = styled.div`
position: absolute;
top: 0;
right: 0;
width: 100vw;
height: 100vh;
`