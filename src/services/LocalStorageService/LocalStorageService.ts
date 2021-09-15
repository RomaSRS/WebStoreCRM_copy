export default class LocalStorageService {

    /* базовые методы */
    _get(itemName: string): any {
        const item: string | null = localStorage.getItem(itemName)

        if (item) {
            return JSON.parse(item)
        } else {
            return null
        }
    }

    _set(itemName: string, item: any): void {
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    _remove(itemName: string): void {
        localStorage.removeItem(itemName);
    }
    
    /* Token */
    setToken(token: string | number): void {
        this._set('token', token)
    }

    getToken(): string | number {
        return this._get('token')
    }

    /* User */
    setUser(user: {name: string, pass: string, age: number}): void {
        this._set('user', user)
    }

    getUser(): object {
        return this._get('user')
    }

    /* Localization */
    setLocalization(localization: string): void {
        this._set('localization', localization)
    }

    getLocalization(): string {
        return this._get('localization')
    }

}