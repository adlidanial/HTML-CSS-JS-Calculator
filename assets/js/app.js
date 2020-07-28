var display = '';
var number = 0;


function cal(num)
{
    if(document.getElementById("shownumber").value != '')
    {
        var val = document.getElementById("shownumber").value;

        if(num == '+')
        {
            display = val + ' + ';
            document.getElementById("shownumber").value = display;
            var plus = 1;
        }

        if(num == 'x')
        {
            display = val + ' x ';
            document.getElementById("shownumber").value = display;
            var plus = 1;
        }

        if(num == '-')
        {
            display = val + ' - ';
            document.getElementById("shownumber").value = display;
            var plus = 1;
        }

        if(num == '/')
        {
            display = val + ' / ';
            document.getElementById("shownumber").value = display;
            var plus = 1;
        }

        if(num == '.')
        {
            display = val + '.';
            document.getElementById("shownumber").value = display;
            var plus = 1;
        }

        if(num >= 0 && num <= 9)
        {
            display = display + num;
            document.getElementById("shownumber").value = display;
        }
    }
    else if(num >= 0 && num <= 9)
    {
        display = display + num;
        document.getElementById("shownumber").value = display;
    } 
}

function clr()
{
    document.getElementById("shownumber").value = "";
    display = '';
}

function total()
{
    let result = document.getElementById("shownumber").value;
    let answer = eval(result);
    document.getElementById("shownumber").value = answer;
}
