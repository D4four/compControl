$(function() {

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data("collapse")
        
        $this.toggleClass("active")
    })

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    })

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        }
    })

}) 