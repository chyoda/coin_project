<?php

    require_once __DIR__.'\conector.php';

    $dadosDecodificados = json_decode($dadosJson, true);

    // if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //     $id = $_POST['id'];
    //     $login = $_POST['login'];
    // }

    echo var_dump($dadosDecodificados);

    $id = 9;

    if ($dadosDecodificados !== null) {
        foreach ($dadosDecodificados as $index=>$dado) {
            if ($id == $dado['id']){
                if (isset($dadosDecodificados[$index])) {
                    unset($dadosDecodificados[$index]);
                }
                ;
            };
            
        }
    } else {
        echo "Erro ao decodificar JSON.";
    }

    echo var_dump($dadosDecodificados);