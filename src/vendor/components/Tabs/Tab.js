import React, { Children, useCallback, useEffect, useState } from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

function Tab({
    color = 'primary',
    children
}) {

    const [headers, setHeaders] = useState([]);
    const cssDefault = 'bg-light-gray text-dark p-1 pl-3 pr-3';
    const cssCurrent = 'effect p-1 pl-3 pr-3 bg-' + color;
    const [loading, setLoading] = useState(true);

    function extractChildrenInfo() {
        const h = [];
        Children.map(children, child => {
            if ('title' in child.props) {
                h.push({ ...child.props, current: false });
            } else {
                console.error(`Missing attribute 'title' for 'TabItem'`);
            }
        });
        h[0].current = true;
        setHeaders(h);
        setLoading(false);
    }

    useEffect(() => {
        extractChildrenInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function changeCurrent(item) {
        const h = headers.map(it => {
            if (JSON.stringify(it) === JSON.stringify(item)) {
                it.current = true;
            } else {
                it.current = false;
            }
            return it;
        });
        setHeaders(h);
    }

    function renderHeaders() {
        return <Flex>
            {headers.map((h, index) => <div
                key={index}
                className={h.current ? cssCurrent : cssDefault}
                style={{ marginRight: '1px', cursor: 'pointer' }}
                onClick={_ => changeCurrent(h)}>
                <Flex key={index} ai="center" jc="center" gap={10}>
                    {h.icon && <Icon style={{ fontSize: '0.65rem' }} name={h.icon} />}
                    <div>{h.title}</div>
                </Flex>
            </div>)}
        </Flex>
    }

    const renderChild = useCallback(() => {
        const child = headers.find(it => it.current);
        return <div className="bg-light">
            <div className="p-2">
                {child.children}
            </div>
        </div>
    }, [headers]);

    if (loading) return null;

    return (
        <div className="mt-3 mb-3">
            {renderHeaders()}
            <div>
                {renderChild()}
            </div>
        </div>
    )
}

export default Tab
