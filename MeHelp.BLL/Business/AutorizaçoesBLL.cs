using MeHelp.DAO;
using MeHelp.Model;

namespace MeHelp.BLL
{
    public class AutorizaçoesBLL
    {
        AutorizaçoesDAO permisaoDao = new AutorizaçoesDAO();

        public Autorizaçoes ReturnAutPorID(Autorizaçoes auth)
        {
            return permisaoDao.ReturnAutPorID(auth);
        }

    }
}
