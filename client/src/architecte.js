import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import "./architecte.css";
import {Button , Carousel} from 'react-bootstrap'

const Item = ({ item: { img, alt } }) => (
  <Carousel.Item>
    <a className="thumbnail" href="javascript:void(0)">
			<img className="media-object"
				src={img}
				alt={alt}
			/>
		</a>
	</Carousel.Item>
)

class Architecte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Architectes: [
        {
          source: [
            "https://api.rhinov.fr/uploads/realProperties/22598/deliverables/18842/after/after2_wm.jpg",
            "https://api.rhinov.fr/uploads/realProperties/22598/deliverables/18842/after/after3_wm.jpg",
            "https://api.rhinov.fr/uploads/realProperties/22598/deliverables/18842/after/after4_wm.jpg",
            "https://api.rhinov.fr/uploads/realProperties/22598/deliverables/18842/after/after1_wm.jpg"
          ],

          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: "aaaaaaaaaaaaaa",
          Adresse: "Monastir",
          Phone: "+216 54 432 952",
          id: uuid()
        },

        {
          source: [
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/85123151_2025890274224339_2828092718666743808_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=I8LtWrMTQpAAX8k1SR3&_nc_ht=scontent.ftun11-1.fna&oh=d39da6d373a8e2d4dc6d7a9967ffeab8&oe=5EEA141F",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/86500664_2025890264224340_2395541816347721728_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=1mwkJ1EHZSYAX_fLArL&_nc_ht=scontent.ftun11-1.fna&oh=8f78ad53a71098ba808b31f4b15efb7d&oe=5F013962",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/86616211_2025890364224330_1700844131963633664_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=JzzQtS0okKUAX9vEqQb&_nc_ht=scontent.ftun11-1.fna&oh=b5aaeecef72fa46bf0e48c917d603b09&oe=5EB84D35",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/85089379_2025890904224276_7804157311445893120_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=ZO30n444_wUAX_aUJTc&_nc_ht=scontent.ftun11-1.fna&oh=ef22bf61cf7c5f23ce35b2bd4e346cc3&oe=5EBAA4D7"
          ],
          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: "aaaaaaaaaaaaa",
          Adresse: "Monastir",
          Phone: "+216 54 432 952",
          id: uuid()
        },
        {
          source: [
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/84762249_2023603107786389_2405519497822732288_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=fli9BoSWPK0AX8WsrsY&_nc_ht=scontent.ftun11-1.fna&oh=6994745ab2553d498a2c838f756838a6&oe=5EBC1FEB"
          ],
          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: 2010,
          Adresse: "aaaaaaaaaaaaa",
          Phone: 11111111111111,
          id: uuid()
        },
        {
          source: [
            "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/84894212_2023603287786371_1141599189130543104_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=oPrufz2RHrYAX_cftwp&_nc_ht=scontent.ftun11-1.fna&oh=e2b97ffd926a39938207645d4115524f&oe=5EE8EA44",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/84098148_2023604057786294_1166169872397238272_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=--_gGnCmfxoAX8svW-s&_nc_ht=scontent.ftun11-1.fna&oh=17470240577718cd28df91d9b3fbcb3f&oe=5EFE6862",
            "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/84994521_2023604217786278_4645656564038893568_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=P8_BpiB2ZEkAX8DG1Zt&_nc_ht=scontent.ftun11-1.fna&oh=c539df5b31201438fa4121cc298c6367&oe=5EF34E83"
          ],
          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: 2010,
          Adresse: "aaaaaaaaaaaaa",
          Phone: 11111111111111,
          id: uuid()
        },
        {
          source: [
            "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg"
          ],
          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: 2010,
          Adresse: "aaaaaaaaaaaaa",
          Phone: 11111111111111,
          id: uuid()
        },
        {
          source: [
            "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg"
          ],
          Name: " Montassar Ben Ayach",
          Rating: 4,
          Description: 2010,
          Adresse: "aaaaaaaaaaaaa",
          Phone: 11111111111111,
          id: uuid()
        }
      ]
    };
  }
  render() {
    return (
      <div className="list-architecte">
        <div>
           {this.state.Architectes.map(el => (
            <li className="architecte">
              {/*<div>
                <div
                  id="carouselExampleControls"
                  class="carousel slide carousel-architecte"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    {/* {el.source.map((x , index)=> <li>
    <div class={ index === 0 ? "carousel-item active " : "carousel-item"}>
    
      <img class="d-block w-100" src={x}  />
    
    </div> 
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="https://st.hzcdn.com/simgs/d89145c00cf86bc0_8-9600/home-design.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="https://st.hzcdn.com/simgs/d89145c00cf86bc0_8-9600/home-design.jpg"
                        alt="Third slide"
                      />
                    </div>

                    {/* </li>
  )} 
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div> */}

<div className="root ">
    <Carousel controls={false} >
      {el.source.map((item, i) =>
                 <Carousel.Item key={i}>
                      <img className="media-object carousel-architecte "
                        src={item}
                        alt={item}
                      />
                  </Carousel.Item>)}
    </Carousel>
  </div>

              <div classname="architecte-items">
                <div className="architecte-contact ">
                  {/* <img  src={el.source}></img> */}
                  <span className="architecte-name">{el.Name}</span>
                  <h2>{el.Rating}</h2>
                  <p>{el.Description}</p>
                  <div className="items-contact">
                    <span className="architecte-phone">
                      <i class="fas fa-phone-alt fa-xs"></i>
                      {el.Phone}
                    </span>
                    <span className="architecte-adress">
                      <i class="fas fa-map-marker-alt fa-xs"></i>
                      {el.Adresse}
                    </span>
                  </div>
                </div>
                <div>
                  <button className="contact-button">Contacter</button>
                </div>
              </div>
            </li>
          ))} 
        </div>
      </div>
    );
  }
}

export default Architecte;

