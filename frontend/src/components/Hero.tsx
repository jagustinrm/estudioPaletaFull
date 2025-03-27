
export default function Hero () {
    return (
    <section className="flex flex-col justify-center items-center  mt-15">
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-6xl h-[600px] ">
            <div className="col-span-3 row-span-4 bg-primary h-full max-h-full rounded-2xl shadow-md ">
                <img className=" w-full h-full object-cover rounded-2xl" src="./img/heroImage.jpg" alt="Cerámicos"/>
            </div>
            <div className="shadow-md  col-span-2 row-span-2 col-start-4 bg-primary  h-full max-h-full rounded-2xl">
                <img className="w-full h-full object-cover rounded-2xl" src="./img/aliens.jpg" alt="Cerámicos"/>
            </div>
        

        <div className=" shadow-md row-span-3 col-start-4 row-start-3 bg-primary  h-full max-h-full rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src="./img/ceni.jpg" alt="Cerámicos"/>
        </div>
        
        <div className="shadow-md row-span-3 col-start-5 row-start-3 bg-primary  h-full max-h-full rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src="./img/hornito.jpg" alt="Cerámicos"/>
        </div>
        
       
            <div className="shadow-md col-span-3 row-start-5 bg-primary gap-30  h-full max-h-full rounded-2xl flex flex-row justify-center items-center ">
                <a href="https://www.instagram.com/estudiopaleta/"><img src="/img/icons/instagram-1-svgrepo-com.svg" alt="Icono" className="w-16 h-16"/></a>
                <img src="/img/icons/mail-svgrepo-com.svg" alt="Icono" className="w-16 h-16"/>
                <a href="https://wa.me/5491132187187" target="_blank">
                    <img src="/img/icons/whatsapp-svgrepo-com.svg" alt="Icono" className="w-16 h-16"/>
                </a>
            </div>   
        </div>
    </section>
    )
}