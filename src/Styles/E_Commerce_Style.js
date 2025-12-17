export const NavStyles = {
    nav : "bg-gray-800 text-white w-full fixed top-0  z-50",
    mainDiv : "container mx-auto flex items-center justify-between py-4 px-6",
    logo : "text-2xl font-bold text-red-600",
    navLinks : "hidden md:flex gap-6",
    link : "text-semibold text-gray-200 text-xl hover:text-gray-400",
    wishlisCount : "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center",
    cartCount : "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
}

export const footerStyle = {
    footer : "bg-gray-900 text-gray-400 py-6 mt-20",
    mainDiv : "container mx-auto text-center"
}

// COMPONENTS STYLES 

export const Slider = {
    swiper : "w-full h-full mt-10 md:mt-0 ",
    mainDiv : "w-full h-[500px] bg-cover bg-center flex flex-col items-center justify-center relative ",
    bgEffect : "inset-0 absolute bg-black/50",
    mainSlideDiv : "relative z-10 text-center text-white max-w-3xl px-6",
    title : "text-xl sm:text-2xl md:text-4xl font-bold mb-4",
    description : "text-sm sm:text-lg md:text-xl mx-4 mb-6"
}

export const ProductCard = {
    mainSection : "flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-[1.05] border p-1",
    prdtImageDiv : "relative aspect-square  overflow-hidden",
    imageStyle : "w-full h-full object-cover",
    productDetailDiv : "p-4 flex flex-col flex-grow",
    titleDiv : "flex flex-col items-start mb-2",
    title : "text-gray-800 font-semibold mb-2 line-clamp-2",
    priceDiv : "flex gap-3 justify-between",
    price : "text-2xl font-bold text-indigo-600 mb-3",
    badge : "absolute top-2 left-4 px-2 py-1 rounded-full bg-opacity-45 font-semibold  text-gray-800 text-sm",
    btnDiv : "mt-auto flex",
    addToCartBtn : "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    wishlistBtn : "py-2 px-4 bg-gray-400 rounded-md"
}

export const productList = {
    mainDiv : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2'
}

export const CategoriesStyle = {
    mainSection : "py-5 px-24",
    mainTitle : "text-3xl text-center mb-4 mt-6 font-bold",
    mainCatDiv : "flex items-center justify-center flex-wrap",
    catLink : "bg-gray-500 text-white font-bold px-4 py-2 mx-4 my-2 rounded-lg"
}


// PAGES STYLES

export const cart = {
    mainSection : "flex flex-col lg:flex-row justify-between gap-6 p-6 h-auto mt-20",
    mainDiv : "lg:col-span-2 space-y-4 w-full",
    catItemMainDiv : "bg-white rounded-xl p-4 shadow-md flex items-center gap-4",
    proudctImage : "h-24 w-24 object-cover rounded",
    itemtitle : "font-semibold text-lg",
    itemprice : "text-gray-500",
    cartbtnDiv : "flex items-center gap-2 mt-3",
    QtyBtns :"px-3 text-xl font-semibold py-1 bg-gray-200 rounded",
    removeBtn : "text-red-600 text-sm underline mt-2",
    price : "font-semibold text-lg",

    // order summary style
    Div : "bg-white shadow-md rounded-xl p-6 h-fit w-full flex flex-col text-center justify-center",
    mainHeading : "text-xl font-bold mb-3",
    subtotal : "flex justify-between p-1 border-b-2 mb-5",
    tax : "flex justify-between p-1 border-b-2 mb-5",
    total :"flex justify-between font-bold text-lg py-2 border-b-2 border-t-2 my-2",
    buttonsDiv :" flex gap-5 flex-col items-center justify-center md:flex-row w-full",
    checkoutBtn :"block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 py-3 rounded text-white font-bold",
    clearCartbtn :"block w-full text-center mt-4 bg-red-600 hover:bg-red-700 py-3 rounded text-white font-bold"
}

export const categoryPage = {
    mainSection : "container mx-auto mt-16 pt-6 px-10",
    headDiv : "flex gap-5 items-center justify-center",
    catName :"text-3xl font-bold capitalize text-center my-3",
    prdctLength :"text-2xl text-blue-800 font-semibold",
    prdctGrid : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
}

export const checkout = {
    mainSection : "p-6 mt-16 min-h-screen grid lg:grid-cols-3 gap-8 bg-gray-100",
    leftSection : "lg:col-span-2 space-y-6",
    //shipping section style 
    shippingSection : "bg-white p-6 rounded-xl shadow",
    shipHeading : "text-xl font-bold mb-4",
    shippingFromGrid : "grid grid-cols-1 md:grid-cols-2 gap-4",
    //billing section 
    billingSection : "bg-white p-6 rounded-xl shadow",
    billingMainDiv : "flex justify-between items-center mb-3",
    bilHeading : "font-bold text-xl",
    label : "flex items-center gap-2",
    billingFromGrid : "grid grid-cols-1 md:grid-cols-2 gap-4",

    rightSection : "bg-white p-6 rounded-xl shadow h-fit",
    Heading : "text-xl font-bold mb-4",
    Div1 : "space-y-3 max-h-60 overflow-y-auto pr-2",
    subtotalTaxStyle : "flex justify-between p-1 border-b-2 mb-5",
    total : "flex justify-between font-bold text-lg py-2 border-b-2 border-t-2 my-2",
    placeOrderbtn : "w-full mt-4 bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg text-black font-bold"

}

export const orderSuccess = {
    section : 'min-h-screen flex flex-col items-center justify-center',
    headSms : 'text-3xl font-bold mb-4',
    backbtn : 'mt-6 bg-black text-white px-6 py-3 rounded-lg'
}

export const productDetail = {
    mainSection : "container mx-auto px-6 pt-20",
    productDiv : "flex flex-col md:flex-row items-center justify-center gap-12",
    imageDiv : "bg-white  p-6 rounded-xl border w-[50%] shadow",
    image : "w-full object-contain hover:scale-105 transition",
    title : "text-3xl font-bold mb-2",
    brandCat : "text-gray-500 capitalize",
    ratePriceDiv : "mt-4 flex flex-row-reverse justify-between w-[80%] ",
    itemDescription : "text-gray-700 leading-relaxed mt-4 w-[80%]",
    otherinfoDiv : "flex mt-4 justify-between w-[80%] ",
    shippingInfo : "text-sm mb-2 text-gray-500  font-semibold",
    warrentyInfo : "text-sm mb-2 text-gray-500  font-semibold",
    btnDiv : "mt-6 flex gap-4",
    addToCartBtn : "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    favoriteBtn : 'py-2 px-4 bg-gray-200 rounded-md',
    // related Products section style 
    relatedmainHeading : "text-2xl font-bold mt-16",
    relatedProductGrid : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6",
    relatedProductDiv : "p-4 bg-white rounded-lg shadow hover:shadow-lg transition",
    relatedPimage : "h-40 w-full object-contain",
    relatedPtitle : "font-semibold mt-2",
    relatedPprice : "text-blue-600 font-bold"
}

export const wishlistPage = {
    // if wishist is empty 
    empltydiv : "min-h-screen flex flex-col items-center justify-center",
    emptyHead : 'text-3xl font-bold mb-4',
    shopBtn : 'text-blue-600 underline',

    //wihslist
    mainSection : 'container mx-auto pt-6 px-10 mt-20',
    mainHeading : 'text-3xl font-bold capitalize text-center mb-5',
    productGrid : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2'

}