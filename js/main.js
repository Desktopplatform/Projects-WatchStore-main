
//Search modal
function openModalsearch() {
    document.getElementById("myModalSearch").style.display = "flex";
}

function closeModalsearch() {
    document.getElementById("myModalSearch").style.display = "none";
}

function performSearch() {
    const query = document.getElementById('search');
    // alert('Searching for: ' + query);
}


//gallery modal
function openModalgallery(src){
    document.getElementById("modalImage").src=src;
    document.getElementById("myModal").style.display='flex';
}
function closeModalgallery(){
    document.getElementById("myModal").style.display='none';
}
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModalgallery();
    }
  } 
  /** Scroll top button **/
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /******Search Products*******/      
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const allProducts = document.querySelectorAll('.card-pro');
  
    allProducts.forEach(product => {
        const productName = product.querySelector('.card-title h4').innerText.toLowerCase();
  
        if (productName.includes(input)) {
            product.style.display = ''; 
        } else {
            product.style.display = 'none';
        }
    });
  }
  

//category products

const category=[
    {category_id:"1",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپرت مردانهه.jpeg'},
    {category_id:"2",title:"ساعت دیجیتال مردانه",img:"/assets/images/ساعت اسپرت پسرانهههه.jpg"},
    {category_id:"3",title:"ساعت مجلسی مردانه",img:"/assets/images/ساعت مجلسی مردانهه.webp"},
    {category_id:"4",title:"ساعت اسپرت دخترانه",img:"/assets/images/اسپرت دخترانه.jpeg"},
    {category_id:"5",title:"ساعت دیجیتال زنانه",img:"/assets/images/ساعت دیجیتال دخترانهه.jpg"},
    {category_id:"6",title:"ساعت مجلسی زنانه",img:"/assets/images/مجلسی دخترانه.webp"}
];

const products=[
    {product_id:"1",title:"ساعت اسپرت مردانه رولکس",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"1"},
    {product_id:"2",title:"ساعت دیجیتال مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"3",title:"ساعت مجلسی مردانه",img:'/assets/images/ساعت مجلسی مردانه_prev_ui.png',category_id:"5"},
    {product_id:"4",title:" ساعت اسپرت مردانه رولکس ",img:'/assets/images/ساعت اسپرت دختران_prev_ui.png',category_id:"3"},
    {product_id:"5",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی مردانه_prev_ui.png',category_id:"4"},
    {product_id:"6",title:"ساعت مجلسی مردانه",img:'/assets/images/ساعت مجلسی مردانه_prev_ui.png',category_id:"6"},
   


    {product_id:"7",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"1"},
    {product_id:"8",title:"ساعت اسپرت مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"9",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپورت مردانه_prev_ui.png ',category_id:"3"},
    {product_id:"10",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپورت مردانه_prev_ui.png',category_id:"5"},
    {product_id:"11",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپرت دختران_prev_ui.png',category_id:"6"},
    {product_id:"12",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی دخترانه2_prev_ui.png',category_id:"4"},


    {product_id:"13",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"6"},
    {product_id:"14",title:"ساعت اسپرت مردانه",img:"/assets/images/ساعت اسپرت دختران_prev_ui(1).png",category_id:"5"},
    {product_id:"15",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی دخترانه2_prev_ui.png',category_id:"4"},
    {product_id:"16",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپورت مردانه_prev_ui.png ',category_id:"3"},
    {product_id:"17",title:"ساعت اسپرت مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"18",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"1"},


    {product_id:"19",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"3"},
    {product_id:"20",title:"ساعت اسپرت مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"21",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت دیجیتال پسرانه_prev_ui.png',category_id:"1"},
    {product_id:"22",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپرت دختران_prev_ui(1).png',category_id:"4"},
    {product_id:"23",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی دخترانه2_prev_ui.png',category_id:"3"},
    {product_id:"24",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت دیجیتال دخترانهه_prev_ui.png',category_id:"6"},

    {product_id:"25",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"1"},
    {product_id:"26",title:"ساعت اسپرت مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"27",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی دخترانه2_prev_ui.png',category_id:"5"},
    {product_id:"28",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت دیجیتال پسرانه_prev_ui.png',category_id:"3"},
    {product_id:"29",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپورت مردانه_prev_ui.png',category_id:"4"},
    {product_id:"30",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی مردانه_prev_ui.png',category_id:"6"},

    {product_id:"31",title:"ساعت اسپرت مردانه",img:'/assets/images/717uH2mKhbL_prev_ui.png',category_id:"1"},
    {product_id:"32",title:"ساعت اسپرت مردانه",img:"/assets/images/Apogee_Horizon_1_3ae59c6421_prev_ui.png",category_id:"2"},
    {product_id:"33",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت دیجیتال دخترانهه_prev_ui.png',category_id:"5"},
    {product_id:"34",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپرت دختران_prev_ui.png',category_id:"3"},
    {product_id:"35",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت مجلسی مردانه_prev_ui.png',category_id:"4"},
    {product_id:"36",title:"ساعت اسپرت مردانه",img:'/assets/images/ساعت اسپرت دختران_prev_ui.png',category_id:"6"}
];


//نمایش محصولات دسته بندی در قسمت category

    const demoCategory=document.getElementById("demo-category");
    category.forEach((cat,item)=>{
        const divCol=document.createElement('div');
        divCol.setAttribute('class','col-lg-2');
        divCol.setAttribute('data-aos','fade-up');
        divCol.setAttribute('data-aos-delay',`${200+(item)*100}`);
        divCol.innerHTML = `
        <div class="content-cat">
        <img src="${cat.img}" alt="${cat.title}"data-target="${cat.category_id}" class="img-fluid imgtabs" loading="lazy">
        <h4>${cat.title}</h4>
        </div>
        `;
        divCol.onclick = () =>categoryImages(cat.category_id);
        demoCategory.appendChild(divCol);
    });


//products lists
function categoryImages(categoryId){
    const productscat=document.getElementById("product-display");
    productscat.innerHTML='';

    const filterpro=products.filter(product=>product.category_id ===categoryId);
    filterpro.forEach(pro=>{
            const cateDiv=document.createElement('div');
            cateDiv.setAttribute('class','col-lg-3');
            cateDiv.innerHTML=`
            <div class="card card-pro"style="background:color-mix(in srgb, #181823, transparent 2%); ">
                <div class="card-content-pro">
                    <img src="${pro.img}" alt="${pro.title}" data-target="${pro.category_id}" class="img-fluid" loading="lazy">
                    <div class="card-title">
                        <h4>${pro.title}</h4>
                    </div>
                    <button class="buyNow-button">Buy Now</button>
                </div>
            </div>
            
            `;
            productscat.appendChild(cateDiv);

    });

    
}
document.addEventListener('DOMContentLoaded', categoryImages);








