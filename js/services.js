var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn_services = document.getElementsByClassName("btn_services");
span.addEventListener("click", ()=> {
    modal.style.display = "none";
})
window.addEventListener("click",(event)=>{
    if (event.target == modal) {
    modal.style.display = "none";
  }
})

for (let index = 0; index < btn_services.length; index++) {
    btn_services[index].addEventListener("click",()=>{
        modal.style.display = "block";  
        var titre_service;
        var detail_service;
        if(index==0){
        titre_service="Why Do We Help With Consulting?";
        detail_service="We are here to assist businesses and projects in Morocco with consulting for repair and maintenance.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in sint totam sapiente praesentium explicabo excepturi sequi voluptatibus quisquam veniam, a assumenda perferendis est, doloremque id. Id exercitationem eius dignissimos.";
        }
        else if(index==1){
            titre_service="Equipment Maintenance";
            detail_service="Our equipment maintenance team ensures that your machinery operates at peak efficiency. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in sint totam sapiente praesentium explicabo excepturi sequi voluptatibus quisquam veniam, a assumenda perferendis est, doloremque id. Id exercitationem eius dignissimos.";
        }
        else if(index==2){
            titre_service="Facility Maintenance";
            detail_service="We provide comprehensive facility maintenance services to keep your premises safe and functional. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in sint totam sapiente praesentium explicabo excepturi sequi voluptatibus quisquam veniam, a assumenda perferendis est, doloremque id. Id exercitationem eius dignissimos.";
        }
        document.getElementById("titre_service").textContent=titre_service;
        document.getElementById("detail_service").textContent=detail_service;
    });
    
}