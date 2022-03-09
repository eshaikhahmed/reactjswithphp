<?php 
$user = (object) [
    'name' => 'Jane Doe',
    'email' => 'janedoe@gmail.com',
    'logged' => true
];

?>
<!doctype html>
<html lang="en">
    <head>
        <title>React PHP starter Kit</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="src/App.css" type="text/css">
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    </head>
    <script type="text/javascript">
        var myApp = {
            user : <?php echo json_encode($user); ?>,
            logged : <?php echo $user->logged; ?>
        };
    </script>
    <body>

        <div id="app"></div>

        <script type="text/javascript" src="public/dist/main.js" ></script>

    </body>
</html>