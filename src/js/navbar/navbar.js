// navbar.js
function navbar(item_menu){
    const navbarElement = document.getElementById('navbar')

    function render(){
        const hashAtual = window.location.hash || item_menu[0]?.url

        navbarElement.innerHTML = `
            <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] flex items-center justify-around bg-white border-t border-gray-200 py-3">
                ${
                    item_menu
                        .filter(menu => menu.label !== "")
                        .map(item => {
                            const ativo = item.url === hashAtual
                            const cor = ativo ? "text-blue-600" : "text-gray-500"

                            return `
                                <a href="${item.url}" class="capitalize text-xs font-medium ${cor}">
                                    ${item.label}
                                </a>
                            `
                        })
                        .join('')
                }
            </nav>
        `
    }

    render()
    window.addEventListener("hashchange", render)
}

export { navbar }