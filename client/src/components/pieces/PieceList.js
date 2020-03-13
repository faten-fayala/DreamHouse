import React from 'react'
import  Salon from './icons/sofa.png'
import  desk from './icons/desk.png'
import  bathroom from './icons/bathroom.png'
import  wc from './icons/wc.png'
import  parental from './icons/parental.png'
import  garden from './icons/picket.png'
import  Kitchen from './icons/kitchen.png'
import  Bedroom from './icons/bedroom.png'
import  baby from './icons/cradle.png'
import  dinner from './icons/dinner.png'
import PieceItem from './PieceItem'
import Alerts from './Alerts'
const list =[
    {img:Salon,
    title:'Salon'},
    {img:Bedroom,
        title:'Chambre Adulte'} ,
     {img:Kitchen,
            title:'Cuisine'},
            {img:desk,
                title:'Bureau'},
                {img:bathroom,
                    title:'Salle de Bain'},
                    {img:wc,
                        title:'WC'},
                        {img:garden,
                            title:'Jardin'},
                            {img:dinner,
                                title:'Salle à Manger'},
                                {img:baby,
                                    title:'Chambre à Bébé'},
                                    {img:parental,
                                        title:'Suite Parentale'}

    ]
const PieceList = (props) => {
    return (
        <div className="piecelist">
        <Alerts/>
            {list.map(el=> <PieceItem handlePiece={x => props.handlePiece(x)} oneImg={el} piece={props.piece}/>)}
        </div>
    )
}

export default PieceList
