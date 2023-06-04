const initialState = {
    listDo : [
        {
            "id": "topcloth_1",
            "type": "topclothes",
            "name": "Top Cloth 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/clothes/topcloth1_show.jpg",
            "imgSrc_png": "./assets/images/clothes/topcloth1.png"
        },
        {
            "id": "botcloth_1",
            "type": "botclothes",
            "name": "Bot Cloth 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/clothes/botcloth1_show.jpg",
            "imgSrc_png": "./assets/images/clothes/botcloth1.png"
        },
        {
            "id": "shoes_1",
            "type": "shoes",
            "name": "Shoes 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/shoes/shoes1_show.jpg",
            "imgSrc_png": "./assets/images/shoes/shoes1.png"
        },
        {
            "id": "handbag_1",
            "type": "handbags",
            "name": "Handbag 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/handbags/handbag1_show.jpg",
            "imgSrc_png": "./assets/images/handbags/handbag1.png"
        },
        {
            "id": "necklace_1",
            "type": "necklaces",
            "name": "Necklace 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/necklaces/necklace1_show.jpg",
            "imgSrc_png": "./assets/images/necklaces/necklace1.png"
        },
        {
            "id": "hairstyle_1",
            "type": "hairstyle",
            "name": "Hairstyle 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/hairstyle/hairstyle1_show.jpg",
            "imgSrc_png": "./assets/images/hairstyle/hairstyle1.png"
        },
        {
            "id": "background_1",
            "type": "background",
            "name": "Background 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./assets/images/background/background1_show.jpg",
            "imgSrc_png": "./assets/images/background/background1.jpg"
        },
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'THU_DO':
    
    let newListDo = [...state.listDo]

    // let index = newListDo.findIndex(item => item.type == action.data.type)
    let index = newListDo.findIndex(qc => qc.type === action.data.item.type)
    if(index !== -1){
        if(action.data.item.id === newListDo[index].id){
            return {...state}
        }else{
            newListDo[index] =action.data.item
            state.listDo = [...newListDo]
        }
    }
    return { ...state }

  default:
    return state
  }
}
