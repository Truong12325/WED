function animateQuestion(){
    var Wrong="<font color='red' size=3><B>W</B></font>"
    var Right="<font color='red' size=3><B>C</b></font>"
    var perfectScore="CONGRATULATIONS on getting a perfect Score!"
    var Score5090="Good Job!"
    var below50="Not so good!"



    var percent="100"

    if(document.forms[0].A1.checked){
        document.all.Wrong1.innerHTML=Right
        var subtract1=0
    }
    else{
        document.all.Wrong1.innerHTML=Wrong
        var subtract1=10
    }
    if(document.forms[0].A2.checked){
        document.all.Wrong2.innerHTML=Right
        var subtract2=0
    }
    else{
        document.all.Wrong2.innerHTML=Wrong
        var subtract2=10
    }
    if(document.forms[0].A3.checked){
        document.all.Wrong3.innerHTML=Right
        var subtract3=0
    }
    else{
        document.all.Wrong3.innerHTML=Wrong
        var subtract3=10
    }
    if(document.forms[0].A4.checked){
        document.all.Wrong4.innerHTML=Right
        var subtract4=0
    }
    else{
        document.all.Wrong4.innerHTML=Wrong
        var subtract4=10
    }
    if(document.forms[0].A5.checked){
        document.all.Wrong5.innerHTML=Right
        var subtract5=0
    }
    else{
        document.all.Wrong5.innerHTML=Wrong
        var subtract5=10
    }
    if(document.forms[0].A6.checked){
        document.all.Wrong6.innerHTML=Right
        var subtract6=0
    }
    else{
        document.all.Wrong6.innerHTML=Wrong
        var subtract6=10
    }

    if(document.forms[0].A7.checked){
        document.all.Wrong7.innerHTML=Right
        var subtract7=0
    }
    else{
        document.all.Wrong7.innerHTML=Wrong
        var subtract7=10
    }
    if(document.forms[0].A8.checked){
        document.all.Wrong8.innerHTML=Right
        var subtract8=0
    }
    else{
        document.all.Wrong8.innerHTML=Wrong
        var subtract8=10
    }
    if(document.forms[0].A9.checked){
        document.all.Wrong9.innerHTML=Right
        var subtract9=0
    }
    else{
        document.all.Wrong9.innerHTML=Wrong
        var subtract9=10
    }
    if(document.forms[0].A10.checked){
        document.all.Wrong10.innerHTML=Right
        var subtract10=0
    }
    else{
        document.all.Wrong10.innerHTML=Wrong
        var subtract10=10
    }

    var total=subtract1+subtract2+subtract3+subtract4+subtract5+subtract6+subtract7+subtract8+subtract9+subtract10
    c=100-total
    if(c==100){
        document.all.Percent.innerHTML="<b>Your Score is - " + c + "% - " + perfectScore
    }
    else if(c>=50 && c<=90){
        document.all.Percent.innerHTML="<b>Your Score is - " + c + "% - " + Score5090
    }else{
        document.all.Percent.innerHTML="<b>Your Score is - " + c + "% - " + below50
    }
    document.all.Percent.style.color="blue"


}