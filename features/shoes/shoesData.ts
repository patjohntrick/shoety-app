export interface ShoesDataProps {
  id: string;
  category: "Best Seller" | "Men" | "Women";
  imgPath: string;
  name: string;
  price: string;
}

export const shoesData: ShoesDataProps[] = [
  {
    id: "1",
    category: "Best Seller",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e48bdf3-5ef4-4e25-8208-a84ec255c656/dunk-low-retro-se-shoes-RSrHtr.png",
    name: "Retro Se",
    price: "P6,698",
  },
  {
    id: "2",
    category: "Best Seller",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/air-jordan-1-low-shoes-6Q1tFM.png",
    name: "Jordan 1 Low",
    price: "P6,195",
  },
  {
    id: "3",
    category: "Best Seller",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd2e5a6c-287f-431b-af24-4f64d11e0220/zoom-vomero-5-shoes-qZG4RJ.png",
    name: "Vomero 5",
    price: "P8,895",
  },
  {
    id: "4",
    category: "Men",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6dcdccb-b4ef-46a2-bd5a-8e202c6c57e2/jordan-spizike-low-shoes-pBZk7c.png",
    name: "Spizike Low",
    price: "P8,895",
  },
  {
    id: "5",
    category: "Men",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/13190eab-1f63-421e-b8da-c96e5d08ab50/air-jordan-1-low-se-craft-shoes-76v7Vm.png",
    name: "Low SE Craft",
    price: "P6,895",
  },
  {
    id: "6",
    category: "Men",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07d5448e-c263-4169-95ff-195c58804c33/air-jordan-1-low-se-shoes-ZbxSRp.png",
    name: "Low SE",
    price: "P6,395",
  },
  {
    id: "7",
    category: "Women",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4726cc1e-49a3-41f5-80d0-6ac4b0d45b36/air-more-uptempo-shoes-mcpGmG.png",
    name: "More Uptempo",
    price: "P9,395",
  },
  {
    id: "8",
    category: "Women",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/778064b0-bf66-4f4e-b7b9-7435288396ab/cortez-vintage-shoes-W670ZS.png",
    name: "Cortez Vintage",
    price: "5,495",
  },
  {
    id: "9",
    category: "Women",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/57ebb4ae-d7ee-479c-859b-e27e09da6893/calm-flip-flops-n6vxnB.png",
    name: "Nike Calm",
    price: "P2,595",
  },
  {
    id: "10",
    category: "Men",
    imgPath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e2b04ea8-84fb-432f-bec6-e4a420e098e3/air-jordan-1-low-se-craft-shoes-lthN8v.png",
    name: "Low Se Craft",
    price: "P6,395",
  },
];
