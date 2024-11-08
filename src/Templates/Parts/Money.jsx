import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Divisas } from "../../Components/Divisas";
import { AlertIcon, CloseIcon, EyeCloseIcon, EyeOpenIcon } from '../../Resources/Icons';

const Money = ({ amount }) => {

  const [showMoney, setShowMoney] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(amount ? +amount : 0);
  const [rates, setRates] = useState({}); // all coins are stored here
  const [format, setFormat] = useState('COP');
  const exchangeRatesUse = [  //define here what exchange rates are going to be used
    'COP',
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'ABC',
    'XYZ'
  ];

  /*--  Convert amount to money format  --*/
  const moneyFormat = () => {
    return Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: format,  /*--  Receive Value from format --*/
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(convertedAmount);
  };

  useEffect(() => {
    const convertAmount = () => {
      if (Object.keys(rates).length > 0) {
        if (amount !== null && amount !== undefined && !isNaN(amount)) {
          const toUSD = amount / rates['COP']; // convert amount to USD
          const toFormat = toUSD * rates[format]; // convert amount to format
          setConvertedAmount(toFormat);
        } else {
          setConvertedAmount(null);
        }
      }
    };
    convertAmount();
  }, [format, rates, amount]);

  /*--  Created options, and exclude invalid options  --*/
  const optionsInvalid = exchangeRatesUse.filter(type => !(type in rates));
  const optionsValid = exchangeRatesUse.map((type, i) => (
    type in rates ? (
      <option key={i} value={type}>
        {type}
      </option>
    ) : null
  ));

  /* hidden money, replace for ** */
  const hiddenAmountMoney = (amount) => {
    setShowMoney(!showMoney);
    setConvertedAmount(() => '*'.repeat(amount.toString().length));
  };

  return (
    <>
      <div className='amountMoney relative'>
        <h3>Tu saldo:</h3>
        <div className='flex items-center gap-2'>
          <i onClick={() => hiddenAmountMoney(convertedAmount)}>
            {showMoney ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </i>
          {!showMoney ? convertedAmount : (<>
            <span className=' flex justify-between gap-1 '>
              <span className="money family-oswald w-20">
                <Divisas setRates={setRates} />
                {moneyFormat()}
              </span>
              <select value={format} onChange={(e) => setFormat(e.target.value)} id='select-format'>
                {optionsValid}
              </select>
            </span>
            {
              optionsInvalid.length > 0 ?
                openModal ? (
                  <>
                    <div className='modal-invalid-divisas absolute bg-white rounded-xl py-6 px-4 w-48 shadow-custom -left-9 -top-1'>
                      {
                        optionsValid.length !== 0 ? (
                          <>
                            <div className='modal-top flex justify-between gap-4'>
                              <h2 className='title text-xs tracking-wider mb-2'>DIVISAS INVALIDAS:</h2>
                              <i onClick={() => setOpenModal(!openModal)}>
                                <CloseIcon classIcons='cursor-pointer' />
                              </i>
                            </div>

                            <ul className='invalid-divisa'>
                              {
                                optionsInvalid.map((invalid, i) => (
                                  <li key={i} className='rate text-red-600 family-oswald underline text-xs'>
                                    {invalid}
                                  </li>
                                ))
                              }
                            </ul>
                          </>
                        ) : null
                      }
                    </div>
                  </>
                ) : (
                  <i onClick={() => setOpenModal(!openModal)} title='Algunas divisas ingresadas no son válidas. Haz clic para ver más detalles.'>
                    <AlertIcon classIcons='icon-alert cursor-pointer text-red-700 font-bold text-xl' />
                  </i>
                ) : null
            }
          </>)}
        </div>
      </div>
    </>
  );
};

Money.propTypes = {
  amount: PropTypes.number.isRequired,
}

export { Money };