import { useState } from 'react';

const Display = ({state, dispatch}) => {
    const [year, setYear] = useState('- -');
    const [month, setMonth] = useState('- -');
    const [day, setDay] = useState('- -');
    const today = new Date();
    const handleClick = () => {
            
        const calculateAge = () => {
            dispatch({type: 'setIsNotEmpty'});
            const birthDate = new Date(state.birthYear, state.birthMonth - 1, state.birthDay);

            const yearDiff = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();

            let year = yearDiff;
            let month = monthDiff;
            let day = dayDiff;

            if (day < 0) {
                month -= 1;
                const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
                day += tempDate.getDate();
            }

            if (month < 0) {
                year -= 1;
                month += 12;
            }

            console.log(`The age is: Year: ${year}, Month: ${month}, Day: ${day}`);
            setYear(year);
            setMonth(month);
            setDay(day);
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
