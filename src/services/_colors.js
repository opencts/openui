const _THEME_COLORS = {
    $primary: '#3f51b5',
    $secondary: '#735600',
    $dark: '#252f44',
    $darkgray: '#686c75',
    $gray: '#9b9ea3',
    $lightgray: '#e4e6eb',
    $light: '#f7f8fa',
    $success: '#00841D',
    $danger: '#AD320D'
};

export function reverseColor(color) {
    return ['gray', 'light-gray', 'light'].includes(color) ? 'dark' : 'light';
}

export default _THEME_COLORS;