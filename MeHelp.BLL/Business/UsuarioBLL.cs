﻿using MeHelp.DAO;
using MeHelp.Model;

namespace MeHelp.BLL
{
    public class UsuarioBLL
    {

        UsuarioDAO daoUsuario = new UsuarioDAO();
        ArquivoBLL arquivoDao = new ArquivoBLL();
        AutorizaçoesBLL permissaoBll = new AutorizaçoesBLL();

        #region Inativar Usuario
        public bool InativarUsuario(Usuario usuario)
        {
            return daoUsuario.InativarUsuario(usuario);
        }
        #endregion

        #region Adicionar Usuario
        public bool AdicionarUsuario(Usuario usuario)
        {
            arquivoDao.CadastroImagem(usuario.UploadArquivo);
            return daoUsuario.AdicionarUsuario(usuario);

        }
        #endregion

        #region Atualiza Usuario
        public bool AtualizarUsuario(Usuario usuario)
        {
            return daoUsuario.AtualizarUsuario(usuario);
        }
        #endregion

        #region Listar Usuarios

        //public List<Usuario> ListarUsuarios()
        //{
        //    List<Usuario> usuarios = new List<Usuario>();
        //    usuarios = daoUsuario.ListarUsuarios();

        //    for (int i = 0; i < usuarios.Count(); i++)
        //    {
        //        //usuarios[i].Sexo = daoUsuario.ConsultaUsuarioInt(usuarios[i].Sexo.Id);
        //        //usuarios[i].Semestre = daoTema.ListarTemaTopico(usuarios[i].Tema.Id);
        //        //usuarios[i].Curso = daoTema.ListarTemaTopico(usuarios[i].Tema.Id);
        //    }


        //}

        #endregion

        #region Consulta Usuario ID

        public Usuario ConsultaUsuarioInt(Usuario UsuarioId)
        {
            Usuario usuario = new Usuario();
            usuario = daoUsuario.ConsultaUsuarioInt(UsuarioId);
            usuario.UploadArquivo = arquivoDao.RecuperarImagem(usuario.UploadArquivo);
            usuario.Auth = permissaoBll.ReturnAutPorID(usuario.Auth);
            return usuario;
        }


        #endregion




    }

}
