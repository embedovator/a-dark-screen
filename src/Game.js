import React, { Component } from 'react';

function Action(props) {
    return (
        <button type="button" className="action" onClick={props.onClick}>
            {props.actionText}
        </button>
    )
}

function Dialog(props) {
    return (
        <span>{props.dialog}</span>
    )
}

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            tick: 0,
        }
        this.tick = this.tick.bind(this);
        this.intervalHandle = setInterval(this.tick, 1000);
    }

    handleAction() {
        alert("ACTION!")
    }

    tick(){
        // This is probably such a horrible newbie way to tick...but here it is!
        this.setState({
           tick: this.state.tick + 1,
        });
    }

    render() {


        return (
            <div className="game-area">
                <div className="actions">
                    <Action
                        onClick={this.handleAction}
                        actionText="actionText"
                    />

                    <Action
                        onClick={() => this.props.onSave()}
                        actionText="Turn up Brightness"
                    />
                </div>
                <div className="dialog">
                     <Dialog 
                         dialog="Eyes are tired."
                     />
                </div>
            </div>
        );
    }
}