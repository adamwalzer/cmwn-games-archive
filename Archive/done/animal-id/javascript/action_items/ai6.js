 $(document).ready(function () {
        other_screen.play();

$('.nextBtn6').click(function () {
            $('.nextBtn6').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai7.html");
            });
            $('.modal-backdrop fade in').css('display','none');
            other_screen.play();
        });


        $('#next_btn').click(function () {

            btn_wrong.play();
        });

        $('#next_btn1').click(function () {

            btn_wrong.play();
        });

        $('#next_btn2').click(function () {

            btn_wrong.play();
        });

        $('#correct_btn').click(function () {

            btn_yes.play();
        });

        $('#dolphin1').click(function () {

            dolphin.play();
        });


        $('#dolphin1').click(function () {
            $('#retry-level').modal('show')
        });


        $("#Btn-hide").click(function () {
            $('#pop-up').modal('hide');

        });

        $("#Btn-hide1").click(function () {
            $('#pop-up').modal('hide');

        });

    })