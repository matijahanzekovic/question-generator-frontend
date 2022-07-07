import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    question: "question 1",
                    answer: "answer 1",
                    distractors: [ "distractor 1", "distractor 2", "distractor 3" ]
                },
                {
                    id: 2,
                    question: "question 2",
                    answer: "answer 2",
                    distractors: [ "distractor 4", "distractor 5", "distractor 6" ]
                },
                {
                    id: 3,
                    question: "question 3",
                    answer: "answer 3",
                    distractors: [ "distractor 7", "distractor 8", "distractor 9" ]
                }
            ]
        }
    }

    addAnswerToDistractors() {
        let data = this.state.data
        for (let i = 0; data.size; i++) {
            data[i].distractors.push(data[i].answer)
            shuffle(data[i].distractors);
        }
    }
    

    render() {
        this.addAnswerToDistractors();

        return (
            <>
            <div className='container mt-4'>
                <ListGroup as="ol" numbered>
                   {this.state.data.map((item, index) =>
                        <>
                        <ListGroup.Item as="li" key={index}>{item.question}</ListGroup.Item>
                            {item.distractors.map((dist, ind) =>
                               <ListGroup as="ol" key={ind}>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {dist}
                                    </label>
                                    </div>
                               </ListGroup>
                            )}
                        </>
                        
                   )}
                </ListGroup>
            </div>
            {/* <div className='container mt-4'>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li">Question</ListGroup.Item>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='mb-4'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item as="li">Question</ListGroup.Item>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='mb-4'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item as="li">Question</ListGroup.Item>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='mb-4'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Answer
                                </label>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup>
            </div> */}
            </>
        )
    }
}

export default Quiz;