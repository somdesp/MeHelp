using MeHelp.DAO;
using MeHelp.Model;

namespace MeHelp.BLL
{
    public class LoginBLL
    {
        LoginDAO loginDao = new LoginDAO();
        AutorizaçoesDAO autorizaçoesDao = new AutorizaçoesDAO();
        ArquivoDAO arquivoDao = new ArquivoDAO();

        public LoginViewModel LoginUsuario(LoginViewModel model)
        {

            model = loginDao.Login(model);

            if ((model.Permissao.Id == 4) || (model.Nome == null))
            {
                model.success = false;
            }
            else
            {
                model.Permissao = autorizaçoesDao.ReturnAutPorID(model.Permissao);
                model.UploadArquivo = arquivoDao.CarregarArquivo(model.UploadArquivo);
                model.success = true;
            }

            return model;

        }
    }
}
