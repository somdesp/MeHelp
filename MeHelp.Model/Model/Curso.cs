using System.Collections.Generic;

namespace MeHelp.Model
{
    public class Curso
    {
        public int Id { get; set; }
        public string curso { get; set; }

        public ICollection<Semestre> Turma { get; set; }

    }
}
