const g1=document.getElementById('g1')
const g2=document.getElementById('g2')
const g3=document.getElementById('g3')
const g4=document.getElementById('g4')
const g5=document.getElementById('g5')
const g6=document.getElementById('g6')
const g7=document.getElementById('g7')
const g8=document.getElementById('g8')
const submit=document.getElementById('btn')
const result=document.getElementById('output')



courses=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
units=[2,2,2,1,0,3,2,1]
grades2=[70,70,70,70,70,70,70,70]


submit.onclick= chck
function chck(){
    grades=[g1.value,g2.value,g3.value,g4.value,g5.value,g6.value,g7.value,g8.value]

    score_unit=grades.map((x)=>x>70?5:x>60?4:x>50?3:x>40?2:1)
    console.log(score_unit)

    let tcu=0;
    for(let i of units){
        tcu+=i
    }
    console.log(tcu)
    tgp=0
    for (k=0;k<score_unit.length;k++){
        gp=units[k]*score_unit[k]
        tgp+=gp
    }
    console.log(tgp)

    let gpa=tgp/tcu
    console.log(gpa)
    output.value=gpa
    console.log(typeof gpa)
    console.log(typeof toString(gpa))

    localStorage.setItem('gpaa',JSON.stringify({nm:'dfdfd',val:gpa}))

    
}









