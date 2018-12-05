using System;
using System.Collections.Generic;
using MeHelp.BLL;
using MeHelp.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MeHelp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TopicoAPIController : ControllerBase
    {
        public static Topico topicoSalva = new Topico();
        #region Listar Todos os Topicos
        public IEnumerable<Topico> ListarTopico()
        {
            TopicoBLL topicoBll = new TopicoBLL();
            return topicoBll.ListarTopico();
        }
        #endregion

        #region Topico escolhido
        [HttpGet]
        public Topico TopicoSelecionadoJson(string idtopico)
        {
            Topico topico = new Topico();
            topico.Id = Convert.ToInt32(idtopico);
            TopicoBLL topicoBll = new TopicoBLL();

            topico = topicoBll.DetalheTopico(topico);
            topicoSalva = topico;
            return topico;

        }
        #endregion
    }
}