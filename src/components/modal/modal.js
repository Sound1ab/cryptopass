import React from 'react';

const tick = require('../../assets/images/white-check-mark.png');

export default class Modal extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="modal">
                <div className="modal__container modal--center">
                    <div className="modal__icon">
                        <div className="modal__circle modal--center">
                            <img src={tick} height="30px" width="30px"/>
                        </div>
                    </div>
                    <div className="modal__message">
                        Password copied to clipboard!
                    </div>
                </div>
            </div>
        )
    }
}