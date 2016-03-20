requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        phoenixPage: 'e2e-spec/page-objects/phoenixPage'
    }
});

// Start the main app logic.
requirejs(['phoenixPage'],
function (phoenixPage) {
    console.log(phoenixPage);
});
