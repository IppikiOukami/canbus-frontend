export function authn(props){
    localStorage.clear();
    if(!props || props === ''){
        return false;
    }
    localStorage.setItem('user-initials',props);
    return true;
}