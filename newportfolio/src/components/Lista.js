import {useState} from "react";
import Carrusel from './Carrusel';

function Lista() {
  const [nuevaImagen, setNuevaImagen]= useState ("");
  const [imageList, setImageList]= useState ([
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhjiQ_kCihbqMlX_Z9Em7xk0zXjzUsvHyfg&usqp=CAU",
    "https://us.123rf.com/450wm/aprillrain/aprillrain2209/aprillrain220900194/191556087-imagen-abstracta-de-los-cielos-abiertos-el-camino-el-camino-al-cielo-ilustración-de-alta-calidad.jpg?ver=6",
  ]);

  return (
    <div className="Lista">
      <Carrusel imageList={imageList}/>
      </div>
  );
}

export default Lista;

