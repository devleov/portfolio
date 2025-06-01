$(".section-experience-tec").each((index, element) => {
    const img = $("<img>").attr("src", `./img/tecs/tec-${index + 1}.png`).attr("alt", `Imagem ${index}`);

    element.append(img[0]);
})

/* Sistema do orçamento */

$("#budge-btn").on("click", () => {

    /* Pegando o nome do cliente do orçamento */
    const budge_name = $("#budge-name").val()

    /* Pegando a descrição do orçamento */
    const budge_desc = $("#budge-desc").val()

    /* Pegando o orçamento */
    const budge = $("#budge").val()

    /* Pegando o tipo do projeto do orçamento */
    const budge_project_type = $("#budge-project-type").val()

    /* Pegando o prazo do orçamento */
    const budge_time = $("#budge-time").val()

    /* Percorrer todos os inputs do campo de orçamento e adicionar a classe de campo inválido SE o campo estiver vazio */
    const inputs = $("#contact").find("input, textarea, select")

    /* Se o retorno dessa condição for 0, significa que o número de elementos dentro de `inputs` que não possuem a classe `is-valid` é 0, ou seja, todos estão preenchidos, e pode liberar o botão */
    if (inputs.length && $(inputs).filter(":not(.is-valid)").length === 0) {
        activeButton();
        return;
    }

    inputs.each((index, element) => {
        /* Se não tiver conteúdo adicionar aviso de inválido */
        if (!$(element).val()) {
            $(element).removeClass("is-valid");
            $(element).addClass("is-invalid");
        } else {
            $(element).addClass("is-valid");
            $(element).removeClass("is-invalid");
        }

        /* Se houver alteração no campo e se tiver conteúdo deve ficar verde */
        $(element).on("change", () => {
            if ($(element).val()) {
                $(element).removeClass("is-invalid");
                $(element).addClass("is-valid");
            }
        })
    })

    function activeButton() {
        /* Criando a mensagem */
        const url = "https://api.whatsapp.com/send/?phone=17981467337&text=" + encodeURIComponent(`Olá, meu nome é ${budge_name} 👋\n\nTipo do projeto: ${budge_project_type}\nOrçamento: ${budge}\nDescrição: ${budge_desc}\n\nPrazo: *${budge_time}*\nData: *${new Date().toLocaleDateString("pt-br")}*`);

        $("#budge-btn").attr("href", url);
    }
})