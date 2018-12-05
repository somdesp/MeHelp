using MeHelp.DAO;
using MeHelp.Model;

namespace MeHelp.BLL
{
    public class ArquivoBLL
    {
        ArquivoDAO arquivoDao = new ArquivoDAO();

        public bool CadastroImagem(Anexos arquivo)
        {
            return arquivoDao.CadastroImagem(arquivo);
        }

        #region Carregar Imagem

        public Anexos RecuperarImagem(Anexos arquivo)
        {
            return arquivoDao.CarregarArquivo(arquivo);
        }

        #endregion
    }
}
