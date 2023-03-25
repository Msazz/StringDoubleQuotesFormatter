const textArea = document.getElementById("textArea");
const submit = document.getElementById("btnSubmit");
const reset = document.getElementById("btnReset");

submit.addEventListener("click",()=>{
    const strArr = textArea.value.split("\n");
    textArea.value = "";
    strArr.forEach(element => {
        const ele = `"${element}",\n`;
        textArea.value += ele;
    });
});

reset.addEventListener("click",()=>{
    textArea.value = "";
});