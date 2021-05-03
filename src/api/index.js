export const API_URL = 'http://localhost:4000';

export function TOKEN_POST(body) {
    return {
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function TOKEN_VALIDATE_POST(token) {
    return {
        url: API_URL + '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function USER_GET(token) {
    return {
        url: API_URL + '/api/user',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
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
export function getAllCursos() {
    return {
        url: API_URL + '/cursos',
        options: {
            method: 'Get'
        },
    };
}
