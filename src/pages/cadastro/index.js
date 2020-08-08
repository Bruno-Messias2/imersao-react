import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/PageDefault';

function CadastroVideo() {
  return (
    <Template>
      <h1>Pagina de Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </Template>
  );
}

export default CadastroVideo;
