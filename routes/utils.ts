import type { SandboxRoutes } from "./types.ts";

/**
 * Rotas da página Utils (`post`, `response` e feedback nos campos), em `POST /sandbox-api/<rota>`.
 */
export const utilsRoutes: SandboxRoutes = {
    "/errors": {
        status: 422,
        delay: 300,
        body: () => ({
            errors: {
                name: ["O nome é obrigatório."],
                estado: ["Selecione um estado."],
                obs: ["A observação deve ter pelo menos 10 caracteres.", "Texto com <b>HTML</b> deve aparecer escapado."],
                cpf: ["CPF inválido."],
            },
        }),
    },
    "/success": {
        status: 200,
        delay: 300,
        body: token => ({
            data: { id: 1 },
            message: { type: "success", icon: "bi bi-check-circle", text: `Registro salvo (token: ${token}). <b>HTML escapado</b>` },
        }),
    },
    "/accept": {
        status: 200,
        delay: 300,
        body: () => ({ accept: { name: ["Nome disponível."], cpf: ["CPF válido."] } }),
    },
    "/slow": {
        status: 200,
        delay: 1500,
        body: () => ({ data: { slow: true } }),
    },
    // Modelos do backend com `field` (mesmo formato enviado pelos projetos)
    "/field-invalid": {
        status: 200,
        delay: 300,
        body: () => fieldModel("A senha informada está incorreta!", "is-invalid", false),
    },
    "/field-valid": {
        status: 200,
        delay: 300,
        body: () => fieldModel("Informe a senha para realizar o login!", "is-valid", false),
    },
    "/field-disabled": {
        status: 200,
        delay: 300,
        body: () => fieldModel("Muitas tentativas. Campo bloqueado.", "is-invalid", true),
    },
};

/**
 * Resposta do backend com `field` para o campo `password`.
 */
function fieldModel(message: string, messageType: string, disabled: boolean) {
    return {
        data: null,
        message: null,
        field: { field: "password", message: { password: [message] }, messageType, disabled },
        modal: null,
        redirect: null,
    };
}
