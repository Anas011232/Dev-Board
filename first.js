let cnt=20;
let pnt=6;
document.querySelectorAll('.btna').forEach(function(button) {
    button.addEventListener('click', function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
        button.disabled = true;
        button.classList.add('bg-gray-500');
        button.classList.remove('bg-blue-800');

        cnt++;
        document.getElementById('increase').innerText=cnt;

        pnt--;
        document.getElementById('deccrease').innerText=pnt;

        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        const currentTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

        const div=document.createElement('div')
        div.classList.add('bg-[#F4F7FF]', 'p-5', 'rounded-xl', 'mt-2')
        div.innerHTML=`
        <h1>You have Complete The Task Add Dark Mode at ${currentTime}</h1>
        
        `

        document.getElementById('add-to-list').appendChild(div);

        document.getElementById('clear').addEventListener('click',function(){
            const remove=document.getElementById('add-to-list');
            remove.innerHTML='';
    
        })
        
        
        
    });
});

document.getElementById('some').addEventListener('click',function(){
    window.location.href='question.html';
})

