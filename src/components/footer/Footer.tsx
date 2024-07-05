import React from 'react';
import { LinkedinLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react'; // Suponha que você tenha componentes de ícones separados

function Footer() {
    const data = new Date().getFullYear(); // Obtém o ano atual

    return (
        <div className="bg-indigo-900 text-white">
            <div className="container mx-auto py-4 flex flex-col items-center">
                <p className="text-xl font-bold mb-2">Farmácia Generation | Copyright: {data}</p>
                <p className="text-lg mb-4">Acesse nossas redes sociais</p>
                <div className="flex gap-4">
                    <LinkedinLogo size={48} weight="bold" />
                    <InstagramLogo size={48} weight="bold" />
                    <FacebookLogo size={48} weight="bold" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
