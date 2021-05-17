$(document).ready(function () {

    $('#btn').click(function () {

        let note1 = $('#note1').val();
        let note2 = $('#note2').val();
        let note3 = $('#note3').val();
        let note4 = $('#note4').val();
        let note5 = $('#note5').val();



        let average = (parseInt(note1) + parseInt(note2) + parseInt(note3) + parseInt(note4) + parseInt(note5)) / 5;

        if (note1 && note2 && note3 && note4 && note5 && note1 >= 0 && note1 <= 20 && note2 >= 0 && note2 <= 20 && note3 >= 0 && note3 <= 20 && note4 >= 0 && note4 <= 20 && note5 >= 0 && note5 <= 20) {

            if (average >= 0 && average < 10) {

                alert('Moyenne :' + ' ' +
                    average + '\n' +
                    'Tu es en dessous de la moyenne')

            } else if (average >= 10 && average < 13) {

                alert('Moyenne :' + ' ' +
                    average + '\n' + +'Moyen')

            } else if (average >= 13 && average < 16) {

                alert('Moyenne :' + ' ' +
                    average + '\n' + 'Bien')

            } else if (average >= 16 && average < 20) {

                alert(average + ' ' +
                    'Très bien')

            } else if (average === 20) {

                alert('Moyenne :' + ' ' +
                    average + '\n' + 'Excellent')
            }
        } else {

            alert('Entrer un nombre en 0 et 20')
        }

    })
})
