// produtos.js
import listaDeProdutos from "../../dadosMockados/dados"

let ordenacaoAtual = "preco"

function formatarPreco(valor){
    return valor.toFixed(2).replace('.', ',')
}

function formatarDistancia(metros){
    if (metros < 1000) {
        return `${metros} m`
    }
    return `${(metros / 1000).toFixed(1).replace('.', ',')} km`
}

function ordenarLista(lista, criterio){
    const copia = [...lista]
    if (criterio === "preco") {
        copia.sort((a, b) => a.preco - b.preco)
    } else {
        copia.sort((a, b) => a.distancia - b.distancia)
    }
    return copia
}

function produtos(app) {
    const listaOrdenada = ordenarLista(listaDeProdutos, ordenacaoAtual)

    app.innerHTML = `
        <div class="min-h-dvh bg-gray-100 p-3">
            <div class="flex flex-col gap-4 bg-white rounded-3xl shadow-sm p-5 pb-20">

                <div class="flex items-center gap-3">
                    <button id="btn-voltar" aria-label="Voltar" class="text-xl text-gray-900">
                        ‹
                    </button>
                    <input
                        type="text"
                        id="input-busca-produtos"
                        value="café"
                        aria-label="campo busca de produto"
                        class="flex-1 h-11 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-blue-600"
                    >
                </div>

                <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-500">${listaOrdenada.length} produtos</p>

                    <div class="flex gap-2">
                        <button
                            id="filtro-preco"
                            class="px-3 py-1.5 rounded-full text-xs font-medium border ${ordenacaoAtual === "preco" ? "bg-blue-50 border-blue-600 text-blue-600" : "border-gray-300 text-gray-700"}"
                        >
                            Preço
                        </button>
                        <button
                            id="filtro-distancia"
                            class="px-3 py-1.5 rounded-full text-xs font-medium border ${ordenacaoAtual === "distancia" ? "bg-blue-50 border-blue-600 text-blue-600" : "border-gray-300 text-gray-700"}"
                        >
                            Distância
                        </button>
                    </div>
                </div>

                <ul class="flex flex-col gap-2">
                    ${
                        listaOrdenada.map(item => `
                            <li class="flex gap-3 p-3 border border-gray-200 rounded-xl">
                                <img
                                    src="${item.img}"
                                    alt="${item.nome}"
                                    class="w-16 h-16 shrink-0 bg-gray-100 rounded-lg object-cover"
                                    onerror="this.onerror=null; this.replaceWith(Object.assign(document.createElement('div'), { className: 'w-16 h-16 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] text-gray-400 text-center leading-tight', innerHTML: 'foto<br>produto' }))"
                                >
                                <div class="flex-1 flex items-center justify-between gap-2">
                                    <div class="flex flex-col gap-1">
                                        <p class="text-sm font-semibold text-gray-900 capitalize">${item.nome}</p>
                                        <p class="text-xs text-gray-500">${formatarDistancia(item.distancia)}</p>
                                    </div>
                                    <p class="text-base font-bold text-red-600 whitespace-nowrap">R$ ${formatarPreco(item.preco)}</p>
                                </div>
                            </li>
                        `).join('')
                    }
                </ul>

            </div>
        </div>
    `
    window.location.hash = "#produtos"
    adicionarEventoProdutos(app)
}

function adicionarEventoProdutos(app){
    const btnVoltar = document.getElementById("btn-voltar")
    const filtroPreco = document.getElementById("filtro-preco")
    const filtroDistancia = document.getElementById("filtro-distancia")

    btnVoltar.addEventListener("click", () => {
        window.location.hash = "#buscar"
    })

    filtroPreco.addEventListener("click", () => {
        ordenacaoAtual = "preco"
        produtos(app)
    })

    filtroDistancia.addEventListener("click", () => {
        ordenacaoAtual = "distancia"
        produtos(app)
    })
}

export default {
    url: "#produtos",
    label: "",
    icon: "shopping-basket",
    pagina: produtos
}   