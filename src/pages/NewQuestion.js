import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';

const NewQuestion = (props) => {
  const [formValues, setFormValues] = useState({
    optionOneText: '',
    optionTwoText: '',
  });

  const onTextChange = (e) => {
    const value = e.target.value;
    const name = e.target.name

    setFormValues(state => ({...state, [name]: value}))
  };

  const onSaveQuestion =  (event) => {
    const { dispatch, history } = props;
    event.preventDefault()
    dispatch(handleSaveQuestion(formValues, () => history.push('/')))
  };

  const isFormDisabled = () => {
    const { loadingBar } = props;
    return !formValues.optionOneText || !formValues.optionTwoText || loadingBar.default === 1;
  }

  return (
    <>
    <NavBar />
    <div className="wrapper new-question">
      <h2>New Polling Question</h2>

      <form className="question-form">
        <p>Complete the question:</p>

        <h4>Would you rather...</h4>

        <div>
          <input
            id="optionOne"
            type="text"
            name="optionOneText"
            value={formValues.optionOneText}
            onChange={onTextChange}
            placeholder="Option One..."
            className="text-input"
            required
          />
        </div>

        <div className="or">
          <p>OR</p>
        </div>

        <div>
          <input
            id="optionTwo"
            type="text"
            name="optionTwoText"
            value={formValues.optionTwoText}
            onChange={onTextChange}
            placeholder="Option Two..."
            className="text-input"
            required
          />
        </div>

        <div className="cta">
          <Button
            text="Save"
            id="save-poll"
            type="primary"
            onClick={onSaveQuestion}
            isDisabled={isFormDisabled()}
          />
        </div>
      </form>
    </div>
    </>
  )
}

const mapStateToProps = ({ loadingBar }) => {
  return {
    loadingBar,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
