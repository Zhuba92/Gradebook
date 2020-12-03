$(document).ready(
    function ()
    {
        $("#submit").click(createGrade)

        function createGrade(event)
        {
            event.preventDefault();

            var grade = {};

            grade.firstName = $("#firstName").val();
            grade.lastName = $("#lastName").val();
            var pointsEarned = parseInt($("#pointsEarned").val());
            var pointsPossible = parseInt($("#pointsPossible").val());
            grade.percentage = Math.round((pointsEarned / pointsPossible) * 100);
            console.log(grade.percentage);

            if (grade.percentage > 90 && grade.percentage <= 100)
            {
                grade.letterGrade = "A";
            }
            else if (grade.percentage > 80 && grade.percentage <= 90)
            {
                grade.letterGrade = "B";
            }
            else if (grade.percentage > 70 && grade.percentage <= 80)
            {
                grade.letterGrade = "C";
            }
            else if (grade.percentage > 60 && grade.percentage <= 70)
            {
                grade.letterGrade = "D";
            }
            else
            {
                grade.letterGrade = "F";
            }

            for (var propName in grade)
            {
                $("#output").append(`${propName}: ${grade[propName]} <br>`);
            }
        }
    }
);