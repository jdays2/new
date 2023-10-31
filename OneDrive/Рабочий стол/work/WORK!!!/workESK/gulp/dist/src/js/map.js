// //hover для карты с регионами
// const geoBox = document.querySelector('.geo');

// const select = (items, currentItem) => {
// 	const activeClass = 'active';
// 	items.forEach((e) => {
// 		if (e.classList.contains(activeClass)) {
// 			e.classList.remove(activeClass);
// 		}
// 		if (e === currentItem) {
// 			e.classList.add(activeClass);
// 		}
// 	});
// };

// if(geoBox){
//   const geoName =  geoBox.querySelectorAll('[data-tab-path]');
//   const geoMarker =  geoBox.querySelectorAll('[data-tab-box]')

//   if(geoName&&geoMarker) {
//     geoName.forEach((name)=>{
//       const path = name.getAttribute('data-tab-path')
//       name.addEventListener('mouseover', ()=> {
        
//         const currentBox = document.querySelector(`[data-tab-box='${path}']`)
//         select(geoMarker, currentBox)
//         select(geoName, name)
//       })})
//   }
// }
