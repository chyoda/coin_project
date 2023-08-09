<?php


    require_once 'conector.php';

    function deletarDado($tipo,$idAlvo)
    {
        global $conexao;
        echo $idAlvo;
        echo "Função executada";
        mysqli_query($conexao, "DELETE FROM `user` WHERE 'id' = $idAlvo");
    }

    if (true) {
        $idAlvo = 12;
        global $conexao;

        $escapedLogin = mysqli_real_escape_string($conexao, $idAlvo);
        $id_existe = mysqli_query($conexao, "SELECT `id` FROM `user` WHERE `id` = $escapedLogin");
        var_dump($id_existe->num_rows);

        if ($id_existe->num_rows >= 1) {
            mysqli_query($conexao, "DELETE FROM `user` WHERE 'id' = 12");

        } elseif ($id_existe->num_rows == 0) {
            echo "Login disponível para cadastro.";
        }
    }
    else
    {
        header('HTTP/1.1 405 Method Not Allowed');
        exit();
    }


