export default {
    state: {
        api_token: null,
        name: null,
        role: null,
    },
    initialize() {
        this.state.api_token = localStorage.getItem('api_token');
        this.state.name = localStorage.getItem('name');
        this.state.role = localStorage.getItem('role');
    },
    set(api_token, name, role) {
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        this.initialize()
    },
    remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        this.initialize()
    }
}