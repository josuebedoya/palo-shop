import { useState } from 'react';

import { AngleRightIcon, HearthCheckIcon, HearthLineIcon, DocumentIcon } from '../../Resources/Icons';
import { Button } from '../Button';
import { Stars } from '../Stars';
import { Modalproduct } from './ModalProduct';

const getImagesProduct = require.context('../../Resources/Images/ProductImages', true, /\.(jpg|png)$/);

const Product = (props) => {
  const [ IsOpen, setIsOpen ] = useState(false);
  const [ outstanding, setOutstanding ] = useState(false);
  const [ changeImg, setChangeImg ] = useState(false);

  const HoverChangeImg = () => {
    if (props.imgHover) {
      setChangeImg(!changeImg);
    };
  };

  /* show a part of the description in the summary */
  let summary = '';

  if (props.children) {

    for (let i = 0; i <= 250; i++) {
      summary += props.children[ i ];
    };
  }

  /* change Icon in outstanding */
  const Added = () => {
    setOutstanding(!outstanding);
  };

  /* open modal with infromation product */
  const OpenModal = () => {
    setIsOpen(!IsOpen);
  };

  if (IsOpen) {
    return <Modalproduct close={OpenModal} title={props.title} description={props.children} price={props.price} img={props.img} imgHover={props.imgHover} isOpen={IsOpen} />;
  };

  return (
    <>
      <div id='item-product' className='z-0 transition-transform duration-300 transform hover:scale-101 hover:shadow-custom bg-white rounded-2xl p-1'>
        <div className='item-image'>
          {!changeImg ? (
            <img src={getImagesProduct(`./${props.img}`)} alt={props.title} className='rounded-2xl cursor-pointer z-0 max-h-56 w-full max-w-full'
              onMouseEnter={HoverChangeImg} />
          ) : (
            <img src={getImagesProduct(`./${props.imgHover}`)} alt={props.title} className='rounded-2xl cursor-pointer z-0 max-h-56 w-full max-w-full ' onMouseLeave={HoverChangeImg} />
          )}
        </div>
        <div className='item-stars text-13'>
          <Stars />
        </div>
        <div className='content mx-2'>
          <div className='item-title text-base font-bold my-3'>
            <h3>{props.title}</h3>
          </div>
          <div className='text-base text-justify'>
            <p>
              {summary}
            </p>
          </div>
          <div className='item-price text-lg font-bold'>
            <span>{props.price}</span>
          </div>
          <div className='group-buttons flex gap-1 items-center justify-between'>
            <div className='btn-add-to-basket'>
              <Button icon={<AngleRightIcon />} iconRight classBtn='text-base trasn'>
                Añadir
              </Button>
            </div>
            <div className='btns-check flex gap-2'>
              <div className='btn-outstanding'>
                <Button icon={!outstanding ? <HearthLineIcon /> : <HearthCheckIcon />} onClick={Added} classBtn='text-lg' />
              </div>
              <div className='btn-modal-information'>
                <Button icon={<DocumentIcon />} classBtn='text-lg' onClick={OpenModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export { Product };