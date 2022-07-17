import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

class SolveQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    question: "question 1",
                    answers: [ "answer 1", "answer 2", "answer 3", "answer 4" ]
                },
                {
                    id: 2,
                    question: "question 2",
                    answers: [ "answer 5", "answer 6", "answer 7", "answer 8" ]
                },
                {
                    id: 3,
                    question: "question 3",
                    answers: [ "answer 9", "answer 10", "answer 11", "answer 12" ]
                }
            ],
            solvedQuizData: [
                {
                    id: 1,
                    selectedAnswer: "answer 2"
                },
                {
                    id: 2,
                    selectedAnswer: "answer 8"
                },
                {
                    id: 3,
                    selectedAnswer: "answer 9"
                }
            ],
            request: {},
            solvedQuiz: []
        }
    }

    onRadioButtonChange = (event) => {
        let key = event.target.name;
        let value = event.target.value
        this.setState({
            request: {...this.state.request, [key]: value}
        })
    }

    mapToRequest = (obj) => {
        const arr = [];
        Object.entries(obj).forEach(([key, value]) => {
        arr.push({ id: key, answer: value });
        });
        return arr;
    };

    onFinish = () => {
        let arr = this.mapToRequest(this.state.request)
        console.log(arr)
    }

    render() {
        return (
            <>
                <div className='container mt-4'>
                    <ListGroup as="ol" numbered>
                    {this.state.data.map((item, index) =>
                            <>
                            <ListGroup.Item as="li" key={index} className='mt-4'>{item.question}</ListGroup.Item>
                                {item.answers.map((ans, ind) =>
                                <>
                                    <ListGroup as="ol" key={ind}>
                                        <ListGroup.Item as="li">
                                            <div class="form-check" onChange={e => this.onRadioButtonChange(e)}>
                                                <input class="form-check-input" type="radio" value={ans} name={item.id} id={item.id}/>
                                                <label class="form-check-label" for={ans}>
                                                    {ans}
                                                </label>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </>
                                )}
                            </>
                            
                    )}
                    </ListGroup>
                    <div className='text-center mt-4'>
                        <button type="button" class="btn btn-success" onClick={this.onFinish}>Finish and send answers</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SolveQuiz;