export interface User {
    id: string,
    username: string
}

export interface UserSchema {
    authDate?: User
    _inited: boolean
}