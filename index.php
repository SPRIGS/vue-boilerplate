<?php include('partials/header.php'); ?>

<div class="container" style="height: 100vh; display: flex; flex-flow: column wrap; justify-content: center;">
    <test-component class="text-center"></test-component>

    <h3>Getting started</h3>
    <p>Change the <code>browserSync('vue—boilerplate.test')</code> in <code>webpack.mix.js</code></p>

    <p>
        Read the mf manuals
        <ul class="list">
            <li>- <a href="https://laravel.com/docs/5.4/mix#running-mix" target="_blank">Laravel Mix</a></li>
            <li>- <a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
            <li>- <a href="https://github.com/axios/axios" target="_blank">Axios.js</a></li>
            <li>- <a href="https://github.com/typicode/json-server" target="_blank">Json-server</a></li>
        </ul>
    </p>

    <h4>Optional</h4>
    <p>
        Use <code>npm run watch-json</code> to start the json server<br>
        Edit <code>/api/db.js</code> to create new endpoints or use <code>/api/fakeList.js</code> as a reference.
    </p>
    <a href="http://localhost:3000/fakeList" target="_blank">http://localhost:3000/fakeList</a>
</div>


<?php include('partials/footer.php'); ?>