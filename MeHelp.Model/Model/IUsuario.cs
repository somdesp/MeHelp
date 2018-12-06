using System;
using System.Collections.Generic;
using System.Text;

namespace MeHelp.Model.Model
{
    public interface IUsuario
    {
        LoginViewModel Authenticate(string username, string password);
    }
}
