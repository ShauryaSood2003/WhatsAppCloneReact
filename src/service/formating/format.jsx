export const formatTime=(time)=>{
    const hour=new Date(time).getHours();
    const minuts=new Date(time).getMinutes();
    return `${hour<10?'0'+hour:hour}:${minuts<10?'0'+minuts:minuts}`
}
export const downloadMedia = (e, originalImage) => {
    e.preventDefault();
  
    try {
      fetch(originalImage)
        .then(resp => resp.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
  
          const nameSplit = originalImage.split("/");
          const duplicateName = nameSplit.pop();
          a.download = "" + duplicateName + "";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(e => {
          console.log(e.message);
        });
    } catch (e) {
      console.log(e.message);
    }
  };
  