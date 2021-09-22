import React, { createContext, useContext, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const FontContext = createContext();

export const useFont = () => useContext(FontContext);

const _FONTS_LIST = [
    'Montserrat',
    'Noto Sans',
    'Noto Serif',
    'Open Sans',
    'Roboto',
    'Ubuntu',
    'Tenor'
];

function FontProvider({ children }) {

    const { localValue, putLocalValue } = useLocalStorage('__oui__font__');
    const [font, setFont] = useState(localValue ? localValue : _FONTS_LIST[6]);
    const fontClassName = useMemo(() => font.toLowerCase().split(' ').join('-'), [font]);

    function changeFont(value) {
        putLocalValue(value);
        setFont(value);
    }

    const getFontIndex = useMemo(() => _FONTS_LIST.findIndex(it => it === font), [font]);

    return (
        <FontContext.Provider value={{
            setFont: changeFont,
            fonts: [..._FONTS_LIST],
            currentFont: font,
            currentFontIndex: getFontIndex
        }}>
            <div className={fontClassName}>
                {children}
            </div>
        </FontContext.Provider>
    )
}

export default FontProvider
