<?php

function stripAccents($str) {
    $result = strtr(utf8_decode($str), utf8_decode('àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ'), 'aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY');
    $result = str_replace(" ","-",$result);
    return strtolower($result);

}

//    $search = $_REQUEST["search"];

    $index_filename = '../../content/posts/_index.json';
    $hash_filename  = '../../content/posts/_hash';
    $posts_filename = '../../content/posts/posts.json';
    $posts = [];

    //if file does not exists
    if(
        (!file_exists($index_filename)) ||
        (file_exists($index_filename) && file_get_contents($hash_filename) != hash_file('md5', $posts_filename))
    ){

        $json = file_get_contents("../../content/posts/posts.json");
        $json_string = json_decode($json, true);


        foreach($json_string as $post) {

            $markdown = file_get_contents("../../content/posts/" . $post['id'] . "." . $post['type']);

            $post['content'] = $markdown;
            $post['url'] = stripAccents($post['title']);

            array_push($posts, $post);
        }

        file_put_contents($index_filename, json_encode($posts , JSON_UNESCAPED_UNICODE));
        file_put_contents($hash_filename, hash_file('md5', $posts_filename));

        $result = "Não existe ou alteracoes não computadas! Arquivo sendo criado!";

    }elseif(file_exists($index_filename) && file_get_contents($hash_filename) == hash_file('md5', $posts_filename)){
        $result = "Já existe e está atualizado";
    }

    $posts = file_get_contents($index_filename);

//    echo json_encode($posts, JSON_UNESCAPED_UNICODE);
    echo $posts;

?>