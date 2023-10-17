const Input = ({state, dispatch}) => {
    return (
        <div className="inputs">
            <div className="input-container">
                <label 
                    htmlFor="day"
                    className={ state.isEmpty || state.isValid === false ? 'input-error' : ''}
                >
                    DAY
                </label>
                <input 
                    type="number"
                    id="day" 
                    placeholder="DD"
                    value={state.birthDay || ''}
                    onChange={(e) => dispatch({type: 'setDay', payload: (e.target.value)})}
                />
                {state.isEmpty === true && (
                    <p className="field-empty">This field is required</p>
                )}
                {state.isValid === false && state.isEmpty === false && (
                    <p className="field-empty">Must be a valid day</p>
                )}
            </div>
            <div className="input-container">
                <label 
                    htmlFor="month"
                    className={ state.isEmpty || state.isValid === false ? 'input-error' : ''}
                >MONTH</label>
                <input 
                    type="number"
                    id="month" 
                    placeholder="MM"
                    value={state.birthMonth || ''}
                    onChange={(e) => dispatch({type: 'setMonth', payload: (e.target.value)})}
                />
                {state.isEmpty === true && (
                    <p className="field-empty">This field is required</p>
                )}
                {state.isValid === false && state.isEmpty === false && (
                    <p className="field-empty">Must be a valid month</p>
                )}
            </div>
            <div className="input-container">
                <label 
                    htmlFor="year"
                    className={ state.isEmpty || state.isValid === false ? 'input-error' : ''}
                >YEAR</label>
                <input 
                    type="number"
                    id="year" 
                    placeholder="YYYY"
                    value={state.birthYear || ''}
                    onChange={(e) => dispatch({type: 'setYear', payload: (e.target.value)})}
                />
                {state.isEmpty === true && (
                    <p className="field-empty">This field is required</p>
                )}
                {state.isValid === false && state.isEmpty === false && (
                    <p className="field-empty">Must be in the past</p>
                )}
            </div>
        </div>
    )
}

export default Input
