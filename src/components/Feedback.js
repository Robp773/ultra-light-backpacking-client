import React from 'react';
import './Feedback.css';
import styled, { keyframes } from 'styled-components';

export default class Feedback extends React.Component {

    render() {

        const expandUnderliners = keyframes`
         0% {
            border-top: 2px solid black;
            width: 0%;
         }

         50% {
                border-top: 2px solid #52DEE5;
         }

       100% {
        border-top: 2px solid black;
            width: 100%;
            }
            `;

        const Underliner = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid black;
  width: 100%;
  animation: 1s ${expandUnderliners};`

        return (
            <div id='feedbackParent'>
                <Underliner></Underliner>
                {this.props.feedback}
                <Underliner></Underliner>
            </div>
        )
    }
}
