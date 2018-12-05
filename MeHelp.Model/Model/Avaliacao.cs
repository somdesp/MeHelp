namespace MeHelp.Model
{
    public class Avaliacao
    {
        public int idAvaliacao { get; set; }
        public int  idUsuario { get; set; }
        public int idTopico { get; set; }
        public int pontos { get; set; }
        public int mediaPontos { get; set; }
        public int contarLike { get; set; }
        public int contarDeslike { get; set; }
    }
}