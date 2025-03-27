export default function ShippingAndPay () {
    return (
        <section>
    <div className="flex flex-row items-center justify-center bg-gradient-to-r from-back to-primary shadow-md min-h-20 mt-10 gap-4">
        <div className="flex flex-row items-center gap-3">
        <img src="/img/icons/truck-speed-svgrepo-com.svg" alt="Icono" className="w-12 h-12"/>
        <div>
        <p className="text-blue text-2xl font-bold ">ENVÍOS</p>
        <p>Capital Federal</p>
        </div>
        </div>
        <div className="flex flex-row items-center gap-3">
        <img src="/img/icons/money-insert-svgrepo-com.svg" alt="Icono" className="w-12 h-12"/>
        <div>
        <p className="text-blue text-2xl font-bold">MEDIOS DE PAGO</p>
        <p>Hasta 6 cuotas con tarjeta</p>
        </div>
        </div>
        <div className="flex flex-rowitems-center gap-3">
            <img src="/img/icons/artist-brush-svgrepo-com.svg" alt="Icono" className="w-12 h-12"/>
            <div>
                <p className="text-blue text-2xl font-bold">ARTESANAL</p>
                <p>Productos 100% artesanales</p>
            </div>
            </div>
    </div>
</section>
    )
}