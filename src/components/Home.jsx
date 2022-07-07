import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
           <div className='container'>
                <h5 className='text-center mt-4 mb-4'>In text box below enter text for which you want to generate questions:</h5>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div class="form-group row">
                            <div class="col-12">
                                <textarea class="form-control" type="text" rows="30"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button type="button" class="btn btn-success">
                        Generate questions <i class="fa fa-floppy-o"></i>
                    </button>
                </div>
           </div>
        )
    }
}

export default Home;