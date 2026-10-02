import { Lightbox } from "@orangesix/react/lightbox";

const photo = (id: number, title: string) => `<img src="https://picsum.photos/id/${id}/1200/800" alt="${title}" title="${title}" width="240">`;
const html = [
    photo(1015, "Rio entre montanhas"),
    photo(1018, "Montanhas ao amanhecer"),
    photo(1039, "Cachoeira na floresta"),
    photo(1043, "Lago ao entardecer"),
].join("");

/**
 * Módulo (Sandbox) - Galeria de imagens do Lightbox
 */
export function LightboxStage() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <Lightbox html={html}/>
        </section>
    );
}

LightboxStage.displayName = "LightboxStage";
