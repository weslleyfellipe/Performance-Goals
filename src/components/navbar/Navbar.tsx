import React from 'react';
import { Link } from 'react-router-dom';
import remediosLogo from '../../assets/farmacia.png'; // Caminho para a sua logo de remédios

function Navbar() {
    return (
        <div className="bg-indigo-900 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={remediosLogo}
                        alt="Logo de Remédios"
                        className="w-12 h-12 mr-2 object-contain"
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="text-2xl font-bold uppercase">Farmácia</div>
                </div>
                <div className="flex gap-4">
                    <Link
                        to="/categoria"
                        className="text-lg hover:underline hover:bg-indigo-800 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Categoria
                    </Link>
                    <Link
                        to="/home"
                        className="text-lg hover:underline hover:bg-indigo-800 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
