using System;
using System.ComponentModel.DataAnnotations;


namespace MeHelp.Model
{
    public class Usuario 
    {
        /////////////////////////// ATRIBUTOS USUARIOS COM VALIDAÇOES DATAANNOTATIONS*************************
        ////////////////////////////////Formulario de Cadastro*************************
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Login { get; set; }

        [Required]
        [RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}", ErrorMessage = "Favor informe um e-mail válido")]
        public string Email { get; set; }



        [Required]
        public string RGM { get; set; }

        [Required]
        [DataType(DataType.Date)]

        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DataNasci { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 6, ErrorMessage = "A senha deve ter entre 6 e 10 caracteres.")]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
        public Avaliacao avaliacao { get; set; } = new Avaliacao();







        /////////////////////////////////Fim Forumalario de cadastro****************************



        /////////////////////////////////Relaçoes com Outras Classes******************************

        [Required]
        public Genero Sexo { get; set; } = new Genero();
        public Curso Curso { get; set; } = new Curso();
        public Semestre Semestre { get; set; } = new Semestre();
        public Autorizaçoes Auth { get; set; } = new Autorizaçoes();
        public Anexos UploadArquivo { get; set; } = new Anexos();

        /////////////////////Fim Relaçoes com Outras Classes************************************


        ////////////////////////Formulario de Login************************************************





        //LabelFor Usuarios

        //public string Curso { get; set; }
    }
}
