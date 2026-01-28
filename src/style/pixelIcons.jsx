import paths from "./paths.json";

// Função para renderizar os svgs dos icones em Pixel Art
function PixelIcons({ icon, ...props }) {
    // Verificando se o ícone existe
    const Icon = paths[icon];

    if (!Icon) {
        console.warn(`Ícone "${icon}" não encontrado.`);
        return null; // Retorna null se o ícone não for encontrado
    }

    return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d={Icon} fillRule="evenodd" />
            </svg>
    );
}

export default PixelIcons;
