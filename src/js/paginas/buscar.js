// buscar.js
import produtos from '../dadosMockados/produtos.js'

function buscar(app){
    app.innerHTML = `
        <div class="min-h-dvh bg-gray-100 p-3">
            <div class="flex flex-col gap-6 bg-white rounded-3xl shadow-sm p-5 pb-20">

                <header class="flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <span class="text-blue-600">◎</span>
                    <span>Radar de Promoções</span>
                </header>

                <div class="flex flex-col gap-3">
                    <h2 class="text-2xl font-bold text-gray-900 leading-snug">
                        O que você quer comprar mais barato?
                    </h2>

                    <div class="flex h-12">
                        <input
                            type="text"
                            id="input-busca"
                            placeholder="Produto ou marca"
                            aria-label="campo busca de produto"
                            class="flex-1 h-full px-4 border border-gray-300 rounded-l-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
                        >
                        <button
                            id="btn-busca"
                            aria-label="Buscar"
                            class="w-12 h-full flex items-center justify-center bg-red-600 text-white rounded-r-xl text-lg font-semibold"
                        >
                            →
                        </button>
                    </div>

                    <p class="text-xs text-gray-500 leading-relaxed">
                        Preços da semana de 10 a 16 de agosto, enviados por quem está no mercado.
                    </p>
                </div>

                <div class="flex flex-col gap-3">
                    <p class="text-sm font-semibold text-gray-900">Categorias</p>
                    <ul class="grid grid-cols-2 gap-2">
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Mercearia
                        </li>
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Carnes
                        </li>
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Hortifrúti
                        </li>
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Bebidas
                        </li>
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Limpeza
                        </li>
                        <li class="lista-categoria py-3 px-4 border border-gray-300 rounded-xl text-sm text-gray-900 cursor-pointer hover:border-blue-600">
                            Higiene
                        </li>
                    </ul>
                </div>

                <div class="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
                    <p class="text-sm text-gray-500">Viu uma promoção no mercado?</p>
                    <button id="btn-entrar" class="px-4 py-2 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900">
                        Entrar
                    </button>
                </div>

            </div>
        </div>
    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botaoBusca = document.getElementById("btn-busca")
    const listaCategoria = document.querySelectorAll(".lista-categoria")

    botaoBusca.addEventListener("click", () => {
        produtos.pagina(app)
    })

    listaCategoria.forEach(item => item.addEventListener("click", () => {
        produtos.pagina(app)
    }))
}

export default {
    url: "#buscar",
    label: "buscar",
    icon: "search",
    pagina: buscar
}