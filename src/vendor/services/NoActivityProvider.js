import React, { createContext, useContext, useEffect, useState } from 'react'
import NoActivity from '../components/Dialogs/NoActivity';

const NoActivityContext = createContext();

export const useNoActivity = () => useContext(NoActivityContext)

function NoActivityProvider({
    children
}) {

    const [timeoutCount, setTimeoutCount] = useState(0);
    const [timeOutValue, setTimeOutValue] = useState(5);

    useEffect(() => {
        const resetTimoutCount = (e) => {
            setTimeoutCount(0);
        };

        let interval = setInterval(() => {
            setTimeoutCount(timeoutCount => timeoutCount + 1);
        }, 1000);

        window.addEventListener('keydown', resetTimoutCount);
        window.addEventListener('mousemove', resetTimoutCount);


        changeTimeOutValue('5m');

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', resetTimoutCount);
            window.removeEventListener('mousemove', resetTimoutCount);
        }
    }, []);

    const changeTimeOutValue = newValue => {
        const chunk = String(newValue).split('');
        const unit = chunk.pop();
        const value = Number(chunk.join(''));
        switch (unit) {
            case 's':
                setTimeOutValue(value);
                break;
            case 'm':
                setTimeOutValue(value * 60);
                break;
            case 'h':
                setTimeOutValue(value * 60 * 60);
                break;
            case 'd':
                setTimeOutValue(value * 60 * 60 * 24);
                break;
            case 'w':
                setTimeOutValue(value * 60 * 60 * 24 * 7);
                break;
            case 'y':
                setTimeOutValue(value * 60 * 60 * 24 * 365);
                break;
            default:
                setTimeOutValue(value);
                break;
        }
    };

    return (
        <NoActivityContext.Provider value={{
            changeTimeOutValue
        }}>
            {timeoutCount > timeOutValue ? <NoActivity /> : children}
        </NoActivityContext.Provider>
    )
}

export default NoActivityProvider
