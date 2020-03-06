import React, { Component } from 'react'
import './style.css'
import StyleItem from './StyleItem'
const styles=[{classe: 'moderne',
imgURL: "https://st.hzcdn.com/simgs/7261dfa30d9364c0_8-6609/moderno-salon.jpg"},
{classe: 'classique',
imgURL: "https://st.hzcdn.com/simgs/3691efcc0ca74c89_8-0171/classique-chic-salon.jpg"},

{classe: 'scandinave',
imgURL: "https://www.heyho.fr/wp-content/uploads/2019/01/deco-scandinave.jpg"},

{classe: 'campagne',
imgURL: "https://www.joliplace.com/wp-content/uploads/2017/10/salle-a-manger-deco-interieur-style-campagne-chic-1024x768.jpg"},
{classe: 'contemporain',
imgURL: "https://static.cotemaison.fr/medias_10999/w_420,c_limit,g_north/v1467732984/un-salon-contemporain-de-style-industriel_5631935.jpg"},

{classe: 'tounsi',
imgURL: "data:image/jpeg;base64,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"},


{classe: 'vintage',
imgURL: "https://sf1.viepratique.fr/wp-content/uploads/sites/8/2012/02/Salon3-550x410.jpg"},
{classe: 'bistro',
imgURL: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/deco/pieces/cuisine/decoration-bistrot/70534804-1-fre-FR/La-deco-bistrot-s-invite-chez-vous.jpg"},

{classe: 'boheme',
imgURL: "https://i.pinimg.com/originals/10/ab/62/10ab627107fac4b4abb5a7bea5952038.jpg"},
{classe: 'naturel',
imgURL: "https://www.deco.fr/sites/default/files/styles/card_480x275/public/2019-12/d%C3%A9co-jungle-chic.jpg?itok=rMGg9dkY"},
{classe: 'electrique',
imgURL: "https://st.hzcdn.com/simgs/51c1f70f058bc291_8-6206/eclectique-salon.jpg"},
{classe: 'industriel',
imgURL: "https://st.hzcdn.com/simgs/b311b9680bbeaf03_8-3312/industriel-salon.jpg"}]

 class Style extends Component {
constructor(props) {
    super(props);
    
}

    render() {
        return (
            <div className="styleList">
                {styles.map(el=><StyleItem 
                styledemanded={this.props.styledemanded} 
                handleStyle={x => this.props.handleStyle(x)}
                data={el} />
                
                )}
            </div>
        )
    }
}

export default Style