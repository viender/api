<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    @if(\Agent::isDesktop())
        <link rel="stylesheet" href={{ mix('css/core.css') }}>
    @else
        <link rel="stylesheet" href={{ mix('css/core-mobile.css') }}>
    @endif
</head>
<body>
    <div id="app" class="main-content">
        <header role="header">

        </header>

        <main role="main">
            @yield('content')
        </main>
    </div>
</body>
</html>
