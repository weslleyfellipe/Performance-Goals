import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/react.svg';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Conteúdo do lado esquerdo */}
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-5xl font-bold">Sejam Bem-Vindos!</h2>
                        <p className="text-xl text-gray-700">Farmácia da Gen</p>

                        <div className="flex gap-4">
                            <Link to="/categoria" className="rounded bg-indigo-900 text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">
                                Ver Categorias
                            </Link>
                            <Link to="/produtos" className="rounded bg-indigo-900 text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">
                                Ver Produtos
                            </Link>
                        </div>
                    </div>

                    {/* Imagem do lado direito */}
                    <div className="flex justify-center">
                        <img src={homeLogo} alt="Home Logo" className="w-2/3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
