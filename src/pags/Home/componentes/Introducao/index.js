import React from 'react';
import './style.css';



function Introducao() {
  return (
      <article className='cor-fund'>
        <div className='color-princ container'>
          <div class="row">
            <div class="col-12  text-center my-5">
              <h1 class="display 5 text-white"><strong>Air Free</strong></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 text-center d-flex align-items-center text-white">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit litora conubia porta interdum,
                 pellentesque proin cubilia maecenas penatibus velit at luctus eleifend. Condimentum 
                 leo per accumsan pharetra posuere nisl sollicitudin mattis nostra nascetur sagittis,
                 viverra neque at porttitor justo penatibus faucibus egestas hac natoque. Facilisi 
                 platea purus nibh at pretium velit ipsum vulputate maximus in mauris, rutrum senectus
                 dignissim sit erat risus torquent vitae tempor tempus, nisl egestas lobortis penatibus 
                 conubia vestibulum ut sem gravida imperdiet. Urna fames imperdiet lacus nisi ultrices
                 non cursus ut, fermentum enim fringilla taciti posuere quis mattis, hendrerit magnis 
                 iaculis.Nisl litora orcid  velit fusce.
              </p>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-6">
              <img className='tm-img' src='/img/aviao.jpg' alt=''/>
            </div>

          </div>
        </div>
        </article>
    
    
  );
}

export default Introducao;