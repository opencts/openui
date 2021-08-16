import React, { useEffect, useState } from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';
import Avatar from '../Tips/Avatar'
import Divider from './Divider';

function ListItem({
    avatar = false, // true | false
    avatarImg = '', // img url 
    avatarLetter = '', // avatar letter
    avatarSize = 40, // 40
    avatarColor = 'primary', // primary - secondary ...
    separatorAfter = false, // true | false
    separatorSize = '1',
    separatorColor = 'light-gray',
    actions = [], //  [ {icon: 'pencil', color: '', action: () => {...}} ]
    align = 'flex-start', // flex-start - center - flex-end
    actionsAlign = 'flex-end', // flex-start - center - flex-end
    children
}) {

    const [avatarOptions, setAvatarOptions] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Setting avatar options
        const options = {};
        if (avatar) {
            if (avatarImg !== '') options.img = avatarImg;
            if (avatarLetter !== '') options.letter = avatarLetter;
            options.color = avatarColor;
            options.size = avatarSize;
        }
        setAvatarOptions(options);
        setLoading(false);
    }, [avatar, avatarColor, avatarImg, avatarLetter, avatarSize]);

    function renderActions() {
        if (actions.length === 0) return '';
        return <Flex ai="center" gap={10}>
            {actions.map((item, index) => <Icon
                key={index}
                name={item.icon}
                color={item.color ? item.color : 'primary'}
                onClick={item.action} />)}
        </Flex>
    }

    if (loading) return null;

    return (
        <div className="p-1">
            <Flex ai={align} gap={20} jc="space-between">
                {avatar && <Avatar {...avatarOptions} />}
                <div style={{ width: '100%' }}>
                    <Flex ai="center" jc="space-between">
                        {children}
                        {actions.length > 0 && <div className="mr-2 ml-1">
                            {renderActions()}
                        </div>}
                    </Flex>
                    {separatorAfter && <Divider size={separatorSize} color={separatorColor} />}
                </div>
            </Flex>
        </div>
    )
}

export default ListItem
