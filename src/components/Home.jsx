import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    onFinish = () => {
        console.log(this.state.text)
    }

    render() {
        return (
           <div className='container'>
                <h5 className='text-center mt-4 mb-4'>In text box below enter text for which you want to generate questions:</h5>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div class="form-group row">
                            <div class="col-12">
                                <textarea class="form-control" type="text" rows="30" onChange={e => this.onChange(e)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button type="button" class="btn btn-success" onClick={this.onFinish}>
                        Generate questions <i class="fa fa-floppy-o"></i>
                    </button>
                </div>
           </div>
        )
    }
}

export default Home;