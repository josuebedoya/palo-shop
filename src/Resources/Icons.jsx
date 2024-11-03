import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineCircle } from 'react-icons/md'
import { GrUserSettings } from 'react-icons/gr';
import {
  IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright,
  IoIosArrowForward, IoMdExit, IoMdAddCircleOutline,
  IoMdAddCircle, IoMdRemoveCircle, IoMdRemoveCircleOutline, IoMdClose  } from 'react-icons/io';
import { FaArrowRight, FaRegHeart, FaStar, FaRegEye } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegStar, FaHeartCircleCheck } from 'react-icons/fa6';
import { TiDocumentText } from 'react-icons/ti';
import { PiEyeSlashDuotone } from "react-icons/pi";
import { IoAlert } from "react-icons/io5";

// icon magnifying glass
export const SearchEngineIcon = ( { atr, classIcons } ) => {
  return (
    <BiSearchAlt style={ atr } className={ classIcons }/>
  )
};

// icon profile avatar
export const ProfileIcon = ( { atr, classIcons } ) => {
  return (
    <GrUserSettings style={ atr } className={ classIcons }/>
  )
};

// angle pointing down 
export const AngleBottomIcon = ( { atr, classIcons } ) => {
  return (
    <IoIosArrowDown style={ atr } className={ classIcons }/>
  )
};

// angle pointing right between a circle
export const AngleRightDroprightIcon = ( { atr, classIcons } ) => {
  return (
    <IoIosArrowDropright style={ atr } className={ classIcons }/>
  )
};

// angle pointing right  type angle
export const AngleRightIcon = ( { atr, classIcons } ) => {
  return (
    <IoIosArrowForward style={ atr } className={ classIcons }/>
  )
};

// angle pointing left type angle
export const AngleLeftIcon = ( { atr, classIcons } ) => {
  return (
    <IoIosArrowBack style={ atr } className={ classIcons }/>
  )
};

// circle
export const CircleIcon = ( { atr, classIcons } ) => {
  return (
    <MdOutlineCircle style={ atr } className={ classIcons }/>
  )
};

//  arrow pointing right
export const ArrowRightIcon = ( { atr, classIcons } ) => {
  return (
    <FaArrowRight style={ atr } className={ classIcons }/>
  )
};

// Cart Basket
export const CartIcon = ( { atr, classIcons } ) => {
  return (
    <AiOutlineShoppingCart style={ atr } className={ classIcons }/>
  )
};

// star
export const StarIcon = ( { atr, classIcons, onClick } ) => {
  return (
    <FaStar style={ atr } className={ classIcons } onClick={ onClick }/>
  )
};

// star without background, only border
export const StarLineIcon = ( { atr, classIcons, onClick } ) => {
  return (
    <FaRegStar style={ atr } className={ classIcons } onClick={ onClick }/>
  )
};

//Hearth with only border
export const HearthLineIcon = ( { atr, classIcons } ) => {
  return (
    <FaRegHeart style={ atr } className={ classIcons }/>
  )
};

//Heart with check
export const HearthCheckIcon = ( { atr, classIcons } ) => {
  return (
    <FaHeartCircleCheck style={ atr } className={ classIcons }/>
  )
};

//Document paper
export const DocumentIcon = ( { atr, classIcons } ) => {
  return (
    <TiDocumentText style={ atr } className={ classIcons }/>
  )
};

//arrow exit between line vox
export const ExitArrowIcon = ( { atr, classIcons } ) => {
  return (
    <IoMdExit style={ atr } className={ classIcons }/>
  )
};

// add between a circle outline
export const AddCircleLineIcon = ( { atr, classIcons } ) => {
  return (
    <IoMdAddCircleOutline style={ atr } className={ classIcons }/>
  )
};

//add between a circle
export const AddCircleIcon = ( { atr, classIcons } ) => {
  return (
    <IoMdAddCircle style={ atr } className={ classIcons }/>
  )
};

//remove between a circle
export const RemoveCircleIcon = ( { atr, classIcons } ) => {
  return (
    <IoMdRemoveCircle style={ atr } className={ classIcons }/>
  )
};

//remove between a circle outLine
export const RemoveCircleIconLine = ( { atr, classIcons } ) => {
  return (
    <IoMdRemoveCircleOutline style={ atr } className={ classIcons }/>
  )
};

//eye with line
export const EyeCloseIcon = ( { atr, classIcons } ) => {
  return (
    <PiEyeSlashDuotone style={ atr } className={ classIcons }/>
  )
};

//eye open
export const EyeOpenIcon = ( { atr, classIcons } ) => {
  return (
    <FaRegEye style={ atr } className={ classIcons }/>
  )
};

//eye open
export const AlertIcon = ( { atr, classIcons } ) => {
  return (
    <IoAlert style={ atr } className={ classIcons }/>
  )
};

//eye open
export const CloseIcon = ( { atr, classIcons } ) => {
  return (
    <IoMdClose style={ atr } className={ classIcons }/>
  )
};