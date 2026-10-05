export const utilsProps = [
    { name: "post(route, body, form?, options?)", type: "Promise", description: "POST com axios em BASE + route. Limpa o feedback do form, resolve com o corpo da resposta e chama response(). No erro, chama response() e rejeita com o erro do axios." },
    { name: "options.blockedToManyRequest", type: "boolean", description: "Rejeita com \"Requisições bloqueadas!\" enquanto houver outra requisição para a mesma URL." },
    { name: "options.blockedResponse / options.url", type: "boolean / string", description: "Não chama response() no sucesso / substitui a URL montada a partir da meta react-base." },
    { name: "options.messageLibrary", type: "\"snackbar\" | \"sweetAlert\"", description: "Biblioteca do message da resposta. Padrão \"snackbar\"; \"sweetAlert\" mostra um toast no canto com o mesmo card." },
    { name: "response(data, form?, library?)", type: "função", description: "Trata redirect, errors (campos inválidos), accept (campos válidos), field e message (snackbar ou toast do SweetAlert, conforme library)." },
    { name: "response.field", type: "{ field, message, messageType, disabled? }", description: "Mensagem no campo conforme messageType (is-invalid em vermelho, is-valid em verde). disabled: true desabilita o campo; false reabilita só o que o response() desabilitou." },
    { name: "messageField / messageFieldClear", type: "função", description: "Escreve ou limpa o feedback dos campos do form: padrão 3.x ({name}-feedback) e 2.x (#j_feedback). Destaca a aba não selecionada que contém o erro." },
    { name: "message / sendMessage / windowMessageEvent", type: "função", description: "Exibe snackbar ou SweetAlert. Dentro de um iframe, sendMessage envia para a janela pai, que precisa registrar windowMessageEvent()." },
] as const;
