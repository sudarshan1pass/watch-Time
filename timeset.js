const time = document.getElementById("time");



    setInterval(()=>{
        const count=new Date();
        time.innerHTML = count.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        time.style.fontSize='100px'
        time.style.display="flex-wrap "
        time.style.padding="10px"
        time.style.margin="100px"

 
    })
