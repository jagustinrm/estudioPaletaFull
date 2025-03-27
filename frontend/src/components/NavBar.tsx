export default function NavBar () {
    return (
    <div>
    <header className="border-b border-primary w-full bg-gradient-to-r from-primary to-back text-white fixed top-0 left-0">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-27">
 
      <a href="#" className="text-xl font-bold"><img src="/img/banner.png" className="h-25" alt=""/> </a>
        
    
      <nav className="hidden md:flex gap-1 flex-col items-center ">
        <div className="flex flex-row">
          <input 
          type="search" 
          placeholder="Buscar productos..." 
          className="input-search px-4 py-1 rounded-full border text-dark-blue text-2xlfocus:outline-none focus:ring-2 focus:ring-primary w-64 ml-4"
            />
            <img className=" w-12 h-8" src="/img/icons/search-svgrepo-com.svg" alt=""/>
        </div>
        <div className="border-t border-primary flex flex-row gap-3" >
            <a href="#" className=" text-dark-blue text-1XL   hover:text-violet">INICIO</a>
            <a href="#" className="text-dark-blue text-1XL  hover:text-violet moveToProductos">PRODUCTOS</a>
            <a href="#" className="text-dark-blue text-1XL   hover:text-violet">CONTACTO</a>
        </div>  
      </nav>
 
      <div className="flex flex-row gap-2">
        <img  className="border border-primary rounded-full bg-primary w-10 h-10" src="/img/icons/cart-shopping-svgrepo-com.svg" alt=""/>
        <img  className="border border-primary rounded-full bg-secondary w-10 h-10" src="/img/icons/user-alt-1-svgrepo-com.svg" alt=""/>
      </div>
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </header>
  
  <div className="h-16"></div>
  </div>

    )
}