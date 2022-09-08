import Cookies from 'js-cookie';

export function isAuthenticated() {
    return !!Cookies.get('x-jwt-access-token')
}

export function getTokenDetails() {
    return {
        accessToken: Cookies.get('x-jwt-access-token'),
        refreshToken: Cookies.get('x-jwt-refresh-token'),
        expiresIn: Cookies.get('x-jwt-expires-at')
    }
}

export function getBearerToken() {
    return Cookies.get('x-jwt-access-token')

}

export function removeToken() {
    Cookies.remove("x-jwt-access-token");
    Cookies.remove("x-jwt-refresh-token");
    Cookies.remove("x-jwt-expires-at");
}

export function setToken({ accessToken, refreshToken, expiresAtStr }) {
    Cookies.set('x-jwt-access-token', accessToken),
        Cookies.set('x-jwt-refresh-token', refreshToken),
        Cookies.set('x-jwt-expires-at', expiresAtStr)

}