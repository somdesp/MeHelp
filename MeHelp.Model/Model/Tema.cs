namespace MeHelp.Model
{
    public class Tema
    {
        public int Id { get; set; }
        public Usuario usuario { get; set; } = new Usuario();
        public string Nome { get; set; }

    }
}
