import { useState } from 'react';

const Display = ({state, dispatch}) => {
    const [year, setYear] = useState('- -');
    const [month, setMonth] = useState('- -');
    const [day, setDay] = useState('- -');
    const today = new Date();
    const handleClick = () => {
        
        const calculateAge = () => {
            dispatch({type: 'setIsNotEmpty'});
            setDay(Math.abs(today.getDay() - Number(state.birthDay)));
            setMonth(Math.abs(today.getMonth() - Number(state.birthMonth)));
            setYear(today.getFullYear() - Number(state.birthYear));
        }
        const wrongDate = () => {
            setYear('- -');
            setMonth('- -');
            setDay('- -');
            dispatch({type: 'setIsNotValid'})
        }
        const isWrongDate = (day, month, year) =>{
            return  false || Number(day) > 31 || Number(month) > 12 || Number(year) > today.getFullYear() || !Number.isInteger(day + month + year) || month === 0 || day === 0
        }
        state.birthDay && state.birthMonth && state.birthYear ? calculateAge() : dispatch({type: 'setIsEmpty'});

        isWrongDate(Number(state.birthDay), Number(state.birthMonth), Number(state.birthYear)) ? wrongDate() : dispatch({type: 'setIsValid'})
    }
    return (
        <div>
            <div className="div">
                <div className="hr">
                    <img 
                        src={require('./images/icon-arrow.svg').default}
                        alt='Calculate Age'
                        onClick={handleClick}
                    />
                </div>
           </div>
           <div className='age-display'>
                <h2><span>{year}</span> years</h2>
                <h2><span>{month}</span> months</h2>
                <h2><span>{day}</span> days</h2>
            </div>
        </div>
    )
}

export default Display
