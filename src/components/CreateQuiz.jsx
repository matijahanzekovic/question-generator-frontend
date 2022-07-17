import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

class CreateQuiz extends Component {
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
            quizTitle: "",
            selectedQuestionIds: [],
        }
    }

    onChange = (event) => {
        this.setState({
            quizTitle: event.target.value
        });
    }

    onCheckboxChange = (event) => {
        let questionId = event.target.name;
        let questionIds = [...this.state.selectedQuestionIds, questionId]
        if (this.state.selectedQuestionIds.includes(questionId)) {
            questionIds = questionIds.filter(id => id !== questionId)
        }
        this.setState({
            selectedQuestionIds: questionIds
        })
    }

    mapToRequest = (quizTitle, questionIds) => {
        return { quizTitle: quizTitle, questionIds: questionIds };
    };

    onFinish = () => {
        const createQuizRequest = this.mapToRequest(this.state.quizTitle, this.state.selectedQuestionIds)
        console.log(createQuizRequest)
    }

    render() {
        return (
            <>
                <div className='container mt-4'>
                    <h5>Here are all generated questions. Please enter quiz name and select questions you want to be added into new quiz.</h5>
                    <br></br>
                    <form>
                        <div class="form-group row mt-4">
                            <label for="quizTitle" class="col-sm-1 col-form-label">Quiz title:</label>
                            <div class="col-sm-11">
                                <input type="text" class="form-control" id="quizTitle" placeholder="Quiz title" onChange={e => this.onChange(e)}/>
                            </div>
                        </div>
                        <ListGroup as="ol">
                        {this.state.data.map((item, index) =>
                            <>
                                <ListGroup.Item as="li" key={index} className='mt-4'>
                                    <div class="form-check" onChange={e => this.onCheckboxChange(e)}>
                                        <input class="form-check-input" type="checkbox" value={item.question} name={item.id} id={item.id}/>
                                        <label class="form-check-label" for={item.question}>
                                            <span><p>{item.id}.  {item.question}</p></span>
                                        </label>
                                    </div>
                                </ListGroup.Item>
                                {item.answers.map((ans, ind) =>
                                    <>
                                        <ListGroup as="ol" key={ind}>
                                            <ListGroup.Item as="li">
                                                {ans}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </>
                                )}
                            </>
                        )}
                        </ListGroup>
                        <div className='text-center mt-4'>
                            <button type="button" class="btn btn-success" onClick={this.onFinish}>Create quiz</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default CreateQuiz;