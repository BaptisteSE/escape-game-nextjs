export default function Layout({children}){
    return(
        <>
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Accueil</a>
                <a href="/scenarios" class="text-sm font-semibold leading-6 text-gray-900">Les scénarios</a>
                <a href="/faq" class="text-sm font-semibold leading-6 text-gray-900">FAQ</a>
            </nav>
            <main>
                {children}
            </main>

            <footer></footer>
        </>
    )
}