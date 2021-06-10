export const API_URL = 'http://localhost:4000';

export function userLogin(body) {
    return {
        url: API_URL + '/usuario/login',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}
export function updateState(token, body) {
    return {
        url: API_URL + '/usuario/update_state',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(body),
        },
    };
}
export function validarToken(token) {
    return {
        url: API_URL + '/token/validar_token',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function cursos(token) {
    return {
        url: API_URL + '/cursos',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function usuariosGet(token) {
    return {
        url: API_URL + '/usuarios',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function usuarioGet(token, body) {
    return {
        url: API_URL + '/usuario',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(body),
        },
    };
}

export function alunoInscrever(param, body) {
    return {
        url: API_URL + `/${param}/aluno/inscrever`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}
export function alunosGet() {
    return {
        url: API_URL + '/cursos',
        options: {
            method: 'Get'
        },
    };
}

export function alunosAll(token) {
    return {
        url: API_URL + '/alunos',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function getAllCursos() {
    return {
        url: API_URL + '/cursos',
        options: {
            method: 'Get'
        },
    };
}
