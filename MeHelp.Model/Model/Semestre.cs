namespace MeHelp.Model
{
    public class Semestre
    {
        public int Id { get; set; }
        public string semestre { get; set; }
        public Curso Curso { get; set; } = new Curso();

    }
}
