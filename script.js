const saat1 = document.getElementById('hours');
const dakika1 = document.getElementById('minutes');
const saniye1 = document.getElementById('seconds');
const gun1 = document.getElementById('days');

const newYear = '31 Dec 2021';

function countDown(){
    const yeniyil = new Date(newYear);
    const suan = new Date();

    const totaldakika = new Date(yeniyil - suan) / 1000;

    const gün = Math.floor(totaldakika / 3600 / 24 );
    const saat = Math.floor(totaldakika / 3600) %24 ;
    const dakika = Math.floor(totaldakika /60) %60;
    const saniye = Math.floor(totaldakika) % 60;
    
    saat1.innerHTML = saat;
    dakika1.innerHTML = dakika;
    saniye1.innerHTML = saniye;
    gun1.innerHTML = gün;
    console.log(totaldakika);
    
}
countDown();

setInterval(countDown, 1000);