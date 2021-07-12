import React, { useMemo } from 'react'
import Select from './Select'

function Birthday({

}) {

    const days = useMemo(() => {
        const d = [];
        for (let i = 1; i < 32; i++) {
            d.push({ value: i });
        }
        return d;
    }, []);

    const months = useMemo(() => [
        { name: 'Jan', value: '1' },
        { name: 'Feb', value: '2' },
        { name: 'Mar', value: '3' },
        { name: 'Apr', value: '4' },
        { name: 'May', value: '5' },
        { name: 'Jun', value: '6' },
        { name: 'Jul', value: '7' },
        { name: 'Aug', value: '8' },
        { name: 'Sep', value: '9' },
        { name: 'Oct', value: '10' },
        { name: 'Nov', value: '11' },
        { name: 'Dec', value: '12' },
    ], []);

    const years = useMemo(() => {
        const d = [];
        for (let i = new Date().getFullYear(); i > 1899; i++) {
            d.push({ value: i });
        }
        return d;
    }, []);

    return (
        <div className="birthday">
            <div>
                <Select
                    searcheable={false}
                    label="Day"
                    data={days}
                    valueId="value"
                    valueLabel="value"
                />
                <Select
                    searcheable={false}
                    label="Month"
                    data={months}
                    valueId="value"
                    valueLabel="name" />
                <Select
                    searcheable={true}
                    label="Year"
                    data={years}
                    valueId="value"
                    valueLabel="name" />
            </div>
        </div>
    )
}

export default Birthday
