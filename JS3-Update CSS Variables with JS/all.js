const inputs =document.querySelectorAll('.control input');
function handleUpdate(){
    const suffix=this.dataset.sizing || "";
    console.log(this.value+suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>input.addEventListener('change',handleUpdate,false));
inputs.forEach(input=>input.addEventListener('mousemove',handleUpdate,false));
