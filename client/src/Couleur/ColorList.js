import React, { Component } from 'react'
import './color.css'
import ColorItem from './ColorItem'
import { connect } from 'react-redux';
import Alerts from '../components/pieces/Alerts';
const color=[
{name:"Rose-Bonbons",
    imgURL: "https://www.designferia.com/sites/default/files/images/palettes-de-couleurs-chaudes.jpg"},

{name:"Gris-Bleus",
    imgURL: "https://www.designferia.com/sites/default/files/images/tons-sobres-palettes-de-couleurs.jpg"},

{name:"Couleurs-Pastel",
    imgURL: "https://www.designferia.com/sites/default/files/images/tons-pastel-deco-interieure.jpg"},

{name:"Nuance-Turquoise",
    imgURL: "https://www.designferia.com/sites/default/files/images/turquoise-palettes-de-couleurs-deco.jpg"},

{name:"Couleurs-Saumon",
    imgURL: "https://www.designferia.com/sites/default/files/images/salle-a-manger-couleurs-sables.jpg"},

{name:"Teintes-Vertes",
    imgURL: "https://www.designferia.com/sites/default/files/images/palettes-de-couleurs-tendres.jpg"},


{name:"Gris-Orangé-Noir",
    imgURL: "https://www.designferia.com/sites/default/files/images/design-deco-couleurs-chambre_0.jpg"},

{name:"Decor-Romantique-Decor-Féminines",
    imgURL: "https://www.designferia.com/sites/default/files/images/palettes-de-couleurs-chambre-design.jpg"},

{name:"Moderne-epuré",
    imgURL: "https://www.designferia.com/sites/default/files/images/couleurs-modernes-palettes-de-teintes.jpg"},

{name:"Tons-Joyeux(Bleu-Orange)",
    imgURL: "https://www.designferia.com/sites/default/files/images/accessoires-couleurs-chaudes.jpg"},

{name:"Vert-Beige",
    imgURL: "https://www.designferia.com/sites/default/files/images/salle-de-bains-palettes-de-couleurs.jpg"},

{name:"Bleu(Eau-Profonde)",
    imgURL: "https://www.designferia.com/sites/default/files/images/couleurs-palettes-de-nuances-foncees.jpg"},


{name:"Moderne(Violet)",
    imgURL: "https://www.designferia.com/sites/default/files/images/palettes-de-couleurs-romantique.jpg"},

{name:"Rose-Bleu",
    imgURL: "https://www.designferia.com/sites/default/files/images/palettes-de-couleurs-rose.jpg"},

]


 class ColorList extends Component {
constructor(props) {
    super(props);
    
}

    render() {
        return (
            <div>
                <Alerts />
                <div className="colorList">
                    {color.map(el=><ColorItem color={this.props.color} handleColor={x=>this.props.handleColor(x)} data={el} />
                    
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        alert:state.alert
    }
}
export default connect(mapStateToProps)(ColorList)
