/*
 Copyright 2017 (C) Matheus H. Silva
 
 Redistribution and use in source and binary forms, with or 
 without modification, are permitted provided that the following 
 conditions are met:
 
 1. Redistributions of source code must retain the above 
 copyright notice, this list of conditions and the following 
 disclaimer.
 
 2. Redistributions in binary form must reproduce the above 
 copyright notice, this list of conditions and the following 
 disclaimer in the documentation and/or other materials provided 
 with the distribution.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
 CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR 
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT 
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
 HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR 
 OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function
        JOato()
{
}


JOato.prototype.enviar =
        function
                ()
        {

            var jo_acumular = "";
            var jota = 1;
            var jo_nome = "";

            for (var jovai = 0; jovai < 9; jovai++)
            {

                if (jota > 3)
                    jota = 1;



                if (jovai <= 2)
                {

                    jo_nome = "JA" + jota;

                    if ($("#" + jo_nome).text() == "?")
                    {

                        jo_acumular += "0" + "--";

                    } else
                    {
                        jo_acumular += "1" + "--";
                    }

                } else if (jovai > 2 && jovai <= 5)
                {

                    jo_nome = "JB" + jota;

                    if ($("#" + jo_nome).text() == "?")
                    {

                        jo_acumular += "0" + "--";

                    } else
                    {
                        jo_acumular += "1" + "--";
                    }


                } else if (jovai > 5)
                {

                    jo_nome = "JC" + jota;

                    if ($("#" + jo_nome).text() == "?")
                    {

                        jo_acumular += "0" + "--";

                    } else
                    {
                        jo_acumular += "1" + "--";
                    }

                }
                jota += 1;


            }


            return jo_acumular;
        }


//()()()()()()()()()()()()()()()()()()()

JOato.prototype.sync_a =
        function
                (parametro)
        {


            $.get("jomente?joch=" + parametro, function (retorno)
            {

                switch (parseInt(retorno))
                {

                    case 0:
                        {
                            $("#JA1").text("X");
                        }
                        break;
                    case 1:
                        {
                            $("#JA2").text("X");
                        }
                        break;
                    case 2:
                        {
                            $("#JA3").text("X");
                        }
                        break;
                    case 3:
                        {
                            $("#JB1").text("X");
                        }
                        break;
                    case 4:
                        {
                            $("#JB2").text("X");
                        }
                        break;
                    case 5:
                        {
                            $("#JB3").text("X");
                        }
                        break;
                    case 6:
                        {
                            $("#JC1").text("X");
                        }
                        break;
                    case 7:
                        {
                            $("#JC2").text("X");
                        }
                        break;
                    case 8:
                        {
                            $("#JC3").text("X");
                        }
                        break;

                }
            });


        }


//()()()()()()()()()()()()()()()()()()()

JOato.prototype.fim =
        function
                ()
        {

            if
                    ($("#JA1").text() == "O"
                            && $("#JA2").text() == "O"
                            && $("#JA3").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA1").text() == "X"
                            && $("#JA2").text() == "X"
                            && $("#JA3").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JB1").text() == "O"
                            && $("#JB2").text() == "O"
                            && $("#JB3").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JB1").text() == "X"
                            && $("#JB2").text() == "X"
                            && $("#JB3").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JC1").text() == "O"
                            && $("#JC2").text() == "O"
                            && $("#JC3").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JC1").text() == "X"
                            && $("#JC2").text() == "X"
                            && $("#JC3").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA1").text() == "O"
                            && $("#JB1").text() == "O"
                            && $("#JC1").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA1").text() == "X"
                            && $("#JB1").text() == "X"
                            && $("#JC1").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA2").text() == "O"
                            && $("#JB2").text() == "O"
                            && $("#JC2").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA2").text() == "X"
                            && $("#JB2").text() == "X"
                            && $("#JC2").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA3").text() == "O"
                            && $("#JB3").text() == "O"
                            && $("#JC3").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA3").text() == "X"
                            && $("#JB3").text() == "X"
                            && $("#JC3").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA1").text() == "O"
                            && $("#JB2").text() == "O"
                            && $("#JC3").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA1").text() == "X"
                            && $("#JB2").text() == "X"
                            && $("#JC3").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA3").text() == "O"
                            && $("#JB2").text() == "O"
                            && $("#JC1").text() == "O"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("O jogador venceu!");
                $("#josection2").fadeIn();

            } else if
                    ($("#JA3").text() == "X"
                            && $("#JB2").text() == "X"
                            && $("#JC1").text() == "X"
                            )
            {
                $("#josection1").addClass("desabilitar");
                $("#jocaixa").text("A CPU venceu!");
                $("#josection2").fadeIn();

            }


        }


//()()()()()()()()()()()()()()()()()()()


JOato.prototype.gatilho =
        function
                ()
        {


            $(document).ready(function () {


                //++A1
                $("#JA1").click(
                        function ()
                        {


                            $("#JA1").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());

                        }
                );

                //++A2
                $("#JA2").click(
                        function ()
                        {


                            $("#JA2").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());

                        }
                );

                //++A3
                $("#JA3").click(
                        function ()
                        {


                            $("#JA3").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++B1
                $("#JB1").click(
                        function ()
                        {


                            $("#JB1").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++B2
                $("#JB2").click(
                        function ()
                        {


                            $("#JB2").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++B3
                $("#JB3").click(
                        function ()
                        {


                            $("#JB3").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++C1
                $("#JC1").click(
                        function ()
                        {


                            $("#JC1").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++C2
                $("#JC2").click(
                        function ()
                        {


                            $("#JC2").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );

                //++C3
                $("#JC3").click(
                        function ()
                        {


                            $("#JC3").text("O");
                            JOato.prototype.sync_a
                                    (JOato.prototype.enviar());
                        }
                );


            });


        };



//--


var joato = new JOato();

joato.gatilho();



var intervalo = window.setInterval(joato.fim, 64);






