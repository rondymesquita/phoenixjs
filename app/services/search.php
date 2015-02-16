<?php
//    $search = $_REQUEST["search"];

    $index_filename = '../../content/posts/index.json';
    $hash_filename = '../../content/posts/hash.txt';
    $posts = [];

    //if file does not exists
    if(
        (!file_exists($index_filename)) ||
        (file_exists($index_filename) && file_get_contents($hash_filename) != hash_file('md5', $index_filename))
    ){

        $json = file_get_contents("../../content/posts/posts.json");
        $json_string = json_decode($json, true);


        foreach($json_string as $post) {

            $markdown = file_get_contents("../../content/posts/" . $post['id'] . "." . $post['type']);

            $post['content'] = $markdown;

            array_push($posts, $post);
        }

        file_put_contents($index_filename, json_encode($posts,JSON_UNESCAPED_UNICODE));
        file_put_contents($hash_filename, hash_file('md5', $index_filename));

        $result = "Não existe ou alteracoes não computadas";

    }elseif(file_exists($index_filename) && file_get_contents($hash_filename) == hash_file('md5', $index_filename)){
        $result = "Já existe e está atualizado";
    }

    $posts = file_get_contents($index_filename);
    echo $posts;

?>