(function () {
    // Código para inicializar o carousel
    var radios = document.querySelectorAll('input[name="position"]');
    var items = document.querySelectorAll('#carousel .item');

    radios.forEach(function (radio, index) {
        radio.addEventListener('change', function () {
            // Esconder todos os itens
            items.forEach(function (item) {
                item.style.display = 'none';
            });

            // Mostrar o item correspondente ao radio selecionado
            items[index].style.display = 'block';
        });
    });
})();
(function () {
    var radios = document.querySelectorAll('input[name="position"]');
    var carousel = document.querySelector('#carousel');

    radios.forEach(function (radio, index) {
        radio.addEventListener('change', function () {
            carousel.style.setProperty('--position', index + 1);
        });
    });
})();

