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
package com.mhens.release.jovelha.content.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.mhens.release.jovelha.content.nucleo.JONMente;

@WebServlet(name = "JOMente", urlPatterns = {"/jomente"})
public class JOMente extends HttpServlet {

    protected void JOMente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (final PrintWriter saida = response.getWriter()) {

            try {

                System.out.println(request.getParameter("joch"));

                final byte[] jo_absorver = JONMente.jo_para_array_de_bytes(request.getParameter("joch"));

                final JONMente jnu = new JONMente(jo_absorver);

                short jo_marca = 0;
                for (short jo_contempla = 0; jo_contempla < 32; jo_contempla++) {
                    jo_marca = jnu.jo_retornar_posicao();
                }

                System.out.println("->" + String.valueOf(jo_marca));

                saida.print(jo_marca);
            } catch (Exception exc) {
                exc.printStackTrace();
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        this.JOMente(request, response);
    }

}
