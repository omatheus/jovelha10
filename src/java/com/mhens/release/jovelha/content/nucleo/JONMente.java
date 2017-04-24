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
package com.mhens.release.jovelha.content.nucleo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public final class JONMente {

    private static byte[] jo_possibilidades = new byte[]{
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    };

    private static List<Short> jo_lista_marcados;

    public static final synchronized byte[] jo_para_array_de_bytes(final String x) {

        assert (!x.equals("") && x.contains("--"));

        final String[] jo_blocos = x.split("--");

        byte[] jo_resultado = new byte[jo_blocos.length];

        for (short jo_percorre = 0; jo_percorre < jo_resultado.length; jo_percorre++) {

            jo_resultado[jo_percorre] = Byte.parseByte(jo_blocos[jo_percorre]);

        }

        return jo_resultado;

    }

    private static synchronized void jo_preencher_slots(final byte[] jo_possiveis) {

        for (short jo_compr = 0; jo_compr < jo_possiveis.length; jo_compr++) {

            JONMente.jo_possibilidades[jo_compr] = jo_possiveis[jo_compr];

        }

    }

    private static synchronized void jo_analisar_slots() {

        JONMente.jo_lista_marcados = new ArrayList<Short>();
        for (short jo_compr = 0; jo_compr < JONMente.jo_possibilidades.length; jo_compr++) {

            if (JONMente.jo_possibilidades[jo_compr] == 0) {
                JONMente.jo_lista_marcados.add((short) jo_compr);
            }

        }

    }

    public synchronized short jo_retornar_posicao() {

        assert (JONMente.jo_lista_marcados != null && JONMente.jo_lista_marcados.size() >= 1);

        final int jo_selecionado = new Random().nextInt(((JONMente.jo_lista_marcados.size() - 1) - 0) + 0) + 1;

        return JONMente.jo_lista_marcados.get(jo_selecionado);

    }

    private final class JOMenteThread extends Thread {

        public JOMenteThread(final Runnable runnable) {

            super(runnable);

        }

    }

    public JONMente(final byte[] jo_possiveis) {

        new JOMenteThread(new Runnable() {
            @Override
            public void run() {
                try {
                    JONMente.jo_preencher_slots(jo_possiveis);
                    JONMente.jo_analisar_slots();

                    this.finalize();
                } catch (Throwable excecao_tr) {
                    excecao_tr.printStackTrace();
                }
            }
        }).run();

    }

}
