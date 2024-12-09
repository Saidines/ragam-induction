
fetch('data.json')
.then(response=>response.json())

.then(data=>{

    const wo = data.find(item => item.title === 'Work');
})

function changer(t,k){
   let wc= document.querySelector(".work .current");
   let wp=document.querySelector(".work .Previous");
   let pc= document.querySelector(".play .current");
   let pp=document.querySelector(".play .Previous");
   let sc= document.querySelector(".study .current");
   let sp=document.querySelector(".study .Previous");
   let ec= document.querySelector(".exercise .current");
   let ep=document.querySelector(".exercise .Previous");
   let soc= document.querySelector(".social .current");
   let sop=document.querySelector(".social .Previous");
   let sec= document.querySelector(".selfcare .current");
   let sep=document.querySelector(".selfcare .Previous");
console.log(wc);
    fetch('data.json')
.then(response=>response.json())

.then(data=>{

    const work= data.find(item => item.title === 'Work');
    console.log(wp);
    const play = data.find(item => item.title === 'Play');
    const study = data.find(item => item.title === 'Study');
    const exercise = data.find(item => item.title === 'Exercise');
    const social = data.find(item => item.title === 'Social');
    const selfcare = data.find(item => item.title === 'Selfcare');
    wc.textContent=`${work.timeframes[t].current}hrs`;
    wp.textContent=`${k} ${work.timeframes[t].previous}hrs`;
    pc.textContent=`${play.timeframes[t].current}hrs`;
    pp.textContent=`${k} ${play.timeframes[t].previous}hrs`;
    ec.textContent=`${exercise.timeframes[t].current}hrs`;
    ep.textContent=`${k} ${work.timeframes[t].previous}hrs`;
    soc.textContent=`${social.timeframes[t].current}hrs`;
    sop.textContent=`${k} ${social.timeframes[t].previous}hrs`;
    sc.textContent=`${study.timeframes[t].current}hrs`;
    sp.textContent=`${k} ${study.timeframes[t].previous}hrs`;
    sec.textContent=`${social.timeframes[t].current}hrs`;
    sep.textContent=`${k} ${social.timeframes[t].previous}hrs`;

})
}